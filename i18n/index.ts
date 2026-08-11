/**
 * SIGLA i18n — US 1.11 (Language Toggle). Shared by both Expo apps (citizen, merchant); no web
 * portal offers this toggle (Admin/COA are invite-only staff accounts, out of scope for 1.11).
 *
 *     import { LanguageProvider, useLanguage, STRINGS_SHARED, STRINGS_CITIZEN } from
 *       'byc-sp-sigla-design-system/i18n';
 *
 * See `LanguageContext.tsx` for why this package only holds the lookup plumbing, not persistence.
 */

export { LanguageProvider, useLanguage } from './LanguageContext';
export type { Language, Dictionary } from './types';
export { STRINGS_SHARED } from './strings.shared';
export { STRINGS_CITIZEN } from './strings.citizen';
export { STRINGS_MERCHANT } from './strings.merchant';
