import { Pressable, StyleSheet, Text, View } from 'react-native';
import { color, font, radius, sp, type } from './theme';
import { useHover } from './useHover';

/**
 * The prototype's row vocabulary: `li()`, `clickRow()`, `menuRow()`, `kv()`, and `checkboxRow()`.
 *
 * Five shapes rather than one configurable Row, because they are not variants of each other — they
 * differ in what they DO, and collapsing them would hide that. `ListItem` is inert; `ClickRow` and
 * `MenuRow` navigate; `CheckboxRow` mutates. A single component with an optional `onPress` makes
 * "is this tappable?" a prop you have to read rather than a name you can see.
 *
 * All five share the prototype's hairline bottom border, dropped on the last child.
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`.
 */

const styles = StyleSheet.create({
  divider: { borderBottomWidth: 1, borderBottomColor: color.line },

  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: sp(2),
    paddingVertical: sp(2.5),
  },
  grow: { flex: 1 },
  title: { fontFamily: font.bold, ...type.body, color: color.ink },
  sub: { marginTop: sp(0.5), fontFamily: font.regular, ...type.hint, color: color.muted },
  rightText: {
    textAlign: 'right',
    fontFamily: font.regular,
    ...type.hint,
    color: color.muted,
  },
  tint: { backgroundColor: color.greenPale },

  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sp(0.5),
    paddingVertical: sp(3),
  },
  chevron: { fontFamily: font.regular, fontSize: 16, lineHeight: 24, color: color.muted },

  kvRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sp(1.5),
  },
  kvLabel: { fontFamily: font.regular, ...type.meta, color: color.muted },
  kvValue: { fontFamily: font.bold, ...type.meta, color: color.ink },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp(2),
    paddingVertical: sp(2),
  },
  box: {
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.small,
    borderWidth: 1.5,
    borderColor: color.muted,
  },
  boxChecked: { borderColor: color.green, backgroundColor: color.green },
  check: { fontFamily: font.bold, fontSize: 10, lineHeight: 13, color: color.card },
  checkLabel: { flex: 1, fontFamily: font.regular, ...type.body, color: color.ink },
  checkLabelLocked: { color: color.muted },
});

// ---------------------------------------------------------------------------

/** `.list-item` — inert. A title, an optional sub-line, and a right-hand value. */
export function ListItem({
  title,
  sub,
  right,
  last = false,
}: {
  title: string;
  sub?: string;
  /** A string, or a `<Badge>` — the prototype uses both. */
  right?: React.ReactNode;
  last?: boolean;
}) {
  return (
    <View style={[styles.listRow, !last && styles.divider]}>
      <View style={styles.grow}>
        <Text style={styles.title}>{title}</Text>
        {sub !== undefined && <Text style={styles.sub}>{sub}</Text>}
      </View>
      {typeof right === 'string' ? <Text style={styles.rightText}>{right}</Text> : right}
    </View>
  );
}

// ---------------------------------------------------------------------------

/** `.clickrow` — a `ListItem` that navigates. Same shape, plus a press state. */
export function ClickRow({
  title,
  sub,
  right,
  onPress,
  last = false,
}: {
  title: string;
  sub?: string;
  right?: React.ReactNode;
  onPress: () => void;
  last?: boolean;
}) {
  const { hovered, hoverProps } = useHover();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      {...hoverProps}
      style={({ pressed }) => [
        styles.listRow,
        !last && styles.divider,
        (pressed || hovered) && styles.tint,
      ]}
    >
      <View style={styles.grow}>
        <Text style={styles.title}>{title}</Text>
        {sub !== undefined && <Text style={styles.sub}>{sub}</Text>}
      </View>
      {typeof right === 'string' ? <Text style={styles.rightText}>{right}</Text> : right}
    </Pressable>
  );
}

// ---------------------------------------------------------------------------

/** `.menu-row` — a settings row. Like `ClickRow` but ends in a chevron instead of a value. */
export function MenuRow({
  title,
  sub,
  onPress,
  last = false,
}: {
  title: string;
  sub?: string;
  onPress: () => void;
  last?: boolean;
}) {
  const { hovered, hoverProps } = useHover();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      {...hoverProps}
      style={({ pressed }) => [
        styles.menuRow,
        !last && styles.divider,
        (pressed || hovered) && styles.tint,
      ]}
    >
      <View style={styles.grow}>
        <Text style={styles.title}>{title}</Text>
        {sub !== undefined && <Text style={styles.sub}>{sub}</Text>}
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

// ---------------------------------------------------------------------------

/** `.kv` — a key on the left, a bold value on the right. For detail panels. */
export function KeyValue({
  label,
  value,
  last = false,
}: {
  label: string;
  value: React.ReactNode;
  last?: boolean;
}) {
  return (
    <View style={[styles.kvRow, !last && styles.divider]}>
      <Text style={styles.kvLabel}>{label}</Text>
      {typeof value === 'string' ? <Text style={styles.kvValue}>{value}</Text> : value}
    </View>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.checkbox-row` — a tappable row with a checkbox.
 *
 * `locked` is the prototype's own state and it is not the same as unchecked-and-disabled: the
 * merchant application uses it for Water, which every accredited store must carry (US 4.06). A
 * locked row shows as checked, muted, and unpressable — "this is included and not yours to change",
 * which is different from "you have not chosen this yet".
 */
export function CheckboxRow({
  label,
  checked,
  onToggle,
  locked = false,
  last = false,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  locked?: boolean;
  last?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled: locked }}
      disabled={locked}
      onPress={onToggle}
      style={[styles.checkRow, !last && styles.divider]}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Text style={styles.check}>✓</Text>}
      </View>

      <Text style={[styles.checkLabel, locked && styles.checkLabelLocked]}>{label}</Text>
    </Pressable>
  );
}
