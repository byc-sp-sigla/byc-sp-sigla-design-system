/**
 * Shared i18n primitives — US 1.11 (Language Toggle). See docs/adr/0001: this package holds no API
 * client, no auth context, no device storage, so `Language` is a plain value each app's own
 * provider owns and persists (mirrors `useAuth` being per-app, not shared).
 */

export type Language = 'en' | 'fil';

/** One entry per translatable string. `en` is the required fallback — see `LanguageContext.tsx`. */
export type Dictionary = Record<string, { en: string; fil: string }>;
