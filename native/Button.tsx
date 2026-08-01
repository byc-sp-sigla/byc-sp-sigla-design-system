import { ActivityIndicator, Pressable, Text, type PressableProps } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's `.btn` (see its `btn()` helper).
 *
 *   base      transparent, 1px ink border, ink text
 *   primary   green fill, card-coloured text
 *   danger    transparent, red border and text
 *   disabled  35% opacity, no pointer events
 *
 * `minHeight: 44` is from the prototype and is also the platform minimum tap target — do not
 * shrink it to fit a layout.
 */

type Variant = 'default' | 'primary' | 'danger';

interface ButtonProps extends Omit<PressableProps, 'children' | 'className'> {
  label: string;
  variant?: Variant;
  /** Renders a spinner and blocks presses. Use while a request is in flight. */
  loading?: boolean;
  /** Visually disabled and unpressable. `loading` implies this. */
  disabled?: boolean;
  className?: string;
}

const SURFACE: Record<Variant, string> = {
  default: 'bg-transparent border-sigla-ink',
  primary: 'bg-sigla-green border-sigla-green',
  danger: 'bg-transparent border-sigla-red',
};

const LABEL: Record<Variant, string> = {
  default: 'text-sigla-ink',
  primary: 'text-sigla-card',
  danger: 'text-sigla-red',
};

export function Button({
  label,
  variant = 'default',
  loading = false,
  disabled = false,
  className,
  ...rest
}: ButtonProps) {
  const inert = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: inert, busy: loading }}
      disabled={inert}
      className={cn(
        'mt-2 w-full items-center justify-center rounded-sigla border px-3 py-3',
        SURFACE[variant],
        inert && 'opacity-35',
        className,
      )}
      {...rest}
      style={{ minHeight: 44 }}
    >
      {loading ? (
        <ActivityIndicator
          /* Matches the label colour it replaces, so the button does not change weight mid-press. */
          color={variant === 'primary' ? '#faf6ee' : '#1a2e1f'}
        />
      ) : (
        <Text className={cn('font-sigla-bold text-sigla-body', LABEL[variant])}>{label}</Text>
      )}
    </Pressable>
  );
}
