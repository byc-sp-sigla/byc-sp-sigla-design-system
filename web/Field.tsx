import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from './cn';

/**
 * The prototype's `.field` — uppercase label, `.input`, optional `.hint` beneath. Web counterpart of
 * `native/Field.tsx`.
 *
 * ── WHERE IT DIFFERS FROM THE NATIVE ONE ──
 * A real `<label htmlFor>` bound to the input by id, and `aria-describedby` pointing at whichever of
 * hint/error is showing. React Native has no equivalent wiring — `accessibilityLabel` is the whole
 * story there — so this is the version that can be correct, and it should be.
 *
 * As on native, `error` REPLACES the hint rather than stacking beneath it, so the field does not
 * change height as the user corrects it.
 */

interface FieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string;
  hint?: string;
  error?: string;
  className?: string;
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, hint, error, className, id, ...rest },
  ref,
) {
  const generated = useId();
  const inputId = id ?? generated;
  const messageId = `${inputId}-message`;
  const message = error ?? hint;

  return (
    <div className={cn('mb-2.5', className)}>
      <label
        htmlFor={inputId}
        className="mb-1.5 block font-sigla-bold text-sigla-label uppercase tracking-[1px] text-sigla-muted"
      >
        {label}
      </label>

      <input
        ref={ref}
        id={inputId}
        aria-invalid={error !== undefined}
        aria-describedby={message === undefined ? undefined : messageId}
        className={cn(
          'w-full rounded-sigla border bg-sigla-field px-3 py-2.5 font-sigla text-sigla-body text-sigla-ink',
          'placeholder:text-sigla-line-strong focus:outline-none focus-visible:border-sigla-green',
          error !== undefined ? 'border-sigla-red' : 'border-sigla-line-strong',
        )}
        {...rest}
      />

      {message !== undefined && (
        <p
          id={messageId}
          className={cn(
            'mt-1 font-sigla text-sigla-hint',
            error !== undefined ? 'text-sigla-red' : 'text-sigla-muted',
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
});
