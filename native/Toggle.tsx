import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { color, font, radius, sp, type } from './theme';

/**
 * The prototype's `.toggle` — the two-up segmented control on the landing screen.
 *
 * In the prototype the inactive half only raises an alert (`Login is only available once a
 * registration has been submitted…`), because that mock forces you through Register first. Here both
 * halves are real navigation: a returning citizen opening the app taps Login, which is what US 1.01
 * step 1 describes — "shown a choice between Login and Register".
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`.
 */

export interface ToggleOption {
  key: string;
  label: string;
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: sp(3.5),
    flexDirection: 'row',
    /* This is what clips the active half's fill to the rounded outer border. */
    overflow: 'hidden',
    borderRadius: radius.control,
    borderWidth: 1,
    borderColor: color.ink,
  },
  half: { flex: 1, alignItems: 'center', paddingVertical: sp(2.5) },
  halfActive: { backgroundColor: color.ink },
  label: { fontFamily: font.bold, ...type.body, color: color.ink },
  labelActive: { color: color.card },
});

export function Toggle({
  options,
  activeKey,
  onSelect,
  style,
}: {
  options: readonly [ToggleOption, ToggleOption];
  activeKey: string;
  onSelect: (key: string) => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View accessibilityRole="tablist" style={[styles.wrap, style]}>
      {options.map((option) => {
        const active = option.key === activeKey;

        return (
          <Pressable
            key={option.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => onSelect(option.key)}
            style={[styles.half, active && styles.halfActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
