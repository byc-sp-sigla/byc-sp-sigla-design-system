import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { color, font, radius, sp, type } from './theme';
import { useHover } from './useHover';

/**
 * The prototype's `selectField()` — a labelled dropdown over a fixed list.
 *
 * ── WHY A MODAL LIST AND NOT A NATIVE PICKER ──
 * React Native has no cross-platform `<select>`. The platform pickers look and behave differently on
 * iOS (a wheel), Android (a dialog) and web (a native dropdown), and none of them accepts the
 * prototype's field styling. A modal list is the one shape that renders identically everywhere and
 * lets the closed state reuse `Field`'s exact input box — which is what the prototype draws.
 *
 * ── THE CLOSED STATE IS AN INPUT, NOT A BUTTON ──
 * Same border, background, radius, and type as `Field`, because in the prototype `select.input` IS
 * `.input` with `appearance:none`. A dropdown that is visibly a button next to fields that are boxes
 * is the kind of drift that makes a form look assembled rather than designed.
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`.
 */

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  /** Fixed list. Barangay and Sex are both closed sets — see config/barangays.ts. */
  options: readonly SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  wrap: { marginBottom: sp(2.5) },
  label: {
    marginBottom: sp(1.5),
    fontFamily: font.bold,
    ...type.label,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: color.muted,
  },
  trigger: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: radius.control,
    borderWidth: 1,
    borderColor: color.lineStrong,
    backgroundColor: color.field,
    paddingHorizontal: sp(3),
    paddingVertical: sp(2.5),
  },
  triggerInvalid: { borderColor: color.red },
  triggerDisabled: { opacity: 0.45 },
  /* Placeholder takes the same muted tone as a Field's placeholder, not the ink colour. */
  valuePlaceholder: { fontFamily: font.regular, ...type.body, color: color.lineStrong },
  value: { fontFamily: font.regular, ...type.body, color: color.ink },
  caret: { fontFamily: font.regular, ...type.body, color: color.muted },
  message: { marginTop: sp(1), fontFamily: font.regular, ...type.hint, color: color.muted },
  messageError: { color: color.red },

  scrim: { flex: 1, justifyContent: 'flex-end', backgroundColor: color.scrim },
  sheet: {
    maxHeight: '70%',
    borderTopLeftRadius: radius.card,
    borderTopRightRadius: radius.card,
    borderTopWidth: 2,
    borderTopColor: color.ink,
    backgroundColor: color.card,
  },
  sheetLabel: {
    paddingHorizontal: sp(4),
    paddingTop: sp(4),
    paddingBottom: sp(2),
    fontFamily: font.bold,
    ...type.label,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    color: color.muted,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.line,
    paddingHorizontal: sp(4),
    paddingVertical: sp(3),
  },
  optionTint: { backgroundColor: color.greenPale },
  optionLabel: { fontFamily: font.regular, ...type.body, color: color.ink },
  optionLabelActive: { fontFamily: font.bold, color: color.green },
  optionCheck: { fontFamily: font.bold, ...type.body, color: color.green },
});

function Option({
  option,
  active,
  onSelect,
}: {
  option: SelectOption;
  active: boolean;
  onSelect: () => void;
}) {
  const { hovered, hoverProps } = useHover();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onSelect}
      {...hoverProps}
      style={({ pressed }) => [styles.option, (pressed || hovered) && styles.optionTint]}
    >
      <Text style={[styles.optionLabel, active && styles.optionLabelActive]}>{option.label}</Text>
      {active && <Text style={styles.optionCheck}>✓</Text>}
    </Pressable>
  );
}

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select…',
  hint,
  error,
  disabled = false,
  style,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  const message = error ?? hint;

  return (
    <View style={[styles.wrap, style]}>
      <Text style={styles.label}>{label}</Text>

      <Pressable
        accessibilityRole="button"
        /** Announced as a combobox-alike: the label, plus what is currently chosen. */
        accessibilityLabel={`${label}. ${selected?.label ?? placeholder}`}
        accessibilityState={{ disabled, expanded: open }}
        disabled={disabled}
        onPress={() => setOpen(true)}
        style={[
          styles.trigger,
          error !== undefined && styles.triggerInvalid,
          disabled && styles.triggerDisabled,
        ]}
      >
        <Text style={selected ? styles.value : styles.valuePlaceholder}>
          {selected?.label ?? placeholder}
        </Text>
        <Text style={styles.caret}>▾</Text>
      </Pressable>

      {message !== undefined && (
        <Text style={[styles.message, error !== undefined && styles.messageError]}>{message}</Text>
      )}

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        {/* Tapping the scrim closes without choosing — the expected escape from any picker. */}
        <Pressable style={styles.scrim} onPress={() => setOpen(false)} accessibilityLabel="Close">
          {/* Stops a tap inside the sheet from reaching the scrim behind it. */}
          <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
            <Text style={styles.sheetLabel}>{label}</Text>

            <ScrollView>
              {options.map((option) => (
                <Option
                  key={option.value}
                  option={option}
                  active={option.value === value}
                  onSelect={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                />
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
