import { Text, View, type ViewProps } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's flat, non-interactive pieces, in one file because each is a handful of lines and
 * they are always reached for together: `card()`, `badge()`, `bannerMsg()`, `sectionTitle()`,
 * `.hint`, `.hr`, and `pinDots()`.
 *
 * Every one of them is presentational and takes no behaviour, which is what keeps them portable
 * between the citizen and merchant apps unchanged.
 */

// ---------------------------------------------------------------------------

interface CardProps extends ViewProps {
  /** `dark` is the prototype's `background:var(--ink)` card — the digital ID and the QR panel. */
  tone?: 'light' | 'dark';
  className?: string;
}

export function Card({ tone = 'light', className, children, ...rest }: CardProps) {
  return (
    <View
      className={cn(
        'mb-3 rounded-sigla-card border px-4 py-3.5',
        tone === 'dark'
          ? 'border-sigla-shell bg-sigla-shell'
          : 'border-sigla-line-strong bg-sigla-card',
        className,
      )}
      {...rest}
    >
      {children}
    </View>
  );
}

// ---------------------------------------------------------------------------

type BadgeTone = 'green' | 'amber' | 'red' | 'gray';

const BADGE: Record<BadgeTone, string> = {
  green: 'text-sigla-green border-sigla-green',
  amber: 'text-sigla-amber border-sigla-amber',
  red: 'text-sigla-red border-sigla-red',
  gray: 'text-sigla-muted border-sigla-line-strong',
};

/** `.badge` — a hairline outline in the tone's own colour, never a fill. */
export function Badge({ label, tone = 'gray' }: { label: string; tone?: BadgeTone }) {
  return (
    <View className={cn('self-start rounded border px-1.5 py-0.5', BADGE[tone])}>
      <Text
        className={cn(
          'font-sigla-black text-sigla-badge uppercase tracking-[1px]',
          BADGE[tone].split(' ')[0],
        )}
      >
        {label}
      </Text>
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
  className,
}: {
  tone: 'info' | 'warn' | 'error';
  children: React.ReactNode;
  className?: string;
}) {
  const style =
    tone === 'warn'
      ? 'border-sigla-amber'
      : tone === 'error'
        ? 'border-sigla-red'
        : 'border-sigla-green';

  const text =
    tone === 'warn' ? 'text-sigla-amber' : tone === 'error' ? 'text-sigla-red' : 'text-sigla-green';

  return (
    <View
      accessibilityRole="alert"
      className={cn('mb-3 rounded-sigla border bg-sigla-card px-3.5 py-3', style, className)}
    >
      <Text className={cn('font-sigla text-sigla-meta', text)}>{children}</Text>
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
export function Greeting({ children, className }: { children: string; className?: string }) {
  return (
    <Text
      accessibilityRole="header"
      className={cn(
        'mb-3 font-sigla-black text-sigla-greet tracking-[-0.6px] text-sigla-ink',
        className,
      )}
    >
      {children}
    </Text>
  );
}

/** `.section-title` — uppercase, wide-tracked, muted. Separates groups within a screen body. */
export function SectionTitle({ children }: { children: string }) {
  return (
    <Text className="mb-1.5 mt-3.5 font-sigla-bold text-sigla-label uppercase tracking-[1.4px] text-sigla-muted">
      {children}
    </Text>
  );
}

/** `.hint` — standalone muted helper text, outside a field. */
export function Hint({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Text className={cn('font-sigla text-sigla-hint text-sigla-muted', className)}>{children}</Text>;
}

/** `.hr` — a hairline rule with the prototype's 12px of air either side. */
export function Rule({ className }: { className?: string }) {
  return <View className={cn('my-3 h-px w-full bg-sigla-line', className)} />;
}

// ---------------------------------------------------------------------------

/**
 * `pinDots()` — four boxes showing how much of the PIN has been entered.
 *
 * Display only. It renders `filled` boxes and never holds the PIN or receives keystrokes; the value
 * lives in the screen's state and reaches the API from there. A component that both showed and
 * stored the PIN would put it in one more place than necessary.
 */
export function PinDots({ filled, length = 4 }: { filled: number; length?: number }) {
  return (
    <View className="my-1.5 flex-row gap-2">
      {Array.from({ length }, (_, i) => (
        <View
          key={i}
          className="h-[42px] w-9 items-center justify-center rounded-sigla border border-sigla-line-strong bg-sigla-field"
        >
          <Text className="font-sigla-bold text-sigla-body text-sigla-ink">
            {i < filled ? '•' : ''}
          </Text>
        </View>
      ))}
    </View>
  );
}
