import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Alert,
  Share, Modal, TextInput,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStore, QuizFilter } from '../store/useStore';
import { QUESTION_COUNT } from '../data/questions';

export type RootStackParamList = {
  Home: undefined;
  Quiz: { questionCount: number; filter: QuizFilter; durationMinutes?: number };
  Result: { sessionId: string };
  Stats: undefined;
};

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

const PRESETS = [10, 20, 30, 50, 100, QUESTION_COUNT];
const TIME_PRESETS = [15, 30, 60, 120] as const;
type SessionMode = 'questions' | 'time';

const FILTERS: { key: QuizFilter; label: string; icon: string }[] = [
  { key: 'adaptive', label: 'Adaptive', icon: '🧠' },
  { key: 'new',      label: 'New Only', icon: '🆕' },
  { key: 'missed',   label: 'Missed',   icon: '❌' },
];

export function HomeScreen({ navigation }: Props) {
  const { loadProgress, getStats, resetProgress, createProgressBackup, restoreProgressBackup } = useStore();
  const [filter, setFilter] = useState<QuizFilter>('adaptive');
  const [sessionMode, setSessionMode] = useState<SessionMode>('questions');
  const [restoreOpen, setRestoreOpen] = useState(false);
  const [restoreText, setRestoreText] = useState('');
  const [restoring, setRestoring] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    loadProgress();
  }, []);

  const stats = getStats();

  const handleStart = (count: number) => {
    navigation.navigate('Quiz', { questionCount: count, filter });
  };

  const handleTimedStart = (minutes: number) => {
    navigation.navigate('Quiz', {
      questionCount: QUESTION_COUNT,
      filter,
      durationMinutes: minutes,
    });
  };

  const handleBackup = async () => {
    try {
      const backup = createProgressBackup();
      await Share.share({
        title: 'SH Question Quiz Progress Backup',
        message: backup,
      });
    } catch (error) {
      Alert.alert('Backup Failed', 'Could not create or share the progress backup.');
    }
  };

  const handleRestore = async () => {
    const value = restoreText.trim();
    if (!value) {
      Alert.alert('Paste Backup', 'Paste your SH Question Quiz backup text first.');
      return;
    }

    try {
      setRestoring(true);
      const result = await restoreProgressBackup(value);
      setRestoreOpen(false);
      setRestoreText('');
      Alert.alert(
        'Progress Restored',
        `Restored ${result.restoredQuestions} question records, ${result.missedCount} missed questions, and ${result.sessions} sessions.`
      );
    } catch (error) {
      Alert.alert('Restore Failed', 'This backup is invalid or from an unsupported version.');
    } finally {
      setRestoring(false);
    }
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
      <ScrollView contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16, paddingBottom: 40 + insets.bottom }]}>
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
            desc="Early-stage questions — shown more frequently"
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
          <AdaptiveInfo
            icon="❌"
            label="Missed"
            desc="Incorrect answers saved separately until you clear them in Missed review"
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
                {f.key === 'missed' ? `${f.label} (${stats.missedCount})` : f.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Session mode selector */}
        <Text style={styles.sectionLabel}>Practice By</Text>
        <View style={styles.modeRow}>
          <TouchableOpacity
            style={[styles.modeBtn, sessionMode === 'questions' && styles.modeBtnActive]}
            onPress={() => setSessionMode('questions')}
            activeOpacity={0.7}
          >
            <Text style={styles.modeIcon}>🔢</Text>
            <Text style={[styles.modeLabel, sessionMode === 'questions' && styles.modeLabelActive]}>
              Questions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeBtn, sessionMode === 'time' && styles.modeBtnActive]}
            onPress={() => setSessionMode('time')}
            activeOpacity={0.7}
          >
            <Text style={styles.modeIcon}>⏱️</Text>
            <Text style={[styles.modeLabel, sessionMode === 'time' && styles.modeLabelActive]}>
              Time
            </Text>
          </TouchableOpacity>
        </View>

        {sessionMode === 'questions' ? (
          <>
            {/* Existing question-count feature — unchanged */}
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
          </>
        ) : (
          <>
            <Text style={styles.sectionLabel}>Select Time</Text>
            <Text style={styles.timeHelp}>
              Answer as many questions as you can. The session ends automatically when the selected time expires.
            </Text>
            <View style={styles.timeGrid}>
              {TIME_PRESETS.map((minutes) => (
                <TouchableOpacity
                  key={minutes}
                  style={styles.timeBtn}
                  onPress={() => handleTimedStart(minutes)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.timeNum}>{minutes}</Text>
                  <Text style={styles.timeLabel}>minutes</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        <View style={styles.backupCard}>
          <Text style={styles.cardTitle}>Progress Backup</Text>
          <Text style={styles.backupDesc}>
            Progress is saved automatically on this phone. Before changing phones, share a backup and restore it on the new device.
          </Text>
          <View style={styles.backupRow}>
            <TouchableOpacity style={styles.backupBtn} onPress={handleBackup}>
              <Text style={styles.backupBtnText}>⬆ Backup Progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.restoreBtn} onPress={() => setRestoreOpen(true)}>
              <Text style={styles.restoreBtnText}>⬇ Restore Progress</Text>
            </TouchableOpacity>
          </View>
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

      <Modal visible={restoreOpen} transparent animationType="fade" onRequestClose={() => setRestoreOpen(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Restore Progress</Text>
            <Text style={styles.modalDesc}>
              Paste the backup text you shared from your previous phone. Restoring replaces the current progress on this device.
            </Text>
            <TextInput
              style={styles.restoreInput}
              value={restoreText}
              onChangeText={setRestoreText}
              placeholder="Paste SHQ_BACKUP_V1:... here"
              placeholderTextColor={C.muted}
              multiline
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.modalCancel} onPress={() => { setRestoreOpen(false); setRestoreText(''); }}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalRestore} onPress={handleRestore} disabled={restoring}>
                <Text style={styles.modalRestoreText}>{restoring ? 'Restoring…' : 'Restore'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modeRow: { flexDirection: 'row', gap: 10, marginBottom: 18 },
  modeBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: C.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 12,
  },
  modeBtnActive: {
    backgroundColor: 'rgba(42,168,137,0.15)',
    borderColor: C.accent,
  },
  modeIcon: { fontSize: 17 },
  modeLabel: { color: C.muted, fontSize: 13, fontWeight: '700' },
  modeLabelActive: { color: C.accent },
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
  timeHelp: { color: C.muted, fontSize: 12, lineHeight: 18, marginTop: -2, marginBottom: 10 },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  timeBtn: {
    width: '47%',
    flexGrow: 1,
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 18,
    alignItems: 'center',
  },
  timeNum: { color: C.accent, fontSize: 26, fontWeight: '800' },
  timeLabel: { color: C.muted, fontSize: 11, marginTop: 2 },
  backupCard: {
    backgroundColor: C.panel,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 14,
  },
  backupDesc: { color: C.muted, fontSize: 12, lineHeight: 18, marginBottom: 12 },
  backupRow: { flexDirection: 'row', gap: 10 },
  backupBtn: {
    flex: 1,
    backgroundColor: 'rgba(42,168,137,0.15)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.accent,
    padding: 12,
    alignItems: 'center',
  },
  backupBtnText: { color: C.accent, fontWeight: '700', fontSize: 13 },
  restoreBtn: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    padding: 12,
    alignItems: 'center',
  },
  restoreBtnText: { color: C.text, fontWeight: '700', fontSize: 13 },
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: C.panel,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.border,
    padding: 18,
  },
  modalTitle: { color: C.text, fontSize: 18, fontWeight: '800', marginBottom: 6 },
  modalDesc: { color: C.muted, fontSize: 12, lineHeight: 18, marginBottom: 12 },
  restoreInput: {
    minHeight: 150,
    maxHeight: 260,
    backgroundColor: C.bg,
    color: C.text,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 11,
  },
  modalActions: { flexDirection: 'row', gap: 10, marginTop: 14 },
  modalCancel: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
  },
  modalCancelText: { color: C.muted, fontWeight: '700' },
  modalRestore: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: C.accent,
  },
  modalRestoreText: { color: '#06241c', fontWeight: '800' },
});
