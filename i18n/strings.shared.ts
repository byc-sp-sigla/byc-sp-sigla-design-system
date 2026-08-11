import type { Dictionary } from './types';

/**
 * Copy identical across the Citizen and Merchant Portals — mirrors how `AppShell`/`Field`/`Button`
 * etc. are already one definition for both. App-specific copy (different nouns, different rules
 * text) lives in that app's own `strings.<app>.ts` instead of being forced in here.
 */
export const STRINGS_SHARED: Dictionary = {
  'nav.register': { en: 'Register', fil: 'Magparehistro' },
  'nav.login': { en: 'Login', fil: 'Mag-login' },
  'welcome.title': { en: 'Welcome', fil: 'Maligayang Pagdating' },
  'login.title': { en: 'Login', fil: 'Mag-login' },
  'login.heading': { en: 'Welcome back.', fil: 'Maligayang pagbabalik.' },
  'login.credentialsSection': { en: 'Your credentials', fil: 'Iyong mga kredensyal' },
  'login.passwordLabel': { en: 'Password', fil: 'Password' },
  'login.submit': { en: 'Log In', fil: 'Mag-login' },
};
