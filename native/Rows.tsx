import { Pressable, Text, View } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's row vocabulary: `li()`, `clickRow()`, `menuRow()`, `kv()`, and `checkboxRow()`.
 *
 * Five shapes rather than one configurable Row, because they are not variants of each other — they
 * differ in what they DO, and collapsing them would hide that. `ListItem` is inert; `ClickRow` and
 * `MenuRow` navigate; `CheckboxRow` mutates. A single component with an optional `onPress` makes
 * "is this tappable?" a prop you have to read rather than a name you can see.
 *
 * All five share the prototype's hairline bottom border, dropped on the last child.
 */

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
    <View
      className={cn(
        'flex-row items-start justify-between gap-2 py-2.5',
        !last && 'border-b border-sigla-line',
      )}
    >
      <View className="flex-1">
        <Text className="font-sigla-bold text-sigla-body text-sigla-ink">{title}</Text>
        {sub !== undefined && (
          <Text className="mt-0.5 font-sigla text-sigla-hint text-sigla-muted">{sub}</Text>
        )}
      </View>
      {typeof right === 'string' ? (
        <Text className="text-right font-sigla text-sigla-hint text-sigla-muted">{right}</Text>
      ) : (
        right
      )}
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
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className={cn(
        'flex-row items-start justify-between gap-2 py-2.5 hover:bg-sigla-green-pale active:bg-sigla-green-pale',
        !last && 'border-b border-sigla-line',
      )}
    >
      <View className="flex-1">
        <Text className="font-sigla-bold text-sigla-body text-sigla-ink">{title}</Text>
        {sub !== undefined && (
          <Text className="mt-0.5 font-sigla text-sigla-hint text-sigla-muted">{sub}</Text>
        )}
      </View>
      {typeof right === 'string' ? (
        <Text className="text-right font-sigla text-sigla-hint text-sigla-muted">{right}</Text>
      ) : (
        right
      )}
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
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className={cn(
        'flex-row items-center justify-between px-0.5 py-3 hover:bg-sigla-green-pale active:bg-sigla-green-pale',
        !last && 'border-b border-sigla-line',
      )}
    >
      <View className="flex-1">
        <Text className="font-sigla-bold text-sigla-body text-sigla-ink">{title}</Text>
        {sub !== undefined && (
          <Text className="mt-0.5 font-sigla text-sigla-hint text-sigla-muted">{sub}</Text>
        )}
      </View>
      <Text className="font-sigla text-base text-sigla-muted">›</Text>
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
    <View
      className={cn(
        'flex-row items-center justify-between py-1.5',
        !last && 'border-b border-sigla-line',
      )}
    >
      <Text className="font-sigla text-sigla-meta text-sigla-muted">{label}</Text>
      {typeof value === 'string' ? (
        <Text className="font-sigla-bold text-sigla-meta text-sigla-ink">{value}</Text>
      ) : (
        value
      )}
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
      className={cn(
        'flex-row items-center gap-2 py-2',
        !last && 'border-b border-sigla-line',
      )}
    >
      <View
        className={cn(
          'h-4 w-4 items-center justify-center rounded border-[1.5px]',
          checked ? 'border-sigla-green bg-sigla-green' : 'border-sigla-muted',
        )}
      >
        {checked && <Text className="font-sigla-bold text-[10px] text-sigla-card">✓</Text>}
      </View>

      <Text
        className={cn(
          'flex-1 font-sigla text-sigla-body',
          locked ? 'text-sigla-muted' : 'text-sigla-ink',
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}
