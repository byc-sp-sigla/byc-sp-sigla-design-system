import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { color, font, radius, sp, type } from './theme';

/**
 * The prototype's flat, non-interactive pieces, in one file because each is a handful of lines and
 * they are always reached for together: `card()`, `badge()`, `bannerMsg()`, `sectionTitle()`,
 * `.hint`, `.hr`, and `pinDots()`.
 *
 * Every one of them is presentational and takes no behaviour, which is what keeps them portable
 * between the citizen and merchant apps unchanged.
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts` for why. Callers override with `style`.
 */

const styles = StyleSheet.create({
  card: {
    marginBottom: sp(3),
    borderRadius: radius.card,
    borderWidth: 1,
    paddingHorizontal: sp(4),
    paddingVertical: sp(3.5),
  },
  cardLight: { borderColor: color.lineStrong, backgroundColor: color.card },
  cardDark: { borderColor: color.shell, backgroundColor: color.shell },

  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.small,
    borderWidth: 1,
    paddingHorizontal: sp(1.5),
    paddingVertical: sp(0.5),
  },
  badgeLabel: {
    fontFamily: font.black,
    ...type.badge,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  banner: {
    marginBottom: sp(3),
    borderRadius: radius.control,
    borderWidth: 1,
    backgroundColor: color.card,
    paddingHorizontal: sp(3.5),
    paddingVertical: sp(3),
  },
  bannerText: { fontFamily: font.regular, ...type.meta },

  greeting: {
    marginBottom: sp(3),
    fontFamily: font.black,
    ...type.greet,
    letterSpacing: -0.6,
    color: color.ink,
  },

  sectionTitle: {
    marginTop: sp(3.5),
    marginBottom: sp(1.5),
    fontFamily: font.bold,
    ...type.label,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    color: color.muted,
  },

  hint: { fontFamily: font.regular, ...type.hint, color: color.muted },

  rule: { marginVertical: sp(3), height: 1, width: '100%', backgroundColor: color.line },

  pinRow: { marginVertical: sp(1.5), flexDirection: 'row', gap: sp(2) },
  pinBox: {
    height: 42,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.control,
    borderWidth: 1,
    borderColor: color.lineStrong,
    backgroundColor: color.field,
  },
  pinBoxFocused: { borderWidth: 2, borderColor: color.green },
  pinDot: { fontFamily: font.bold, ...type.body, color: color.ink },
});

// ---------------------------------------------------------------------------

interface CardProps extends ViewProps {
  /** `dark` is the prototype's `background:var(--ink)` card — the digital ID and the QR panel. */
  tone?: 'light' | 'dark';
}

export function Card({ tone = 'light', style, children, ...rest }: CardProps) {
  return (
    <View
      {...rest}
      style={[styles.card, tone === 'dark' ? styles.cardDark : styles.cardLight, style]}
    >
      {children}
    </View>
  );
}

// ---------------------------------------------------------------------------

type BadgeTone = 'green' | 'amber' | 'red' | 'gray';

const BADGE: Record<BadgeTone, string> = {
  green: color.green,
  amber: color.amber,
  red: color.red,
  gray: color.muted,
};

/** `.badge` — a hairline outline in the tone's own colour, never a fill. */
export function Badge({ label, tone = 'gray' }: { label: string; tone?: BadgeTone }) {
  /* Gray is the one tone whose border is not its text colour: muted text on a line-strong outline. */
  const border = tone === 'gray' ? color.lineStrong : BADGE[tone];

  return (
    <View style={[styles.badge, { borderColor: border }]}>
      <Text style={[styles.badgeLabel, { color: BADGE[tone] }]}>{label}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.banner-msg` — the full-width message block above a form.
 *
 * `warn` is amber and `info` is green, matching the prototype. Note that the prototype uses `info`
 * (green) for "your application is under review", not amber: a pending state is normal progress, not
 * a problem, and colouring it as a warning tells a resident something is wrong when nothing is.
 */
export function Banner({
  tone,
  children,
  style,
}: {
  tone: 'info' | 'warn' | 'error';
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const accent = tone === 'warn' ? color.amber : tone === 'error' ? color.red : color.green;

  return (
    <View accessibilityRole="alert" style={[styles.banner, { borderColor: accent }, style]}>
      <Text style={[styles.bannerText, { color: accent }]}>{children}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.greet` — the large heading a screen opens with ("Kumusta! Welcome to SIGLA.", "Magandang umaga,
 * Maria.").
 *
 * A primitive rather than an inline `<Text>` because it carries three values that must not drift:
 * 800 weight, the `sigla-greet` size, and `-0.03em` tracking. Three screens had already hand-written
 * that trio before this existed, which is exactly how the third one ends up slightly different.
 */
export function Greeting({
  children,
  style,
}: {
  children: string;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text accessibilityRole="header" style={[styles.greeting, style]}>
      {children}
    </Text>
  );
}

/** `.section-title` — uppercase, wide-tracked, muted. Separates groups within a screen body. */
export function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

/** `.hint` — standalone muted helper text, outside a field. */
export function Hint({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.hint, style]}>{children}</Text>;
}

/** `.hr` — a hairline rule with the prototype's 12px of air either side. */
export function Rule({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.rule, style]} />;
}

// ---------------------------------------------------------------------------

/**
 * `pinDots()` — four boxes showing how much of the PIN has been entered.
 *
 * Display only. It renders `filled` boxes and never holds the PIN or receives keystrokes; the value
 * lives in the screen's state and reaches the API from there. A component that both showed and
 * stored the PIN would put it in one more place than necessary.
 */
export function PinDots({
  filled,
  length = 4,
  focused = false,
}: {
  filled: number;
  length?: number;
  /** Highlights the next box to fill, so it reads as a cursor rather than four identical boxes. */
  focused?: boolean;
}) {
  return (
    <View style={styles.pinRow}>
      {Array.from({ length }, (_, i) => (
        <View key={i} style={[styles.pinBox, focused && i === filled && styles.pinBoxFocused]}>
          <Text style={styles.pinDot}>{i < filled ? '•' : ''}</Text>
        </View>
      ))}
    </View>
  );
}
