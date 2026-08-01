import type { ButtonHTMLAttributes } from 'react';
import { cn } from './cn';

/**
 * The prototype's `.btn`. Web counterpart of `native/Button.tsx` — same variants, same props.
 *
 * ── WHERE IT DIFFERS FROM THE NATIVE ONE, AND WHY ──
 * A real `<button>`, not a `Pressable` with `role="button"`. That is the whole argument for splitting
 * the two entry points: this gets keyboard activation, focus order, form submission, and disabled
 * semantics from the platform, none of which a div can be given back by hand without bugs.
 *
 * `type="button"` by default. An unset `type` inside a `<form>` is `submit`, so a secondary button
 * would silently submit the form it sits in — pass `type="submit"` deliberately.
 */

type Variant = 'default' | 'primary' | 'danger';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string;
  variant?: Variant;
  loading?: boolean;
  className?: string;
}

const SURFACE: Record<Variant, string> = {
  default: 'bg-transparent border-sigla-ink text-sigla-ink hover:bg-sigla-line',
  primary: 'bg-sigla-green border-sigla-green text-sigla-card hover:brightness-110',
  danger: 'bg-transparent border-sigla-red text-sigla-red hover:bg-sigla-red/5',
};

export function Button({
  label,
  variant = 'default',
  loading = false,
  disabled = false,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const inert = disabled || loading;

  return (
    <button
      type={type}
      disabled={inert}
      aria-busy={loading}
      className={cn(
        'mt-2 min-h-[44px] w-full rounded-sigla border px-3 py-3 font-sigla-bold text-sigla-body',
        'transition-[filter,background-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sigla-green',
        SURFACE[variant],
        inert && 'cursor-not-allowed opacity-35 hover:brightness-100',
        className,
      )}
      {...rest}
    >
      {/* The label stays in the DOM while loading so the button keeps its width and screen readers
          keep their accessible name; `aria-busy` is what announces the state. */}
      {loading ? `${label}…` : label}
    </button>
  );
}
