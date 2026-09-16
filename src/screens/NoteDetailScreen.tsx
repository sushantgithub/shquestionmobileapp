import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getNote, PHASES, NOTES } from '../data/notes';
import { RootStackParamList } from './HomeScreen';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'NoteDetail'>;
  route: RouteProp<RootStackParamList, 'NoteDetail'>;
};

export function NoteDetailScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const note = getNote(route.params.noteId);

  if (!note) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: C.text }}>Note not found</Text>
      </View>
    );
  }

  const phase = PHASES.find(p => p.id === note.phase);
  const siblings = NOTES.filter(n => n.phase === note.phase);
  const idx = siblings.findIndex(n => n.id === note.id);
  const next = siblings[idx + 1];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1419" />

      <View style={[styles.navBar, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle} numberOfLines={1}>
          {phase?.icon} {phase?.name}
        </Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: 40 + insets.bottom }]}>
        <Text style={styles.title}>{note.title}</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>{note.summary}</Text>
        </View>

        <Text style={styles.sectionLabel}>Key Points</Text>
        <View style={styles.card}>
          {note.keyPoints.map((point, i) => (
            <View key={i} style={[styles.pointRow, i > 0 && styles.pointDivider]}>
              <Text style={styles.bullet}>▸</Text>
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionLabel, styles.trapLabel]}>Exam Traps</Text>
        <Text style={styles.trapIntro}>
          Tempting wrong answers that appear repeatedly — and why they fail.
        </Text>
        {note.traps.map((trap, i) => (
          <View key={i} style={styles.trapCard}>
            <View style={styles.trapHeader}>
              <Text style={styles.trapX}>✕</Text>
              <Text style={styles.trapWrong}>{trap.wrong}</Text>
            </View>
            <Text style={styles.trapWhy}>{trap.why}</Text>
          </View>
        ))}

        {next && (
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.replace('NoteDetail', { noteId: next.id })}
            activeOpacity={0.7}
          >
            <Text style={styles.nextLabel}>Next in {phase?.name}</Text>
            <Text style={styles.nextTitle}>{next.title} →</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
  red: '#e07a5f',
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: '#0e1a21',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  backBtn: { width: 60, paddingVertical: 4 },
  backText: { color: C.muted, fontSize: 14 },
  navTitle: { color: C.muted, fontSize: 13, fontWeight: '600', flex: 1, textAlign: 'center' },
  scroll: { padding: 16 },
  title: { color: C.text, fontSize: 24, fontWeight: '800', marginBottom: 14, lineHeight: 30 },
  summaryCard: {
    backgroundColor: 'rgba(42,168,137,0.12)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(42,168,137,0.4)',
    borderLeftWidth: 4,
    borderLeftColor: C.accent,
    padding: 14,
    marginBottom: 22,
  },
  summaryText: { color: C.text, fontSize: 14, lineHeight: 21, fontWeight: '500' },
  sectionLabel: {
    color: C.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  trapLabel: { color: C.red, marginTop: 24, marginBottom: 4 },
  trapIntro: { color: C.muted, fontSize: 12, marginBottom: 12, lineHeight: 17 },
  card: {
    backgroundColor: C.panel,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    paddingHorizontal: 14,
  },
  pointRow: { flexDirection: 'row', paddingVertical: 12, gap: 10 },
  pointDivider: { borderTopWidth: 1, borderTopColor: C.border },
  bullet: { color: C.accent, fontSize: 13, marginTop: 2 },
  pointText: { color: C.text, fontSize: 13.5, lineHeight: 20, flex: 1 },
  trapCard: {
    backgroundColor: 'rgba(224,122,95,0.09)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(224,122,95,0.35)',
    padding: 14,
    marginBottom: 10,
  },
  trapHeader: { flexDirection: 'row', gap: 8, marginBottom: 7 },
  trapX: { color: C.red, fontSize: 13, fontWeight: '800', marginTop: 1 },
  trapWrong: { color: C.red, fontSize: 13.5, fontWeight: '700', flex: 1, lineHeight: 19 },
  trapWhy: { color: C.text, fontSize: 13, lineHeight: 19.5, opacity: 0.92 },
  nextBtn: {
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginTop: 24,
  },
  nextLabel: { color: C.muted, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  nextTitle: { color: C.accent, fontSize: 15, fontWeight: '700', marginTop: 4 },
});
