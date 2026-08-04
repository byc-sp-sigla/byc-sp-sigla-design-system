import { forwardRef, useId, type SelectHTMLAttributes } from 'react';
import { cn } from './cn';

/**
 * A labelled dropdown over a fixed set — the web counterpart of `native/Select.tsx`.
 *
 * Added to close a real parity gap: native has had a `Select` since the citizen app's registration
 * work, and the admin portal had none, so every dropdown-shaped need (an admin's role, an Officer's
 * barangay, a status filter) was reaching for a raw `<select>` with hand-copied classes. Three
 * hand-styled dropdowns is how the portal starts looking like three different products.
 *
 * ── ONLY FOR CLOSED SETS ──
 * Same rule as the native one. Barangay, role, status and classification are fixed vocabularies the
 * server validates against a `z.enum`, so a free-text input here would only ever produce a 422. If
 * the options are open-ended or long enough to need searching, this is the wrong control.
 *
 * ── THE PLACEHOLDER IS A DISABLED OPTION, NOT A VALUE ──
 * An unset select renders `value=""`, and `""` is never a legal member of a closed set — so the
 * caller's `value` staying empty is what tells them nothing is chosen yet. Making the placeholder
 * selectable would let it submit, and the server would reject it with a message about a field the
 * user believes they filled in.
 *
 * Mirrors `Field`: uppercase label bound by `htmlFor`, `aria-describedby` on whichever of
 * hint/error is showing, and `error` REPLACES the hint rather than stacking, so the control does
 * not change height as the user corrects it.
 */

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'onChange' | 'value'> {
  label: string;
  options: readonly SelectOption[];
  value?: string;
  /**
   * Receives the VALUE, not the event — the callers are all `setState(value)` and unwrapping
   * `e.target.value` at every one of them is noise that eventually gets it wrong.
   */
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, value, onChange, placeholder = 'Select…', hint, error, className, id, ...rest },
  ref,
) {
  const generated = useId();
  const selectId = id ?? generated;
  const messageId = `${selectId}-message`;
  const message = error ?? hint;

  return (
    <div className={cn('mb-2.5', className)}>
      <label
        htmlFor={selectId}
        className="mb-1.5 block font-sigla-bold text-sigla-label uppercase tracking-[1px] text-sigla-muted"
      >
        {label}
      </label>

      <select
        ref={ref}
        id={selectId}
        /** Controlled, and `?? ''` so an undefined value lands on the placeholder rather than
         *  silently selecting the first real option — which would submit a choice nobody made. */
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error !== undefined}
        aria-describedby={message === undefined ? undefined : messageId}
        className={cn(
          'w-full rounded-sigla border bg-sigla-field px-3 py-2.5 font-sigla text-sigla-body text-sigla-ink',
          'focus:outline-none focus-visible:border-sigla-green',
          error !== undefined ? 'border-sigla-red' : 'border-sigla-line-strong',
          value === undefined || value === '' ? 'text-sigla-muted' : '',
        )}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-sigla-ink">
            {option.label}
          </option>
        ))}
      </select>

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
