import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStore, QuizFilter } from '../store/useStore';
import { QUESTION_COUNT } from '../data/questions';

export type RootStackParamList = {
  Home: undefined;
  Quiz: { questionCount: number; filter: QuizFilter };
  Result: { sessionId: string };
  Stats: undefined;
};

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

const PRESETS = [10, 20, 30, 50, 100, QUESTION_COUNT];

const FILTERS: { key: QuizFilter; label: string; icon: string }[] = [
  { key: 'adaptive', label: 'Adaptive', icon: '🧠' },
  { key: 'new',      label: 'New Only', icon: '🆕' },
  { key: 'missed',   label: 'Missed',   icon: '❌' },
];

export function HomeScreen({ navigation }: Props) {
  const { loadProgress, getStats, resetProgress } = useStore();
  const [filter, setFilter] = useState<QuizFilter>('adaptive');

  useEffect(() => {
    loadProgress();
  }, []);

  const stats = getStats();

  const handleStart = (count: number) => {
    navigation.navigate('Quiz', { questionCount: count, filter });
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Progress',
      'This will clear all your learning progress. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => resetProgress(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1419" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>PMI-CPMAI</Text>
          <Text style={styles.title}>Adaptive Quiz</Text>
          <Text style={styles.subtitle}>
            {QUESTION_COUNT} questions · Spaced repetition learning
          </Text>
        </View>

        {/* Progress overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Progress</Text>
          <View style={styles.statsRow}>
            <StatChip label="New" value={stats.newCount} color="#8aa3b3" />
            <StatChip label="Learning" value={stats.learningCount} color="#d4a017" />
            <StatChip label="Review" value={stats.reviewCount} color="#5b9bd5" />
            <StatChip label="Mastered" value={stats.masteredCount} color="#2aa889" />
          </View>
          {stats.dueForReview > 0 && (
            <View style={styles.dueBadge}>
              <Text style={styles.dueText}>
                🔥 {stats.dueForReview} cards due for review
              </Text>
            </View>
          )}
          {stats.totalAttempts > 0 && (
            <Text style={styles.accuracyText}>
              Overall accuracy: {stats.overallAccuracy}% · {stats.sessionsCompleted} sessions completed
            </Text>
          )}
        </View>

        {/* How adaptive works */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How It Works</Text>
          <AdaptiveInfo
            icon="🆕"
            label="New"
            desc="Questions you haven't seen yet"
          />
          <AdaptiveInfo
            icon="📚"
            label="Learning"
            desc="Recently missed — shown more frequently"
          />
          <AdaptiveInfo
            icon="🔄"
            label="Review"
            desc="Getting there — shown every few days"
          />
          <AdaptiveInfo
            icon="✅"
            label="Mastered"
            desc="Solid knowledge — spaced out reviews"
          />
        </View>

        {/* Filter selector */}
        <Text style={styles.sectionLabel}>Question Filter</Text>
        <View style={styles.filterRow}>
          {FILTERS.map(f => (
            <TouchableOpacity
              key={f.key}
              style={[styles.filterBtn, filter === f.key && styles.filterBtnActive]}
              onPress={() => setFilter(f.key)}
              activeOpacity={0.7}
            >
              <Text style={styles.filterIcon}>{f.icon}</Text>
              <Text style={[styles.filterLabel, filter === f.key && styles.filterLabelActive]}>
                {f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Session size selector */}
        <Text style={styles.sectionLabel}>Select Question Count</Text>
        <View style={styles.presetGrid}>
          {PRESETS.map((count) => (
            <TouchableOpacity
              key={count}
              style={styles.presetBtn}
              onPress={() => handleStart(count)}
              activeOpacity={0.7}
            >
              <Text style={styles.presetNum}>{count === QUESTION_COUNT ? 'All' : count}</Text>
              <Text style={styles.presetLabel}>
                {count === QUESTION_COUNT ? `${QUESTION_COUNT} questions` : 'questions'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footerRow}>
          <TouchableOpacity
            style={styles.statsBtn}
            onPress={() => navigation.navigate('Stats')}
          >
            <Text style={styles.statsBtnText}>📊 View Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
            <Text style={styles.resetBtnText}>Reset Progress</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function StatChip({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={styles.chip}>
      <Text style={[styles.chipValue, { color }]}>{value}</Text>
      <Text style={styles.chipLabel}>{label}</Text>
    </View>
  );
}

function AdaptiveInfo({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <View style={styles.adaptiveRow}>
      <Text style={styles.adaptiveIcon}>{icon}</Text>
      <View>
        <Text style={styles.adaptiveLabel}>{label}</Text>
        <Text style={styles.adaptiveDesc}>{desc}</Text>
      </View>
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
  header: { marginBottom: 20, marginTop: 12 },
  eyebrow: { color: C.accent, fontSize: 12, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 },
  title: { color: C.text, fontSize: 28, fontWeight: '800', marginBottom: 4 },
  subtitle: { color: C.muted, fontSize: 14 },
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
  chip: { alignItems: 'center', flex: 1 },
  chipValue: { fontSize: 22, fontWeight: '800' },
  chipLabel: { color: C.muted, fontSize: 11, marginTop: 2 },
  dueBadge: {
    backgroundColor: 'rgba(212,160,23,0.15)',
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'rgba(212,160,23,0.4)',
  },
  dueText: { color: '#d4a017', fontSize: 13, fontWeight: '600', textAlign: 'center' },
  accuracyText: { color: C.muted, fontSize: 12, marginTop: 8, textAlign: 'center' },
  adaptiveRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  adaptiveIcon: { fontSize: 18, marginRight: 10, marginTop: 1 },
  adaptiveLabel: { color: C.text, fontSize: 13, fontWeight: '600' },
  adaptiveDesc: { color: C.muted, fontSize: 12, marginTop: 1 },
  sectionLabel: { color: C.muted, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, marginTop: 6 },
  filterRow: { flexDirection: 'row', gap: 8, marginBottom: 18 },
  filterBtn: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 4,
  },
  filterBtnActive: {
    backgroundColor: 'rgba(42,168,137,0.15)',
    borderColor: C.accent,
  },
  filterIcon: { fontSize: 18 },
  filterLabel: { color: C.muted, fontSize: 12, fontWeight: '600' },
  filterLabelActive: { color: C.accent },
  presetGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  presetBtn: {
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    flexGrow: 1,
  },
  presetNum: { color: C.accent, fontSize: 24, fontWeight: '800' },
  presetLabel: { color: C.muted, fontSize: 11, marginTop: 2 },
  footerRow: { flexDirection: 'row', gap: 10 },
  statsBtn: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    padding: 14,
    alignItems: 'center',
  },
  statsBtnText: { color: C.text, fontWeight: '600', fontSize: 14 },
  resetBtn: {
    backgroundColor: 'rgba(122,58,46,0.3)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c45c6a44',
    padding: 14,
    alignItems: 'center',
  },
  resetBtnText: { color: '#e07a5f', fontWeight: '600', fontSize: 14 },
});
