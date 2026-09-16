import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
  StatusBar, Animated, Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { Question, OptionKey } from '../types';
import { ProgressBar } from '../components/ProgressBar';
import { RootStackParamList } from './HomeScreen';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
  route: RouteProp<RootStackParamList, 'Quiz'>;
};

const OPTIONS: OptionKey[] = ['A', 'B', 'C', 'D'];
const OPTION_COLORS: Record<string, string> = {
  correct: '#2aa889',
  incorrect: '#e07a5f',
  neutral: '#1a2d38',
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function QuizScreen({ navigation, route }: Props) {
  const { questionCount, filter } = route.params;
  const { startSession, recordAnswer, completeSession } = useStore();
  const insets = useSafeAreaInsets();

  const [questions] = useState<Question[]>(() => startSession(questionCount, filter));
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<OptionKey | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [timeLeft, setTimeLeft] = useState(questionCount * 60);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTimedOut = useRef(false);
  const questionStartTime = useRef(Date.now());
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          if (!isTimedOut.current) {
            isTimedOut.current = true;
            completeSession();
            navigation.replace('Result', { sessionId: Date.now().toString() });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const currentQ = questions[index];
  const isLast = index === questions.length - 1;

  const animateTransition = (callback: () => void) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
    ]).start(() => {
      callback();
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  };

  const handleAnswer = useCallback((key: OptionKey) => {
    if (selectedAnswer) return;
    const isCorrect = key === currentQ.correct;
    const timeSpent = Date.now() - questionStartTime.current;

    setSelectedAnswer(key);
    setShowExplanation(true);
    recordAnswer(currentQ.id, key, isCorrect, timeSpent);
    setSessionResults(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  }, [selectedAnswer, currentQ]);

  const handleNext = () => {
    if (isLast) {
      completeSession();
      navigation.replace('Result', { sessionId: Date.now().toString() });
      return;
    }
    animateTransition(() => {
      setIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      questionStartTime.current = Date.now();
    });
  };

  const handleQuit = () => {
    Alert.alert('Quit Session', 'Your progress so far will be saved.', [
      { text: 'Continue Quiz', style: 'cancel' },
      {
        text: 'Quit',
        style: 'destructive',
        onPress: () => {
          completeSession();
          navigation.replace('Result', { sessionId: Date.now().toString() });
        },
      },
    ]);
  };

  const getOptionStyle = (key: OptionKey) => {
    if (!selectedAnswer) return 'neutral';
    if (key === currentQ.correct) return 'correct';
    if (key === selectedAnswer && key !== currentQ.correct) return 'incorrect';
    return 'neutral';
  };

  if (!currentQ) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#e8f1f5', fontSize: 16 }}>No questions available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0e1a21" />

      {/* Top bar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={handleQuit} style={styles.quitBtn}>
          <Text style={styles.quitText}>✕ Quit</Text>
        </TouchableOpacity>
        <View style={styles.progressCenter}>
          <Text style={styles.progressText}>
            {index + 1} / {questions.length}
          </Text>
          <ProgressBar
            progress={(index + 1) / questions.length}
            height={4}
            color="#2aa889"
          />
        </View>
        <View style={styles.rightCol}>
          <View style={[
            styles.timerBox,
            timeLeft <= 60 && styles.timerBoxRed,
            timeLeft > 60 && timeLeft <= 180 && styles.timerBoxYellow,
          ]}>
            <Text style={[
              styles.timerText,
              timeLeft <= 60 && styles.timerTextRed,
              timeLeft > 60 && timeLeft <= 180 && styles.timerTextYellow,
            ]}>⏱ {formatTime(timeLeft)}</Text>
          </View>
          <Text style={styles.scoreText}>{sessionResults.correct}/{sessionResults.total}</Text>
        </View>
      </View>

      <Animated.ScrollView
        style={[styles.scroll, { opacity: fadeAnim }]}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 40 + insets.bottom }]}
      >
        {/* Question card */}
        <View style={styles.card}>
          <Text style={styles.questionNum}>
            Question {index + 1}
            {' · '}
            <Text style={styles.examSource}>Exam {currentQ.examSource}</Text>
          </Text>
          <Text style={styles.questionText}>{currentQ.question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {OPTIONS.map((key) => {
            const state = getOptionStyle(key);
            return (
              <TouchableOpacity
                key={key}
                style={[
                  styles.option,
                  state === 'correct' && styles.optionCorrect,
                  state === 'incorrect' && styles.optionIncorrect,
                  selectedAnswer && state === 'neutral' && styles.optionDimmed,
                ]}
                onPress={() => handleAnswer(key)}
                activeOpacity={selectedAnswer ? 1 : 0.7}
                disabled={!!selectedAnswer}
              >
                <View style={[styles.optionBadge, state === 'correct' && styles.badgeCorrect, state === 'incorrect' && styles.badgeIncorrect]}>
                  <Text style={[styles.optionKey, state !== 'neutral' && styles.optionKeySelected]}>{key}</Text>
                </View>
                <Text style={[styles.optionText, selectedAnswer && state === 'neutral' && styles.textDimmed]}>
                  {currentQ.options[key]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Explanation */}
        {showExplanation && (
          <View style={styles.explanationContainer}>
            <View style={[styles.resultBanner, selectedAnswer === currentQ.correct ? styles.bannerCorrect : styles.bannerIncorrect]}>
              <Text style={styles.resultBannerText}>
                {selectedAnswer === currentQ.correct ? '✓ Correct!' : `✗ Incorrect — Answer is ${currentQ.correct}`}
              </Text>
            </View>

            <View style={styles.explanationCard}>
              <Text style={styles.explanationTitle}>Why {currentQ.correct} is correct:</Text>
              <Text style={styles.explanationText}>{currentQ.correctExplanation}</Text>

              {currentQ.incorrectExplanations
                .filter(e => selectedAnswer && e.options.includes(selectedAnswer) && selectedAnswer !== currentQ.correct)
                .map((e, i) => (
                  <View key={i} style={styles.incorrectExpl}>
                    <Text style={styles.incorrectExplTitle}>
                      Why {e.options.join(', ')} {e.options.length > 1 ? 'are' : 'is'} incorrect:
                    </Text>
                    <Text style={styles.incorrectExplText}>{e.text}</Text>
                  </View>
                ))}
            </View>

            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>
                {isLast ? 'See Results →' : 'Next Question →'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Prompt to answer */}
        {!showExplanation && (
          <Text style={styles.tapHint}>Tap an option to answer</Text>
        )}
      </Animated.ScrollView>
    </View>
  );
}

const C = {
  bg: '#0b1419',
  panel: '#132028',
  surface: '#1a2d38',
  border: '#2c4a5a',
  text: '#e8f1f5',
  muted: '#8aa3b3',
  accent: '#2aa889',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#0e1a21',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    gap: 10,
  },
  quitBtn: { paddingVertical: 4, paddingHorizontal: 8 },
  quitText: { color: C.muted, fontSize: 13 },
  progressCenter: { flex: 1, gap: 4 },
  progressText: { color: C.text, fontSize: 12, fontWeight: '600', textAlign: 'center' },
  rightCol: { alignItems: 'center', gap: 2 },
  timerBox: {
    backgroundColor: C.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  timerBoxYellow: { backgroundColor: 'rgba(212,160,23,0.15)', borderColor: '#d4a017' },
  timerBoxRed: { backgroundColor: 'rgba(224,122,95,0.2)', borderColor: '#e07a5f' },
  timerText: { color: C.text, fontSize: 12, fontWeight: '700' },
  timerTextYellow: { color: '#d4a017' },
  timerTextRed: { color: '#e07a5f' },
  scoreText: { color: C.muted, fontSize: 11, fontWeight: '700' },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: C.panel,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 14,
  },
  questionNum: { color: C.muted, fontSize: 12, fontWeight: '600', marginBottom: 8 },
  examSource: { color: C.accent, fontSize: 11 },
  questionText: { color: C.text, fontSize: 16, lineHeight: 24, fontWeight: '500' },
  optionsContainer: { gap: 10, marginBottom: 14 },
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 14,
    gap: 12,
  },
  optionCorrect: {
    backgroundColor: 'rgba(42,168,137,0.15)',
    borderColor: '#2aa889',
  },
  optionIncorrect: {
    backgroundColor: 'rgba(224,122,95,0.15)',
    borderColor: '#e07a5f',
  },
  optionDimmed: { opacity: 0.5 },
  optionBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: C.panel,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  badgeCorrect: { backgroundColor: '#2aa889', borderColor: '#2aa889' },
  badgeIncorrect: { backgroundColor: '#e07a5f', borderColor: '#e07a5f' },
  optionKey: { color: C.muted, fontSize: 12, fontWeight: '800' },
  optionKeySelected: { color: '#fff' },
  optionText: { color: C.text, fontSize: 14, lineHeight: 20, flex: 1 },
  textDimmed: { color: C.muted },
  explanationContainer: { gap: 12 },
  resultBanner: {
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  bannerCorrect: { backgroundColor: 'rgba(42,168,137,0.2)', borderWidth: 1, borderColor: '#2aa88966' },
  bannerIncorrect: { backgroundColor: 'rgba(224,122,95,0.2)', borderWidth: 1, borderColor: '#e07a5f66' },
  resultBannerText: { color: C.text, fontSize: 15, fontWeight: '700' },
  explanationCard: {
    backgroundColor: C.panel,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 14,
    gap: 10,
  },
  explanationTitle: { color: C.accent, fontSize: 13, fontWeight: '700', marginBottom: 4 },
  explanationText: { color: C.text, fontSize: 13, lineHeight: 20 },
  incorrectExpl: {
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingTop: 10,
  },
  incorrectExplTitle: { color: '#e07a5f', fontSize: 12, fontWeight: '700', marginBottom: 4 },
  incorrectExplText: { color: C.muted, fontSize: 12, lineHeight: 18 },
  nextBtn: {
    backgroundColor: C.accent,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  nextBtnText: { color: '#06241c', fontSize: 15, fontWeight: '800' },
  tapHint: { color: C.muted, fontSize: 13, textAlign: 'center', marginTop: 4 },
});
