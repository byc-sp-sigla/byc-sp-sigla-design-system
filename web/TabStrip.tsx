import { cn } from './cn';

/**
 * The per-role navigation row — pinned to the bottom via `TabbedPortalShell`'s `nav` slot,
 * matching the prototype's own `.tabbar`/`.tab`/`.tab.active` rules exactly (padding
 * `9px 2px 8px`, font-size 9.5px = `text-sigla-badge`, letter-spacing `.03em`, the active
 * indicator at `top:-2px` sitting ON the shared border). See `TabbedPortalShell.tsx` for why
 * bottom-pinned is not phone-only chrome here.
 *
 * NOT a 1:1 port of `native/TabBar.tsx`: no `locked`/`note` props. Those exist there only to
 * represent US 1.02's pending-citizen tab-dimming state, which has no admin/COA equivalent — every
 * tab an admin role can see is one they can use.
 *
 * Renders only the row of buttons — the border and background around it are
 * `TabbedPortalShell`'s job (same split as its header above), so this component has no opinion on
 * where it sits.
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
    <div role="tablist" className="mx-auto flex max-w-6xl px-5">
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
              'relative flex-1 px-0.5 pt-[9px] pb-2 text-center font-sigla-bold text-sigla-badge uppercase tracking-[0.3px]',
              active ? 'text-sigla-ink' : 'text-sigla-line-strong hover:text-sigla-muted',
            )}
          >
            {item.label}
            {/* The prototype's `.tab.active::before`: sits ON the tabbar's own border-top line. */}
            {active && <span className="absolute inset-x-[18%] top-[-2px] h-0.5 bg-sigla-green" />}
          </button>
        );
      })}
    </div>
  );
}
