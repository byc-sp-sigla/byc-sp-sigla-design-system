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

  /**
   * The PIN-unlock screen (US 1.05, 2.04). Shared because both portals ask the same question with
   * the same words — only the line naming whose PIN it is differs, and that lives per app.
   */
  'unlock.title': { en: 'Enter PIN', fil: 'Ilagay ang PIN' },
  'unlock.prompt': { en: 'Enter PIN to continue', fil: 'Ilagay ang PIN upang magpatuloy' },
  'unlock.submit': { en: 'Unlock', fil: 'I-unlock' },
  'unlock.forgotPin': {
    en: 'Forgot PIN? Log in with your password instead.',
    fil: 'Nakalimutan ang PIN? Mag-login gamit ang iyong password.',
  },
  'unlock.switchAccount': { en: 'Use a different account', fil: 'Gumamit ng ibang account' },
};
