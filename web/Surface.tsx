import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from './cn';

/**
 * The prototype's flat, non-interactive pieces. Web counterpart of `native/Surface.tsx`, same names
 * and same props: `Card`, `Badge`, `Banner`, `SectionTitle`, `Hint`, `Rule`.
 *
 * `PinDots` is deliberately ABSENT. No admin or COA role has a PIN — US 3.02 is explicit that every
 * admin login takes full credentials, with no quick unlock of any kind — so a PIN component on this
 * side would be a shape waiting for someone to use it where it does not belong.
 */

// ---------------------------------------------------------------------------

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** `dark` is the prototype's `background:var(--ink)` card. */
  tone?: 'light' | 'dark';
  className?: string;
}

export function Card({ tone = 'light', className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'mb-3 rounded-sigla-card border px-4 py-3.5',
        tone === 'dark'
          ? 'border-sigla-shell bg-sigla-shell text-sigla-card'
          : 'border-sigla-line-strong bg-sigla-card',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------

type BadgeTone = 'green' | 'amber' | 'red' | 'gray';

const BADGE: Record<BadgeTone, string> = {
  green: 'text-sigla-green border-sigla-green',
  amber: 'text-sigla-amber border-sigla-amber',
  red: 'text-sigla-red border-sigla-red',
  gray: 'text-sigla-muted border-sigla-line-strong',
};

/** `.badge` — a hairline outline in the tone's own colour, never a fill. `text-center` for labels that wrap. */
export function Badge({ label, tone = 'gray' }: { label: string; tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        'inline-block rounded border px-1.5 py-0.5 text-center font-sigla-black text-sigla-badge uppercase tracking-[1px]',
        BADGE[tone],
      )}
    >
      {label}
    </span>
  );
}

// ---------------------------------------------------------------------------

/**
 * `.banner-msg`.
 *
 * `role="alert"` so a screen reader announces a login failure that appears without navigation —
 * on a page that does not reload, a silently-inserted error is invisible to anyone not looking at
 * that part of the screen.
 */
export function Banner({
  tone,
  children,
  className,
}: {
  tone: 'info' | 'warn' | 'error';
  children: ReactNode;
  className?: string;
}) {
  const style =
    tone === 'warn'
      ? 'border-sigla-amber text-sigla-amber'
      : tone === 'error'
        ? 'border-sigla-red text-sigla-red'
        : 'border-sigla-green text-sigla-green';

  return (
    <div
      role="alert"
      className={cn(
        'mb-3 rounded-sigla border bg-sigla-card px-3.5 py-3 font-sigla text-sigla-meta',
        style,
        className,
      )}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------

/** `.section-title`. */
export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-1.5 mt-3.5 font-sigla-bold text-sigla-label uppercase tracking-[1.4px] text-sigla-muted">
      {children}
    </h2>
  );
}

/** `.hint` — muted helper text outside a field. */
export function Hint({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('font-sigla text-sigla-hint text-sigla-muted', className)}>{children}</p>;
}

/** `.hr` — a hairline rule with the prototype's 12px of air either side. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn('my-3 h-px border-0 bg-sigla-line', className)} />;
}
