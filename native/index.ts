/**
 * SIGLA primitives for React Native + NativeWind — the Expo apps (citizen, merchant).
 *
 *     import { AppShell, Button, Field, Card, Banner } from 'byc-sp-sigla-design-system/native';
 *
 * The `web` entry point exports the SAME NAMES with the same props for the Vite apps (admin, COA).
 * A component added here needs its counterpart there, or a header saying why it cannot exist.
 *
 * ── SOURCE, NOT BUILD OUTPUT ──
 * These exports point at `.tsx` directly. Metro and Vite both transpile TypeScript from a linked
 * workspace, so a build step here would add a stale-artifact failure mode ("I edited the component
 * and nothing changed") in exchange for nothing. Revisit if this is ever published to a registry.
 *
 * ── WHAT DOES NOT BELONG IN THIS PACKAGE ──
 * No API client, no auth context, no token storage, no screens. See
 * docs/adr/0001-tokens-shared-primitives-split.md.
 */

/**
 * ── STYLING IS StyleSheet, NOT NativeWind ──
 * The primitives take `style`, not `className`. Tailwind's spacing utilities compile to
 * `calc(var(--spacing) * N)` and the react-native-css runtime does not reliably resolve that on
 * Android, which shipped ~650px tall buttons and a blank body under a correct header. Screens
 * compose these tokens instead — `import { color, font, sp, type } from '…/native'`. See `theme.ts`.
 */
export { CONTENT_MAX_WIDTH, color, font, radius, sp, type } from './theme';

export { AppShell } from './AppShell';
export { Button } from './Button';
export { Field } from './Field';
export { LanguageToggle } from './LanguageToggle';
export { Select, type SelectOption } from './Select';
export { TabBar, type TabItem } from './TabBar';
export { Toggle, type ToggleOption } from './Toggle';
export { Badge, Banner, Card, Greeting, Hint, PinDots, Rule, SectionTitle } from './Surface';
export { CheckboxRow, ClickRow, KeyValue, ListItem, MenuRow } from './Rows';
export {
  AvatarPlaceholder,
  CameraBox,
  ProgressBar,
  QrBox,
  Stat,
  StatGrid,
} from './Media';
export { cn } from './cn';
