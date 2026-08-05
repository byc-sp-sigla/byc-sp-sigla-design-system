import { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';
import { cn } from './cn';

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
  className?: string;
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
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  const message = error ?? hint;

  return (
    <View className={cn('mb-2.5', className)}>
      <Text className="mb-1.5 font-sigla-bold text-sigla-label uppercase tracking-[1px] text-sigla-muted">
        {label}
      </Text>

      <Pressable
        accessibilityRole="button"
        /** Announced as a combobox-alike: the label, plus what is currently chosen. */
        accessibilityLabel={`${label}. ${selected?.label ?? placeholder}`}
        accessibilityState={{ disabled, expanded: open }}
        disabled={disabled}
        onPress={() => setOpen(true)}
        className={cn(
          'w-full flex-row items-center justify-between rounded-sigla border bg-sigla-field px-3 py-2.5',
          error !== undefined ? 'border-sigla-red' : 'border-sigla-line-strong',
          disabled && 'opacity-45',
        )}
      >
        <Text
          className={cn(
            'font-sigla text-sigla-body',
            /* Placeholder takes the same muted tone as a Field's placeholder, not the ink colour. */
            selected ? 'text-sigla-ink' : 'text-sigla-line-strong',
          )}
        >
          {selected?.label ?? placeholder}
        </Text>
        <Text className="font-sigla text-sigla-body text-sigla-muted">▾</Text>
      </Pressable>

      {message !== undefined && (
        <Text
          className={cn(
            'mt-1 font-sigla text-sigla-hint',
            error !== undefined ? 'text-sigla-red' : 'text-sigla-muted',
          )}
        >
          {message}
        </Text>
      )}

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        {/* Tapping the scrim closes without choosing — the expected escape from any picker. */}
        <Pressable
          className="flex-1 justify-end bg-sigla-shell/50"
          onPress={() => setOpen(false)}
          accessibilityLabel="Close"
        >
          {/* Stops a tap inside the sheet from reaching the scrim behind it. */}
          <Pressable
            className="max-h-[70%] rounded-t-sigla-card border-t-2 border-sigla-ink bg-sigla-card"
            onPress={(e) => e.stopPropagation()}
          >
            <Text className="px-4 pb-2 pt-4 font-sigla-bold text-sigla-label uppercase tracking-[1.4px] text-sigla-muted">
              {label}
            </Text>

            <ScrollView>
              {options.map((option) => {
                const active = option.value === value;
                return (
                  <Pressable
                    key={option.value}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    onPress={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className="flex-row items-center justify-between border-b border-sigla-line px-4 py-3 hover:bg-sigla-green-pale active:bg-sigla-green-pale"
                  >
                    <Text
                      className={cn(
                        'text-sigla-body',
                        active ? 'font-sigla-bold text-sigla-green' : 'font-sigla text-sigla-ink',
                      )}
                    >
                      {option.label}
                    </Text>
                    {active && <Text className="font-sigla-bold text-sigla-green">✓</Text>}
                  </Pressable>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
