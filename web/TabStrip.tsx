import { cn } from './cn';

/**
 * The per-role navigation row beneath `PortalShell`'s topline — NOT a web port of
 * `native/TabBar.tsx`, despite covering the same job (persistent, role-scoped navigation).
 *
 * Two reasons this earns a different name and a narrower shape rather than a 1:1 mirror:
 *
 *   - POSITION: native's `TabBar` is bottom-fixed phone chrome, thumb-reachable on a device held in
 *     one hand (see `native/AppShell.tsx`'s `footer` prop). Pinning the same bar to the bottom of a
 *     1400px browser viewport is exactly the "phone chrome on a desktop portal" drift
 *     `PortalShell`'s own header comment already warns against. This renders inline, directly under
 *     the green topline, as a normal part of the scrolling page.
 *   - SHAPE: native's `locked`/`note` props exist only to represent US 1.02's pending-citizen
 *     tab-dimming state. No admin or COA role has an equivalent — every tab an admin role can see is
 *     one they can use — so those props are simply absent here rather than carried forward unused.
 *
 * `PortalShell`'s `nav` slot is where this is meant to be rendered.
 */

export interface TabStripItem {
  key: string;
  label: string;
}

export function TabStrip({
  items,
  activeKey,
  onSelect,
}: {
  items: readonly TabStripItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  return (
    <nav role="tablist" className="mx-auto flex max-w-6xl gap-1 border-b-2 border-sigla-ink px-5">
      {items.map((item) => {
        const active = item.key === activeKey;

        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(item.key)}
            className={cn(
              'relative px-3 py-2.5 font-sigla-bold text-sigla-badge uppercase tracking-[0.3px]',
              active ? 'text-sigla-ink' : 'text-sigla-line-strong hover:text-sigla-muted',
            )}
          >
            {item.label}
            {/* The active tab's marker sits ON the shared rule, mirroring the prototype's own
                active-tab treatment (native/TabBar.tsx: "a green bar sitting ON the top rule"),
                just flipped to this strip's bottom edge since the strip itself sits at the top. */}
            {active && <span className="absolute inset-x-3 bottom-[-2px] h-0.5 bg-sigla-green" />}
          </button>
        );
      })}
    </nav>
  );
}
