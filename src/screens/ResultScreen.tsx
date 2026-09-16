import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { QUESTIONS } from '../data/questions';
import { ProgressBar } from '../components/ProgressBar';
import { RootStackParamList } from './HomeScreen';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Result'>;
  route: RouteProp<RootStackParamList, 'Result'>;
};

export function ResultScreen({ navigation }: Props) {
  const { sessions, getStats } = useStore();
  const insets = useSafeAreaInsets();
  const lastSession = sessions[0];
  const stats = getStats();

  if (!lastSession) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#e8f1f5' }}>No session data</Text>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.primaryBtnText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { score, results } = lastSession;
  const total = results.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 70;

  const questionMap = Object.fromEntries(QUESTIONS.map(q => [q.id, q]));

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1419" />
      <ScrollView contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16, paddingBottom: 40 + insets.bottom }]}>

        {/* Score hero */}
        <View style={[styles.heroCard, passed ? styles.heroPass : styles.heroFail]}>
          <Text style={styles.heroEmoji}>{passed ? '🎉' : '📚'}</Text>
          <Text style={styles.heroScore}>{pct}%</Text>
          <Text style={styles.heroSub}>{score} of {total} correct</Text>
          <Text style={styles.heroLabel}>{passed ? 'Above 70% benchmark' : 'Below 70% benchmark'}</Text>
          <View style={{ width: '100%', marginTop: 12 }}>
            <ProgressBar progress={pct / 100} color={passed ? '#2aa889' : '#e07a5f'} height={8} />
          </View>
        </View>

        {/* Adaptive progress summary */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Learning Progress</Text>
          <View style={styles.statsRow}>
            <MiniStat label="New" value={stats.newCount} color="#8aa3b3" />
            <MiniStat label="Learning" value={stats.learningCount} color="#d4a017" />
            <MiniStat label="Review" value={stats.reviewCount} color="#5b9bd5" />
            <MiniStat label="Mastered" value={stats.masteredCount} color="#2aa889" />
          </View>
          <Text style={styles.accuracyText}>
            Overall accuracy: {stats.overallAccuracy}% across {stats.totalAttempts} attempts
          </Text>
        </View>

        {/* Action buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.primaryBtnText}>New Session</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Stats')}
          >
            <Text style={styles.secondaryBtnText}>📊 Stats</Text>
          </TouchableOpacity>
        </View>

        {/* Per-question review */}
        <Text style={styles.sectionLabel}>Question Review</Text>
        {results.map((r, i) => {
          const q = questionMap[r.questionId];
          if (!q) return null;
          return (
            <View key={i} style={[styles.reviewItem, r.isCorrect ? styles.reviewCorrect : styles.reviewIncorrect]}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewNum}>Q{i + 1}</Text>
                <Text style={[styles.reviewResult, r.isCorrect ? styles.textCorrect : styles.textIncorrect]}>
                  {r.isCorrect ? '✓ Correct' : `✗ Incorrect`}
                </Text>
                {!r.isCorrect && (
                  <Text style={styles.reviewAnswer}>
                    You: {r.selectedAnswer} · Correct: {q.correct}
                  </Text>
                )}
              </View>
              <Text style={styles.reviewQuestion} numberOfLines={2}>{q.question}</Text>
              {!r.isCorrect && (
                <Text style={styles.reviewExplanation} numberOfLines={3}>
                  {q.correctExplanation}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MiniStat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={styles.miniStat}>
      <Text style={[styles.miniStatValue, { color }]}>{value}</Text>
      <Text style={styles.miniStatLabel}>{label}</Text>
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
  scroll: { padding: 16, paddingBottom: 40 },
  heroCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    alignItems: 'center',
    marginBottom: 14,
  },
  heroPass: { backgroundColor: 'rgba(42,168,137,0.12)', borderColor: '#2aa88966' },
  heroFail: { backgroundColor: 'rgba(224,122,95,0.12)', borderColor: '#e07a5f66' },
  heroEmoji: { fontSize: 40, marginBottom: 8 },
  heroScore: { color: C.text, fontSize: 52, fontWeight: '900' },
  heroSub: { color: C.muted, fontSize: 16, marginTop: 2 },
  heroLabel: { color: C.muted, fontSize: 13, marginTop: 4 },
  card: {
    backgroundColor: C.panel,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: { color: C.text, fontSize: 15, fontWeight: '700', marginBottom: 12 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  miniStat: { alignItems: 'center', flex: 1 },
  miniStatValue: { fontSize: 22, fontWeight: '800' },
  miniStatLabel: { color: C.muted, fontSize: 11, marginTop: 2 },
  accuracyText: { color: C.muted, fontSize: 12, textAlign: 'center', marginTop: 4 },
  actionRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  primaryBtn: {
    flex: 1,
    backgroundColor: C.accent,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  primaryBtnText: { color: '#06241c', fontSize: 15, fontWeight: '800' },
  secondaryBtn: {
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  secondaryBtnText: { color: C.text, fontSize: 15, fontWeight: '600' },
  sectionLabel: {
    color: C.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  reviewItem: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 8,
  },
  reviewCorrect: { backgroundColor: 'rgba(42,168,137,0.08)', borderColor: '#2aa88944' },
  reviewIncorrect: { backgroundColor: 'rgba(224,122,95,0.08)', borderColor: '#e07a5f44' },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  reviewNum: { color: C.muted, fontSize: 12, fontWeight: '700' },
  reviewResult: { fontSize: 12, fontWeight: '700' },
  textCorrect: { color: '#2aa889' },
  textIncorrect: { color: '#e07a5f' },
  reviewAnswer: { color: C.muted, fontSize: 11, marginLeft: 'auto' },
  reviewQuestion: { color: C.text, fontSize: 13, lineHeight: 18 },
  reviewExplanation: { color: C.muted, fontSize: 12, lineHeight: 17, marginTop: 6, fontStyle: 'italic' },
});
