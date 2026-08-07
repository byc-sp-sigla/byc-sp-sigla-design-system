/**
 * SIGLA design tokens as plain JavaScript values, for React Native `StyleSheet`.
 *
 * ── WHY THIS EXISTS ALONGSIDE tokens.css ──
 * `tokens.css` is still the source of truth for the two Vite portals (admin, COA) and for the
 * web-only rules in each Expo app's `global.css`. It cannot be the source of truth on a DEVICE:
 * Tailwind v4 compiles every spacing utility to `calc(var(--spacing) * N)`, and the
 * react-native-css runtime under `nativewind@5.0.0-preview` does not reliably resolve that on
 * Android. Paddings, gaps and line-heights arrived inflated — ~650px tall buttons and half a screen
 * between paragraph lines — while the px-declared type tokens rendered correctly. Font sizes right
 * and spacing wrong is the fingerprint of that bug.
 *
 * So the native primitives no longer go through CSS at all. They read these numbers.
 *
 * ── THE VALUES ARE NOT NEW ──
 * Every colour, radius, family and size below is the same value `tokens.css` declares, which is
 * itself the `:root` block of the prototype. Nothing here is a redesign. If the two ever disagree,
 * `tokens.css` is the one to change and this file follows — the four portals render one design.
 *
 * `sp(n)` is Tailwind's spacing scale at 4px per unit, so `sp(3)` is the 12px that `py-3` meant.
 * Keeping the same arithmetic makes a class-to-StyleSheet translation checkable by eye.
 */

export const color = {
  canvas: '#e7e1d4',
  card: '#faf6ee',
  field: '#fffdf8',
  shell: '#141b16',
  ink: '#1a2e1f',
  muted: '#6b7265',
  line: '#eae3d2',
  lineStrong: '#b9af98',
  green: '#2e6b3e',
  greenPale: '#cfe3d3',
  amber: '#b46115',
  red: '#c03a2b',
  /** The modal scrim — `bg-sigla-shell/50`. */
  scrim: 'rgba(20, 27, 22, 0.5)',
} as const;

/** The prototype's only radii: 7px on controls, 9px on cards. `small` is Tailwind's `rounded`. */
export const radius = {
  small: 4,
  control: 7,
  card: 9,
} as const;

/**
 * The exact keys each app passes to `useFonts`. React Native resolves a font BY THIS NAME, so a
 * rename on either side falls back to the system face silently.
 *
 * Three named families rather than `fontWeight`, because React Native does not synthesise a weight:
 * asking for 800 on a family registered at 400 renders 400 on Android.
 */
export const font = {
  regular: 'HankenGrotesk_400Regular',
  bold: 'HankenGrotesk_700Bold',
  black: 'HankenGrotesk_800ExtraBold',
} as const;

/**
 * Size and line-height always travel together. React Native reads a unitless `lineHeight` as
 * PIXELS, so a bare ratio collapses text into a thin flat band; pairing them here means the two
 * cannot drift apart.
 */
export const type = {
  /** badges, tab labels */
  badge: { fontSize: 9.5, lineHeight: 13 },
  /** uppercase field labels, section titles */
  label: { fontSize: 10.5, lineHeight: 14 },
  /** helper text under a field */
  hint: { fontSize: 11, lineHeight: 16.5 },
  /** banner copy, secondary rows */
  meta: { fontSize: 12.5, lineHeight: 18 },
  /** inputs, buttons, list titles */
  body: { fontSize: 13.5, lineHeight: 20 },
  /** screen headings inside the body */
  title: { fontSize: 15, lineHeight: 20 },
  /** the "Kumusta!" greeting */
  greet: { fontSize: 20, lineHeight: 23 },
} as const;

/** Tailwind's spacing scale at 4px per unit: `sp(3)` is what `p-3` meant. */
export const sp = (n: number): number => n * 4;

/**
 * ⚠️ THE WEB PORTALS' CENTRED PHONE COLUMN LIVES HERE. All three values are load-bearing:
 * dropping `maxWidth` full-bleeds the merchant and citizen web builds, dropping `alignSelf`
 * left-aligns them. `max-w-120` was 120 × 0.25rem = 480px — this is a literal translation, not a
 * new choice. Verify at a desktop browser width after touching it.
 */
export const CONTENT_MAX_WIDTH = 480;
