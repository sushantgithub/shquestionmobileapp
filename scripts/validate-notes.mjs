// Validates the study-notes data. Run: npm run validate:notes
import { readFileSync } from 'fs';

const read = p => readFileSync(new URL(p, import.meta.url), 'utf8');
const notesSrc = read('../src/data/notes.ts');
const homeSrc = read('../src/screens/HomeScreen.tsx');
const appSrc = read('../App.tsx');

const fail = [];
const check = (cond, msg) => { if (!cond) fail.push(msg); };

// Parse PHASES ids and NOTES objects out of the source.
const phaseIds = [...notesSrc.matchAll(/\{\s*id:\s*'([a-z-]+)',\s*name:/g)].map(m => m[1]);
const noteIds = [...notesSrc.matchAll(/^\s{4}id:\s*'([a-z0-9-]+)',$/gm)].map(m => m[1]);
const notePhases = [...notesSrc.matchAll(/^\s{4}phase:\s*'([a-z-]+)',$/gm)].map(m => m[1]);
const titles = [...notesSrc.matchAll(/^\s{4}title:\s*'(.+)',$/gm)].map(m => m[1]);

check(phaseIds.length === 7, `expected 7 phases, found ${phaseIds.length}`);
check(noteIds.length >= 20, `expected >=20 notes, found ${noteIds.length}`);
check(noteIds.length === notePhases.length, `id/phase count mismatch: ${noteIds.length} vs ${notePhases.length}`);
check(noteIds.length === titles.length, `id/title count mismatch: ${noteIds.length} vs ${titles.length}`);

// Unique ids
const dupes = noteIds.filter((id, i) => noteIds.indexOf(id) !== i);
check(dupes.length === 0, `duplicate note ids: ${dupes.join(', ')}`);

// Every note phase must be a declared phase
notePhases.forEach((p, i) => check(phaseIds.includes(p), `note "${noteIds[i]}" has unknown phase "${p}"`));

// Every phase must carry at least one note
phaseIds.forEach(p => check(notePhases.includes(p), `phase "${p}" has no notes`));

// Structural fields present for every note
['summary:', 'keyPoints: [', 'traps: ['].forEach(field => {
  const n = notesSrc.split(field).length - 1;
  check(n === noteIds.length, `expected ${noteIds.length} "${field}" blocks, found ${n}`);
});

// Every trap must have both wrong and why
const wrongs = (notesSrc.match(/\{\s*wrong:/g) || []).length;
const whys = (notesSrc.match(/why:\s*'/g) || []).length;
check(wrongs === whys, `trap wrong/why mismatch: ${wrongs} wrong, ${whys} why`);
check(wrongs >= 60, `expected >=60 traps across all notes, found ${wrongs}`);

// No placeholder / unfinished content
[/TODO/i, /FIXME/i, /lorem ipsum/i, /placeholder/i, /\bTBD\b/].forEach(re =>
  check(!re.test(notesSrc), `notes contain placeholder text matching ${re}`)
);

// Exports the app depends on
['export const PHASES', 'export const NOTES', 'export const NOTE_COUNT', 'export function getNote']
  .forEach(e => check(notesSrc.includes(e), `notes.ts missing export: ${e}`));

// Navigation wiring
check(/Notes:\s*undefined/.test(homeSrc), 'RootStackParamList missing "Notes" route');
check(/NoteDetail:\s*\{\s*noteId:\s*string\s*\}/.test(homeSrc), 'RootStackParamList missing "NoteDetail" route');
check(homeSrc.includes("navigation.navigate('Notes')"), 'HomeScreen has no button navigating to Notes');
check(appSrc.includes('name="Notes"'), 'App.tsx does not register the Notes screen');
check(appSrc.includes('name="NoteDetail"'), 'App.tsx does not register the NoteDetail screen');

if (fail.length) {
  console.error(`✗ ${fail.length} validation failure(s):`);
  fail.forEach(f => console.error('  -', f));
  process.exit(1);
}
console.log(`✓ notes valid — ${noteIds.length} notes across ${phaseIds.length} phases, ${wrongs} traps, navigation wired`);
