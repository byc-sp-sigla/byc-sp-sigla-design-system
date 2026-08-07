import { Pressable, StyleSheet, Text, View } from 'react-native';
import { color, font, sp, type } from './theme';

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
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`. This bar sits below the scrolling body
 * on every signed-in screen, so an inflated padding here eats the content area.
 */

export interface TabItem {
  key: string;
  label: string;
  /** Present but unreachable — dimmed, unpressable, and announced as disabled. */
  locked?: boolean;
}

const styles = StyleSheet.create({
  noteWrap: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: color.lineStrong,
    backgroundColor: color.canvas,
    paddingHorizontal: sp(4),
    paddingVertical: sp(2),
  },
  note: {
    textAlign: 'center',
    fontFamily: font.bold,
    ...type.badge,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    color: color.muted,
  },
  bar: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: color.ink,
    backgroundColor: color.card,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: sp(0.5),
    paddingTop: sp(2.5),
    paddingBottom: sp(2),
  },
  /* The prototype marks the active tab with a green bar sitting ON the top rule. */
  marker: {
    position: 'absolute',
    left: '18%',
    right: '18%',
    top: -2,
    height: 2,
    backgroundColor: color.green,
  },
  label: {
    fontFamily: font.bold,
    ...type.badge,
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    color: color.lineStrong,
  },
  labelActive: { color: color.ink },
  labelLocked: { opacity: 0.45 },
});

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
        <View style={styles.noteWrap}>
          <Text style={styles.note}>{note}</Text>
        </View>
      )}

      <View accessibilityRole="tablist" style={styles.bar}>
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
              style={styles.tab}
            >
              {active && <View style={styles.marker} />}

              <Text
                style={[styles.label, active && styles.labelActive, locked && styles.labelLocked]}
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
