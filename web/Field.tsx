import { forwardRef, useId, useState, type InputHTMLAttributes } from 'react';
import { cn } from './cn';

/** Same geometry as `native/EyeIcon.tsx` — change one, change the other. */
function EyeIcon({ crossed }: { crossed: boolean }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7Z" />
      <circle cx={12} cy={12} r={3} />
      {crossed && <line x1={4} y1={20} x2={20} y2={4} />}
    </svg>
  );
}

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
  { label, hint, error, className, id, type, ...rest },
  ref,
) {
  const generated = useId();
  const inputId = id ?? generated;
  const messageId = `${inputId}-message`;
  const message = error ?? hint;

  const isPassword = type === 'password';
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={cn('mb-2.5', className)}>
      <label
        htmlFor={inputId}
        className="mb-1.5 block font-sigla-bold text-sigla-label uppercase tracking-[1px] text-sigla-muted"
      >
        {label}
      </label>

      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          type={isPassword && revealed ? 'text' : type}
          aria-invalid={error !== undefined}
          aria-describedby={message === undefined ? undefined : messageId}
          className={cn(
            'w-full rounded-sigla border bg-sigla-field px-3 py-2.5 font-sigla text-sigla-body text-sigla-ink',
            'placeholder:text-sigla-line-strong focus:outline-none focus-visible:border-sigla-green',
            error !== undefined ? 'border-sigla-red' : 'border-sigla-line-strong',
            isPassword && 'pr-11',
          )}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((on) => !on)}
            aria-label={revealed ? 'Hide password' : 'Show password'}
            aria-pressed={revealed}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-sigla-muted hover:text-sigla-ink"
          >
            <EyeIcon crossed={revealed} />
          </button>
        )}
      </div>

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
