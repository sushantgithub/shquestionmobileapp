import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore } from '../store/useStore';
import { QUESTION_COUNT } from '../data/questions';
import { ProgressBar } from '../components/ProgressBar';
import { RootStackParamList } from './HomeScreen';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Stats'> };

export function StatsScreen({ navigation }: Props) {
  const { getStats, sessions } = useStore();
  const insets = useSafeAreaInsets();
  const stats = getStats();

  const masteryPct = Math.round((stats.masteredCount / QUESTION_COUNT) * 100);
  const seenCount = QUESTION_COUNT - stats.newCount;
  const seenPct = Math.round((seenCount / QUESTION_COUNT) * 100);

  const recentSessions = sessions.slice(0, 10);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1419" />

      {/* Header */}
      <View style={[styles.navBar, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Statistics</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: 40 + insets.bottom }]}>

        {/* Overall mastery */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mastery Overview</Text>
          <View style={styles.masteryRow}>
            <Text style={styles.masteryPct}>{masteryPct}%</Text>
            <Text style={styles.masteryLabel}>Mastered</Text>
          </View>
          <ProgressBar progress={masteryPct / 100} color="#2aa889" height={10} />
          <View style={styles.statsGrid}>
            <GridStat label="New" value={stats.newCount} color="#8aa3b3" />
            <GridStat label="Learning" value={stats.learningCount} color="#d4a017" />
            <GridStat label="Review" value={stats.reviewCount} color="#5b9bd5" />
            <GridStat label="Mastered" value={stats.masteredCount} color="#2aa889" />
          </View>
        </View>

        {/* Seen vs unseen */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coverage</Text>
          <View style={styles.coverageRow}>
            <Text style={styles.coverageNum}>{seenCount}<Text style={styles.coverageOf}> / {QUESTION_COUNT}</Text></Text>
            <Text style={styles.coverageLabel}>questions seen ({seenPct}%)</Text>
          </View>
          <ProgressBar progress={seenPct / 100} color="#5b9bd5" height={8} />
          {stats.dueForReview > 0 && (
            <View style={styles.dueBadge}>
              <Text style={styles.dueText}>🔥 {stats.dueForReview} cards due for review now</Text>
            </View>
          )}
        </View>

        {/* Accuracy */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Accuracy</Text>
          <View style={styles.accuracyBig}>
            <Text style={styles.accuracyPct}>{stats.overallAccuracy}%</Text>
            <Text style={styles.accuracySub}>
              {stats.totalCorrect} correct of {stats.totalAttempts} attempts
            </Text>
          </View>
          <ProgressBar progress={stats.overallAccuracy / 100} color={stats.overallAccuracy >= 70 ? '#2aa889' : '#e07a5f'} height={8} />
          <Text style={styles.sessionsInfo}>
            Sessions completed: {stats.sessionsCompleted}
          </Text>
        </View>

        {/* Recent sessions */}
        {recentSessions.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>Recent Sessions</Text>
            {recentSessions.map((s, i) => {
              const pct = s.questionCount > 0 ? Math.round((s.score / s.results.length) * 100) : 0;
              const date = new Date(s.startedAt).toLocaleDateString(undefined, {
                month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
              });
              return (
                <View key={s.id} style={styles.sessionCard}>
                  <View style={styles.sessionLeft}>
                    <Text style={styles.sessionDate}>{date}</Text>
                    <Text style={styles.sessionDetails}>
                      {s.results.length} questions · {s.score} correct
                    </Text>
                  </View>
                  <View style={[styles.sessionScore, pct >= 70 ? styles.scorePass : styles.scoreFail]}>
                    <Text style={[styles.sessionScoreText, pct >= 70 ? styles.scorePassText : styles.scoreFailText]}>
                      {pct}%
                    </Text>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {stats.sessionsCompleted === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📝</Text>
            <Text style={styles.emptyText}>No sessions yet. Start a quiz to see your stats!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function GridStat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={styles.gridItem}>
      <Text style={[styles.gridValue, { color }]}>{value}</Text>
      <Text style={styles.gridLabel}>{label}</Text>
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
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    backgroundColor: '#0e1a21',
  },
  backBtn: { paddingVertical: 4 },
  backText: { color: C.accent, fontSize: 15, fontWeight: '600' },
  navTitle: { color: C.text, fontSize: 17, fontWeight: '700' },
  scroll: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: C.panel,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: { color: C.text, fontSize: 15, fontWeight: '700', marginBottom: 14 },
  masteryRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 10 },
  masteryPct: { color: C.accent, fontSize: 40, fontWeight: '900' },
  masteryLabel: { color: C.muted, fontSize: 14 },
  statsGrid: { flexDirection: 'row', marginTop: 14 },
  gridItem: { flex: 1, alignItems: 'center' },
  gridValue: { fontSize: 20, fontWeight: '800' },
  gridLabel: { color: C.muted, fontSize: 11, marginTop: 2 },
  coverageRow: { flexDirection: 'row', alignItems: 'baseline', gap: 6, marginBottom: 10 },
  coverageNum: { color: C.text, fontSize: 28, fontWeight: '800' },
  coverageOf: { color: C.muted, fontSize: 16 },
  coverageLabel: { color: C.muted, fontSize: 13 },
  dueBadge: {
    backgroundColor: 'rgba(212,160,23,0.15)',
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(212,160,23,0.4)',
  },
  dueText: { color: '#d4a017', fontSize: 13, fontWeight: '600', textAlign: 'center' },
  accuracyBig: { marginBottom: 10 },
  accuracyPct: { color: C.text, fontSize: 40, fontWeight: '900' },
  accuracySub: { color: C.muted, fontSize: 13, marginTop: 2 },
  sessionsInfo: { color: C.muted, fontSize: 12, marginTop: 8, textAlign: 'right' },
  sectionLabel: {
    color: C.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sessionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.panel,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 12,
    marginBottom: 8,
  },
  sessionLeft: { flex: 1 },
  sessionDate: { color: C.text, fontSize: 13, fontWeight: '600' },
  sessionDetails: { color: C.muted, fontSize: 12, marginTop: 2 },
  sessionScore: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  scorePass: { backgroundColor: 'rgba(42,168,137,0.15)', borderColor: '#2aa88966' },
  scoreFail: { backgroundColor: 'rgba(224,122,95,0.15)', borderColor: '#e07a5f66' },
  sessionScoreText: { fontSize: 16, fontWeight: '800' },
  scorePassText: { color: '#2aa889' },
  scoreFailText: { color: '#e07a5f' },
  emptyState: { alignItems: 'center', paddingVertical: 40 },
  emptyEmoji: { fontSize: 40, marginBottom: 12 },
  emptyText: { color: C.muted, fontSize: 14, textAlign: 'center' },
});
