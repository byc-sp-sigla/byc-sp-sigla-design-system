import { useMemo, useState } from 'react';

/**
 * Pointer hover state for a `Pressable`.
 *
 * The rows and the Select sheet used Tailwind's `hover:` variant for their highlight. With styling
 * moved to `StyleSheet` (see `theme.ts`) there is no variant to lean on, and `Pressable`'s own style
 * callback reports `pressed` only — which covers the touch case and loses the web one, where a
 * cursor hovers a row long before it presses it.
 *
 * `onHoverIn`/`onHoverOut` are no-ops on iOS and Android, so this costs the phone nothing.
 */
export function useHover() {
  const [hovered, setHovered] = useState(false);

  const hoverProps = useMemo(
    () => ({ onHoverIn: () => setHovered(true), onHoverOut: () => setHovered(false) }),
    [],
  );

  return { hovered, hoverProps };
}
