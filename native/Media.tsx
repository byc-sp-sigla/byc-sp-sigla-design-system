import { Pressable, StyleSheet, Text, View } from 'react-native';
import QRCodeSvg from 'react-native-qrcode-svg';
import { color, font, radius, sp, type } from './theme';

/**
 * The prototype's placeholder surfaces: `.camera-box`, `.qr-box` / `.qr-card`, `.avatar-ph`, and
 * `.pbar`.
 *
 * These are the pieces that stand in for something the device or the server supplies. Each is a real
 * component rather than an inline `View` in a screen, because each has an exact size and border
 * treatment in the prototype and those are easy to approximate slightly differently on each screen.
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`.
 */

const styles = StyleSheet.create({
  cameraBox: {
    marginVertical: sp(2.5),
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.control,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: color.lineStrong,
    backgroundColor: color.field,
    paddingHorizontal: sp(3),
  },
  cameraBoxCaptured: { borderColor: color.green },
  cameraLabel: { textAlign: 'center', fontFamily: font.regular, ...type.meta, color: color.muted },
  cameraLabelCaptured: { color: color.green },

  qrBox: { alignItems: 'center', justifyContent: 'center', borderRadius: radius.small },
  qrPlaceholderLabel: { fontFamily: font.regular, fontSize: 9, lineHeight: 12 },

  avatar: { backgroundColor: color.lineStrong },

  track: {
    marginTop: sp(1.5),
    height: 5,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: color.line,
  },
  fill: { height: '100%', backgroundColor: color.green },

  stat: { flex: 1 },
  statLabel: {
    fontFamily: font.regular,
    ...type.badge,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: color.muted,
  },
  statValue: {
    marginTop: sp(0.5),
    fontFamily: font.black,
    ...type.greet,
    letterSpacing: -0.4,
    color: color.ink,
  },
  statGrid: { marginBottom: sp(3.5), flexDirection: 'row', gap: sp(3.5) },
});

// ---------------------------------------------------------------------------

/**
 * `.camera-box` — the live-capture target on the registration form (US 1.01).
 *
 * ⚠️ The copy says "live camera capture" for a reason the design cannot enforce on its own: US 1.01
 * requires a LIVE capture and explicitly forbids a file upload, because an uploaded photo can be a
 * photo of a photo. This component is the placeholder; whatever replaces it must open the camera,
 * never a picker.
 */
export function CameraBox({
  label = 'Live camera capture required\n(no photo upload)',
  onPress,
  captured = false,
}: {
  label?: string;
  onPress?: () => void;
  captured?: boolean;
}) {
  const Wrapper = onPress === undefined ? View : Pressable;

  return (
    <Wrapper
      {...(onPress === undefined ? {} : { onPress, accessibilityRole: 'button' as const })}
      style={[styles.cameraBox, captured && styles.cameraBoxCaptured]}
    >
      <Text style={[styles.cameraLabel, captured && styles.cameraLabelCaptured]}>
        {captured ? 'Photo captured ✓' : label}
      </Text>
    </Wrapper>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.qr-box` — renders a citizen or merchant's signed QR payload.
 *
 * `react-native-qrcode-svg` (+ its `react-native-svg` peer) were added specifically for this — an
 * off-`CLAUDE.md`-§1-menu dependency whose justification is recorded in this change's PR
 * description rather than a separate kickoff-brief doc, since no such file exists in this repo yet.
 *
 * Still NOT a generator of its OWN data: `value` must be a signed payload the caller already holds
 * (e.g. from `POST /citizen/id/qr`) — this component never invents one. Omitting `value` renders
 * the original placeholder square, for a caller with no signed payload yet (a loading state, or a
 * screen that hasn't reached this feature).
 */
export function QrBox({
  value,
  size = 56,
  dark = false,
}: {
  /** The signed payload to encode. Leave undefined for the placeholder square. */
  value?: string;
  size?: number;
  dark?: boolean;
}) {
  /** `dark` means the box sits ON a dark card, so the box itself is light — never the inverse. */
  const boxColor = dark ? color.card : color.shell;
  const moduleColor = dark ? color.shell : color.card;

  if (value !== undefined) {
    return (
      <View
        accessibilityLabel="QR code"
        style={[styles.qrBox, { width: size, height: size, backgroundColor: boxColor }]}
      >
        {/* ~10% quiet zone on each side — real scanners rely on that margin, unlike the demo square. */}
        <QRCodeSvg value={value} size={size * 0.8} color={moduleColor} backgroundColor={boxColor} />
      </View>
    );
  }

  return (
    <View
      accessibilityLabel="QR code"
      style={[styles.qrBox, { width: size, height: size, backgroundColor: boxColor }]}
    >
      <Text style={[styles.qrPlaceholderLabel, { color: moduleColor }]}>QR</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------

/** `.avatar-ph` / `.avatar-ph-lg` — the grey circle standing in for a citizen's photo. */
export function AvatarPlaceholder({ size = 52 }: { size?: number }) {
  return <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />;
}

// ---------------------------------------------------------------------------

/**
 * `.pbar` — the thin progress bar under a stat. Used for the weekly EC cap (US 5.06).
 *
 * Clamped to 0–100 here rather than at each call site: a cap that has been exceeded is a real state
 * (the server decides what is earnable, not this bar), and a bar rendering at 140% width would break
 * the layout rather than communicate it.
 */
export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max, now: value }}
      style={styles.track}
    >
      <View style={[styles.fill, { width: `${pct}%` }]} />
    </View>
  );
}

// ---------------------------------------------------------------------------

/** `.stat` — a wide-tracked uppercase key over a large tabular value. Pairs with `ProgressBar`. */
export function Stat({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  /** A `ProgressBar`, usually. */
  children?: React.ReactNode;
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
      {children}
    </View>
  );
}

/** `.stat-grid` — the prototype's two-column stat row. */
export function StatGrid({ children }: { children: React.ReactNode }) {
  return <View style={styles.statGrid}>{children}</View>;
}
