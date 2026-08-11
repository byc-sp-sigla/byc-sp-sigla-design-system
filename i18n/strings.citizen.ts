import type { Dictionary } from './types';

/**
 * Citizen Portal copy — pilot flow for US 1.11 (landing + login). The rest of the app's screens are
 * a deliberate fast-follow: they keep their hardcoded English JSX untouched, which is safe because
 * `t()` only ever runs where a screen calls it.
 */
export const STRINGS_CITIZEN: Dictionary = {
  'landing.greeting': { en: 'Kumusta! Welcome to SIGLA.', fil: 'Kumusta! Maligayang pagdating sa SIGLA.' },
  'landing.tagline': {
    en: "Echague, Isabela's digital ID and welfare wallet.",
    fil: 'Ang digital ID at welfare wallet ng Echague, Isabela.',
  },
  'landing.registerCta': { en: 'Register for a SIGLA ID', fil: 'Magparehistro para sa SIGLA ID' },
  'landing.loginCta': { en: 'I already have an account', fil: 'May account na ako' },
  'landing.setupCta': {
    en: 'Approved? Set up your login',
    fil: 'Naaprubahan na? I-set up ang iyong login',
  },
  'login.subheading': {
    en: 'Log in with the phone number you registered with.',
    fil: 'Mag-login gamit ang numero ng telepono na ginamit mo sa pagpaparehistro.',
  },
  'login.phoneLabel': { en: 'Phone Number', fil: 'Numero ng Telepono' },
  'login.phoneHint': {
    en: 'The number on your registration — 09XXXXXXXXX or +639XXXXXXXXX.',
    fil: 'Ang numerong nakarehistro — 09XXXXXXXXX o +639XXXXXXXXX.',
  },
  'login.forgotFootnote': {
    en: 'Forgot your password? Visit your barangay office for help.',
    fil: 'Nakalimutan ang password? Bumisita sa inyong barangay office para sa tulong.',
  },

  'unlock.pinLabel': { en: 'Your 4-digit SIGLA PIN', fil: 'Ang iyong 4-digit na SIGLA PIN' },
};
