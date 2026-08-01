import { Pressable, Text, View } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's `.tabbar` — the bottom navigation on every signed-in screen.
 *
 * ── THE LOCKED STATE IS THE INTERESTING PART ──
 * A tab can be present but unreachable, and the prototype is specific about how that looks: 45%
 * opacity, no press response, and the screen above explains why (`noTabsNote`). That is US 1.02 —
 * a citizen whose registration is pending can see that Pitaka, Palitan and Misyon exist and are
 * coming, rather than opening an app that appears to have three fewer features than the one their
 * neighbour showed them.
 *
 * Hiding them instead would be the easy call and the wrong one: it makes a pending account look
 * broken rather than waiting, and it means the app's shape changes under the user at approval.
 */

export interface TabItem {
  key: string;
  label: string;
  /** Present but unreachable — dimmed, unpressable, and announced as disabled. */
  locked?: boolean;
}

export function TabBar({
  items,
  activeKey,
  onSelect,
  /** One line above the bar explaining why something is locked. The prototype's `.no-tabbar-note`. */
  note,
}: {
  items: readonly TabItem[];
  activeKey: string;
  onSelect: (key: string) => void;
  note?: string;
}) {
  return (
    <View>
      {note !== undefined && (
        <View className="border-t border-dashed border-sigla-line-strong bg-sigla-canvas px-4 py-2">
          <Text className="text-center font-sigla-bold text-sigla-badge uppercase tracking-[0.6px] text-sigla-muted">
            {note}
          </Text>
        </View>
      )}

      <View
        accessibilityRole="tablist"
        className="flex-row border-t-2 border-sigla-ink bg-sigla-card"
      >
        {items.map((item) => {
          const active = item.key === activeKey;
          const locked = item.locked === true;

          return (
            <Pressable
              key={item.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: active, disabled: locked }}
              disabled={locked}
              onPress={() => onSelect(item.key)}
              className="flex-1 items-center px-0.5 pb-2 pt-2.5"
            >
              {/* The prototype marks the active tab with a green bar sitting ON the top rule. */}
              {active && (
                <View className="absolute left-[18%] right-[18%] top-[-2px] h-0.5 bg-sigla-green" />
              )}

              <Text
                className={cn(
                  'font-sigla-bold text-sigla-badge uppercase tracking-[0.3px]',
                  active ? 'text-sigla-ink' : 'text-sigla-line-strong',
                  locked && 'opacity-45',
                )}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
