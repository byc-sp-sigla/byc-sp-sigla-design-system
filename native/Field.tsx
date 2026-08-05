import { forwardRef } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';
import { cn } from './cn';

/**
 * The prototype's `.field` — uppercase label, `.input`, optional `.hint` beneath.
 *
 * Adds two things the prototype has no need for: `error` and `invalid`. A static mock never fails
 * validation, but every real screen does, and the API answers 422 with a message per field
 * (docs/API_CONVENTIONS.md). When `error` is set it replaces the hint rather than stacking under it,
 * so the field does not resize as the user corrects it, and the border turns red. `invalid` turns
 * the border red the same way but renders no text — for screens that already explain *why*
 * elsewhere on the page (e.g. under a section title) and don't want that explanation repeated a
 * second time directly under the field.
 */

interface FieldProps extends Omit<TextInputProps, 'className'> {
  label: string;
  hint?: string;
  error?: string;
  /** Red border with no accompanying message — see the note above. */
  invalid?: boolean;
  className?: string;
}

export const Field = forwardRef<TextInput, FieldProps>(function Field(
  { label, hint, error, invalid, className, ...rest },
  ref,
) {
  return (
    <View className={cn('mb-2.5', className)}>
      <Text className="mb-1.5 font-sigla-bold text-sigla-label uppercase tracking-[1px] text-sigla-muted">
        {label}
      </Text>

      <TextInput
        ref={ref}
        /* Not `undefined` — an unstyled placeholder renders near-black on Android and reads as a
           filled value. */
        placeholderTextColor="#b9af98"
        accessibilityLabel={label}
        className={cn(
          'w-full rounded-sigla border bg-sigla-field px-3 py-2.5 font-sigla text-sigla-body text-sigla-ink',
          error || invalid ? 'border-sigla-red' : 'border-sigla-line-strong',
        )}
        {...rest}
      />

      {(error ?? hint) !== undefined && (
        <Text
          className={cn(
            'mt-1 font-sigla text-sigla-hint',
            error ? 'text-sigla-red' : 'text-sigla-muted',
          )}
        >
          {error ?? hint}
        </Text>
      )}
    </View>
  );
});
