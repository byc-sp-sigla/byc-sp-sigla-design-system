import { Pressable, Text, View } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's `.toggle` — the two-up segmented control on the landing screen.
 *
 * In the prototype the inactive half only raises an alert (`Login is only available once a
 * registration has been submitted…`), because that mock forces you through Register first. Here both
 * halves are real navigation: a returning citizen opening the app taps Login, which is what US 1.01
 * step 1 describes — "shown a choice between Login and Register".
 */

export interface ToggleOption {
  key: string;
  label: string;
}

export function Toggle({
  options,
  activeKey,
  onSelect,
  className,
}: {
  options: readonly [ToggleOption, ToggleOption];
  activeKey: string;
  onSelect: (key: string) => void;
  className?: string;
}) {
  return (
    <View
      accessibilityRole="tablist"
      /* `overflow-hidden` is what clips the active half's fill to the rounded outer border. */
      className={cn(
        'mb-3.5 flex-row overflow-hidden rounded-sigla border border-sigla-ink',
        className,
      )}
    >
      {options.map((option) => {
        const active = option.key === activeKey;

        return (
          <Pressable
            key={option.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => onSelect(option.key)}
            className={cn('flex-1 items-center py-2.5', active && 'bg-sigla-ink')}
          >
            <Text
              className={cn(
                'font-sigla-bold text-sigla-body',
                active ? 'text-sigla-card' : 'text-sigla-ink',
              )}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
