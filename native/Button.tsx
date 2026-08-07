import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { color, font, radius, sp, type } from './theme';

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
 *
 * ⚠️ NO `className` HERE, BY DESIGN. See `theme.ts` — Tailwind spacing reaches Android as inflated
 * rem, and this button was the screen that proved it: `py-3` rendered as ~300px of padding either
 * side of a 13.5px label. Layout is `StyleSheet` now. Callers override with `style`.
 */

type Variant = 'default' | 'primary' | 'danger';

interface ButtonProps extends Omit<PressableProps, 'children' | 'className' | 'style'> {
  label: string;
  variant?: Variant;
  /** Renders a spinner and blocks presses. Use while a request is in flight. */
  loading?: boolean;
  /** Visually disabled and unpressable. `loading` implies this. */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  base: {
    marginTop: sp(2),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.control,
    borderWidth: 1,
    paddingHorizontal: sp(3),
    paddingVertical: sp(3),
    minHeight: 44,
  },
  default: { backgroundColor: 'transparent', borderColor: color.ink },
  primary: { backgroundColor: color.green, borderColor: color.green },
  danger: { backgroundColor: 'transparent', borderColor: color.red },
  inert: { opacity: 0.35 },
  label: { fontFamily: font.bold, ...type.body },
  labelDefault: { color: color.ink },
  labelPrimary: { color: color.card },
  labelDanger: { color: color.red },
});

const SURFACE: Record<Variant, ViewStyle> = {
  default: styles.default,
  primary: styles.primary,
  danger: styles.danger,
};

const LABEL = {
  default: styles.labelDefault,
  primary: styles.labelPrimary,
  danger: styles.labelDanger,
};

export function Button({
  label,
  variant = 'default',
  loading = false,
  disabled = false,
  style,
  ...rest
}: ButtonProps) {
  const inert = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: inert, busy: loading }}
      disabled={inert}
      {...rest}
      style={[styles.base, SURFACE[variant], inert && styles.inert, style]}
    >
      {loading ? (
        <ActivityIndicator
          /* Matches the label colour it replaces, so the button does not change weight mid-press. */
          color={variant === 'primary' ? color.card : color.ink}
        />
      ) : (
        <Text style={[styles.label, LABEL[variant]]}>{label}</Text>
      )}
    </Pressable>
  );
}
