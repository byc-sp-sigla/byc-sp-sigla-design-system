/**
 * The one place the platform's version string lives. `AppShell` (native) and `PortalShell` /
 * `TabbedPortalShell` (web) all render it next to their app/portal label, so every screen across
 * all four client apps carries it automatically — bump it here, not per-screen.
 */
export const APP_VERSION = 'v1.0';
