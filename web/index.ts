/**
 * SIGLA primitives for React + Tailwind v4 — the Vite apps (admin, COA).
 *
 *     import { PortalShell, Button, Field, Card, Banner } from 'byc-sp-sigla-design-system/web';
 *
 * Mirrors `byc-sp-sigla-design-system/native`: same names, same props, so a screen reads the same on
 * either side. Two places where the two sets deliberately diverge, each explained in its own file:
 *
 *   • `PortalShell` here vs `AppShell` there — phone chrome is wrong on a desktop portal, and the
 *     different name is the point rather than an oversight.
 *   • No `PinDots` and no `Toggle` here — no admin or COA role has a PIN (US 3.02), and neither
 *     portal offers a register/login choice, because both are invite-only.
 *
 * No API client, no auth context, no screens. See docs/adr/0001-tokens-shared-primitives-split.md.
 */

export { PortalShell } from './PortalShell';
export { Button } from './Button';
export { Field } from './Field';
export { Select, type SelectOption } from './Select';
export { Badge, Banner, Card, Hint, Rule, SectionTitle } from './Surface';
export { TabStrip, type TabStripItem } from './TabStrip';
export { cn } from './cn';
