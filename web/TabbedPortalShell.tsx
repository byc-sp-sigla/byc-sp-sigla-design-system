import type { ReactNode } from 'react';
import { cn } from './cn';

/**
 * The `PortalShell` variant for a portal with per-role tabs — a separate component rather than a
 * rewrite of `PortalShell` itself, so both stay available: `PortalShell`'s dark-topbar, tab-less
 * layout is still there for whatever wants it (COA's initial screens, or admin-react's own
 * pre-auth screens — Login/ForgotPassword/Setup — which have no role yet to hang tabs off of).
 *
 * Matches the prototype's `.phone-head` + `.tabbar` almost to the dot, which turned out to need
 * more than a `nav` slot bolted onto `PortalShell`'s original dark-topbar layout:
 *
 *   - HEADER: the prototype's actual per-screen header is `.phone-head` — a light, card-coloured
 *     bar with a 2px ink border-bottom, a small uppercase app label stacked above the bold screen
 *     title, and a bordered pill button on the right (`.lock-pill`, "Log out"). `PortalShell`'s
 *     dark `.topbar` styling was copying the wrong element: `.topbar` (dark, with the persona
 *     pills and "Reset this app") is the DEMO TOOL'S OWN chrome for switching between personas —
 *     no persona's real screen ever shows it.
 *   - TAB BAR: pinned to the BOTTOM, matching the prototype's `.tabbar` exactly — which is not
 *     bottom-fixed phone chrome the way it first looks. The prototype's `.phone` is a fixed-height
 *     flex column (`.phone-body{flex:1;overflow-y:auto}` above a `.tabbar{flex-shrink:0}` sibling
 *     after it), the identical shape native `AppShell`'s `footer` slot already uses. That is a
 *     general "app shell" layout, not a phone-only technique, so it is reproduced here verbatim
 *     with `h-screen` standing in for the prototype's fixed 700px box.
 *
 * The back-chevron (`#backBtn`) is the one piece deliberately NOT reproduced: it exists in the
 * prototype because each persona keeps its own in-memory screen stack with no real URLs. This app
 * has real routes, so the browser's own back button already does that job.
 */

interface TabbedPortalShellProps {
  /** The app label, top-left, small and uppercase — the prototype's `#phoneApp` ("SIGLA OFFICER",
   *  "SIGLA PROGRAM COORDINATOR", …), not a fixed portal name. */
  portal: string;
  title: string;
  children: ReactNode;
  /** The prototype's `.lock-pill` ("Log out") — whatever the app puts on the right of the header. */
  headerRight?: ReactNode;
  /** The per-role `TabStrip`. Always rendered pinned to the bottom — omit this component entirely
   *  (use `PortalShell` instead) for a screen with no tabs at all. */
  nav: ReactNode;
  /** Tailwind max-width class for the content column. */
  maxWidth?: string;
}

export function TabbedPortalShell({
  portal,
  title,
  children,
  headerRight,
  nav,
  maxWidth = 'max-w-xl',
}: TabbedPortalShellProps) {
  return (
    /**
     * `100dvh` where supported, `100vh` otherwise.
     *
     * `h-screen` alone is `100vh`, which on a mobile browser is the viewport WITHOUT the URL bar
     * subtracted — so a bottom-pinned tab bar sits behind the browser's own chrome and the last row
     * of a list is unreachable. `dvh` tracks the visible height as that bar shows and hides. Kept as
     * a `supports-` variant rather than a swap so a browser without `dvh` still gets a full-height
     * shell instead of an unsized one.
     */
    <div className="flex h-screen flex-col bg-sigla-card supports-[height:100dvh]:h-dvh">
      <header className="shrink-0 border-b-2 border-sigla-ink">
        {/*
          `flex-wrap`, matching the prototype's own `.topbar{flex-wrap:wrap}` and `PortalShell`'s
          topbar.

          The pills in `headerRight` (Back, Home, Log out, and the dev role switch) are each
          `shrink-0 whitespace-nowrap` — correct on their own, since a control that says "Log ou…" is
          worse than one that wraps. But on a 320px phone their combined width exceeds the row, and
          with nothing able to shrink the last pill was pushed 28px past the viewport, taking the
          whole page with it. Wrapping moves the pills onto a second line at that width and changes
          nothing at any width where they already fit.
        */}
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 pt-0.5 pr-2.5 pb-2.5 pl-[18px]">
          <div className="min-w-0 flex-1">
            <div className="font-sigla-bold text-[10px] uppercase tracking-[0.14em] text-sigla-muted">
              {portal}
            </div>
            <h1 className="truncate font-sigla-bold text-[14.5px] tracking-[-0.01em] text-sigla-ink">
              {title}
            </h1>
          </div>
          {headerRight}
        </div>
      </header>

      <main className={cn('mx-auto w-full flex-1 overflow-y-auto pt-4 pr-[18px] pb-6 pl-[18px]', maxWidth)}>
        {children}
      </main>

      {/* The prototype's `.tabbar` chrome (border + background) lives here, at the shell level,
          same as the header above — `TabStrip` itself renders only the row of tab buttons. */}
      <div className="shrink-0 border-t-2 border-sigla-ink bg-sigla-card">{nav}</div>
    </div>
  );
}
