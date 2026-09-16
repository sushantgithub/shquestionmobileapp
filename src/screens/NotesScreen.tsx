import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PHASES, NOTES, NOTE_COUNT } from '../data/notes';
import { RootStackParamList } from './HomeScreen';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Notes'> };

export function NotesScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1419" />

      <View style={[styles.navBar, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Study Notes</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={[styles.scroll, { paddingBottom: 40 + insets.bottom }]}>
        <Text style={styles.intro}>
          {NOTE_COUNT} notes distilled from all 270 questions — the concepts, and the wrong-answer
          patterns that repeat across the exam.
        </Text>

        {PHASES.map(phase => {
          const notes = NOTES.filter(n => n.phase === phase.id);
          if (notes.length === 0) return null;
          const isStrategy = phase.id === 'strategy';
          return (
            <View key={phase.id} style={styles.phaseBlock}>
              <View style={styles.phaseHeader}>
                <Text style={styles.phaseIcon}>{phase.icon}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.phaseName, isStrategy && styles.phaseNameHot]}>
                    {phase.name}
                  </Text>
                  <Text style={styles.phaseSub}>{phase.subtitle}</Text>
                </View>
                <Text style={styles.phaseCount}>{notes.length}</Text>
              </View>

              {notes.map(note => (
                <TouchableOpacity
                  key={note.id}
                  style={[styles.noteRow, isStrategy && styles.noteRowHot]}
                  onPress={() => navigation.navigate('NoteDetail', { noteId: note.id })}
                  activeOpacity={0.7}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.noteTitle}>{note.title}</Text>
                    <Text style={styles.noteMeta}>
                      {note.keyPoints.length} key points · {note.traps.length} traps
                    </Text>
                  </View>
                  <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}
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
  hot: '#d4a017',
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
  navTitle: { color: C.text, fontSize: 16, fontWeight: '700', flex: 1, textAlign: 'center' },
  scroll: { padding: 16 },
  intro: { color: C.muted, fontSize: 13, lineHeight: 19, marginBottom: 20 },
  phaseBlock: { marginBottom: 22 },
  phaseHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  phaseIcon: { fontSize: 20 },
  phaseName: { color: C.text, fontSize: 15, fontWeight: '800' },
  phaseNameHot: { color: C.hot },
  phaseSub: { color: C.muted, fontSize: 11, marginTop: 1 },
  phaseCount: {
    color: C.muted,
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: C.surface,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  noteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.panel,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: 14,
    marginBottom: 8,
  },
  noteRowHot: { borderColor: 'rgba(212,160,23,0.45)', backgroundColor: 'rgba(212,160,23,0.07)' },
  noteTitle: { color: C.text, fontSize: 14, fontWeight: '600' },
  noteMeta: { color: C.muted, fontSize: 11, marginTop: 3 },
  chevron: { color: C.muted, fontSize: 22, marginLeft: 8 },
});
