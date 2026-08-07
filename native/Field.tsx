import { forwardRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { EyeIcon } from './EyeIcon';
import { color, font, radius, sp, type } from './theme';

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
 *
 * Styling is `StyleSheet`, not `className` — see `theme.ts`. `style` reaches the INPUT, as it would
 * on a bare `TextInput`; `containerStyle` is the wrapper, which is what the old `className` meant.
 */

interface FieldProps extends Omit<TextInputProps, 'className'> {
  label: string;
  hint?: string;
  error?: string;
  /** Red border with no accompanying message — see the note above. */
  invalid?: boolean;
  /** Spacing and layout for the label + input + message group. */
  containerStyle?: StyleProp<ViewStyle>;
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
  input: {
    width: '100%',
    borderRadius: radius.control,
    borderWidth: 1,
    borderColor: color.lineStrong,
    backgroundColor: color.field,
    paddingHorizontal: sp(3),
    paddingVertical: sp(2.5),
    fontFamily: font.regular,
    ...type.body,
    color: color.ink,
  },
  inputInvalid: { borderColor: color.red },
  /** Room for the reveal button so a long password never runs under it. */
  inputWithToggle: { paddingRight: sp(11) },
  reveal: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: sp(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  revealPressed: { opacity: 0.55 },
  message: { marginTop: sp(1), fontFamily: font.regular, ...type.hint, color: color.muted },
  messageError: { color: color.red },
});

export const Field = forwardRef<TextInput, FieldProps>(function Field(
  { label, hint, error, invalid, containerStyle, style, ...rest },
  ref,
) {
  const bad = error !== undefined || invalid === true;
  const isPassword = rest.secureTextEntry === true;
  const [revealed, setRevealed] = useState(false);

  return (
    <View style={[styles.wrap, containerStyle]}>
      <Text style={styles.label}>{label}</Text>

      <View>
        <TextInput
          ref={ref}
          /* Not `undefined` — an unstyled placeholder renders near-black on Android and reads as a
             filled value. */
          placeholderTextColor={color.lineStrong}
          accessibilityLabel={label}
          {...rest}
          secureTextEntry={isPassword && !revealed}
          style={[
            styles.input,
            bad && styles.inputInvalid,
            isPassword && styles.inputWithToggle,
            style,
          ]}
        />

        {isPassword && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={revealed ? 'Hide password' : 'Show password'}
            accessibilityState={{ checked: revealed }}
            onPress={() => setRevealed((on) => !on)}
            style={({ pressed }) => [styles.reveal, pressed && styles.revealPressed]}
          >
            <EyeIcon crossed={revealed} />
          </Pressable>
        )}
      </View>

      {(error ?? hint) !== undefined && (
        <Text style={[styles.message, error !== undefined && styles.messageError]}>
          {error ?? hint}
        </Text>
      )}
    </View>
  );
});
