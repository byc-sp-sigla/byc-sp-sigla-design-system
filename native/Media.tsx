import { Pressable, Text, View } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's placeholder surfaces: `.camera-box`, `.qr-box` / `.qr-card`, `.avatar-ph`, and
 * `.pbar`.
 *
 * These are the pieces that stand in for something the device or the server supplies. Each is a real
 * component rather than an inline `View` in a screen, because each has an exact size and border
 * treatment in the prototype and those are easy to approximate slightly differently on each screen.
 */

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
      className={cn(
        'my-2.5 h-[100px] items-center justify-center rounded-sigla border border-dashed bg-sigla-field px-3',
        captured ? 'border-sigla-green' : 'border-sigla-line-strong',
      )}
    >
      <Text
        className={cn(
          'text-center font-sigla text-sigla-meta',
          captured ? 'text-sigla-green' : 'text-sigla-muted',
        )}
      >
        {captured ? 'Photo captured ✓' : label}
      </Text>
    </Wrapper>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.qr-box` — a placeholder square where a QR will render.
 *
 * Deliberately NOT a QR generator. The real code is a signed payload from
 * `POST /citizen/id/qr` that re-signs every two minutes, and a component that could generate its own
 * would invite a screen to render a locally-built code that no server signed — which would scan and
 * then fail verification at the counter.
 */
export function QrBox({ size = 56, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <View
      accessibilityLabel="QR code"
      className={cn('items-center justify-center rounded', dark ? 'bg-sigla-card' : 'bg-sigla-shell')}
      style={{ width: size, height: size }}
    >
      <Text
        className={cn('font-sigla text-[9px]', dark ? 'text-sigla-shell' : 'text-sigla-card')}
      >
        QR
      </Text>
    </View>
  );
}

// ---------------------------------------------------------------------------

/** `.avatar-ph` / `.avatar-ph-lg` — the grey circle standing in for a citizen's photo. */
export function AvatarPlaceholder({ size = 52 }: { size?: number }) {
  return (
    <View
      className="bg-sigla-line-strong"
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
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
      className="mt-1.5 h-[5px] w-full overflow-hidden rounded-[3px] bg-sigla-line"
    >
      <View className="h-full bg-sigla-green" style={{ width: `${pct}%` }} />
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
    <View className="flex-1">
      <Text className="font-sigla text-sigla-badge uppercase tracking-[1px] text-sigla-muted">
        {label}
      </Text>
      <Text className="mt-0.5 font-sigla-black text-sigla-greet tracking-[-0.4px] text-sigla-ink">
        {value}
      </Text>
      {children}
    </View>
  );
}

/** `.stat-grid` — the prototype's two-column stat row. */
export function StatGrid({ children }: { children: React.ReactNode }) {
  return <View className="mb-3.5 flex-row gap-3.5">{children}</View>;
}
