import type { ReactNode } from 'react';
import { cn } from './cn';

/**
 * The desktop counterpart of `native/AppShell`.
 *
 * ── WHY IT IS NAMED DIFFERENTLY FROM ITS NATIVE SIBLING ──
 * Every other primitive keeps the same name on both sides because it means the same thing. This one
 * does not: `AppShell` reproduces the prototype's phone chrome — a 2px rule, a screen title, a back
 * chevron — for a device held in one hand. An Officer works a review queue on a desktop browser, and
 * copying phone chrome onto a 1400px page would be the drift this whole exercise exists to prevent.
 *
 * So it shares the tokens and the type scale, and lays them out for a screen with room: a dark
 * `--bg` topbar carrying the portal name and the signed-in identity, over a centred content column.
 * That topbar IS in the prototype — it is the `.topbar` at the top of every page.
 *
 * `maxWidth` defaults to a readable column rather than full-bleed. A login form stretched across a
 * wide monitor is the other classic way an admin portal stops looking like the product.
 */

interface PortalShellProps {
  /** The portal's name, e.g. "SIGLA ADMIN" or "SIGLA COA". Rendered in the dark topbar. */
  portal: string;
  title: string;
  children: ReactNode;
  /** Signed-in identity, role badge, sign-out — whatever the app puts on the right of the topbar. */
  headerRight?: ReactNode;
  /**
   * The per-role `TabStrip`, if this screen has one. Rendered between the topline and `<main>` —
   * one fixed slot rather than each caller wrapping `<PortalShell>` in its own nav markup, so the
   * spacing and border stay defined in one place (same reasoning as native `AppShell`'s `footer`
   * slot).
   */
  nav?: ReactNode;
  /** Tailwind max-width class for the content column. */
  maxWidth?: string;
}

export function PortalShell({
  portal,
  title,
  children,
  headerRight,
  nav,
  maxWidth = 'max-w-xl',
}: PortalShellProps) {
  return (
    <div className="min-h-screen bg-sigla-canvas">
      <header className="bg-sigla-shell">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3.5">
          <span className="font-sigla-black text-[18px] tracking-[-0.2px] text-sigla-card">
            {portal}
          </span>
          <div className="ml-auto flex items-center gap-3">{headerRight}</div>
        </div>
      </header>

      {/* The prototype's `.topline` — a 2px green rule directly under the topbar. */}
      <div className="h-0.5 bg-sigla-green" />

      {nav}

      <main className={cn('mx-auto px-5 py-8', maxWidth)}>
        <h1 className="mb-4 font-sigla-black text-sigla-greet tracking-[-0.6px] text-sigla-ink">
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
}
