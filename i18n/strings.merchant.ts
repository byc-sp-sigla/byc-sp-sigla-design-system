import type { Dictionary } from './types';

/**
 * Merchant Portal copy — pilot flow for US 1.11 (landing + login). Same fast-follow note as
 * `strings.citizen.ts`: the rest of the app's screens keep their hardcoded English for now.
 */
export const STRINGS_MERCHANT: Dictionary = {
  'landing.intro': {
    en: 'Create your Merchant account first. Accepting Ayuda EC redemptions and selling on the Marketplace are each their own separate application, applied for later from your account.',
    fil: 'Gawin muna ang iyong Merchant account. Ang pagtanggap ng Ayuda EC redemptions at ang pagbebenta sa Marketplace ay hiwalay na aplikasyon bawat isa, na maaari mong i-apply mamaya mula sa iyong account.',
  },
  'landing.registerCta': { en: 'Register as a Merchant', fil: 'Magparehistro bilang Merchant' },
  'login.subheading': {
    en: 'Log in with your registered contact number.',
    fil: 'Mag-login gamit ang iyong nakarehistrong numero ng contact.',
  },
  'login.contactLabel': { en: 'Contact Number', fil: 'Numero ng Contact' },
  'login.contactHint': {
    en: 'The number on your accreditation — 09XXXXXXXXX or +639XXXXXXXXX.',
    fil: 'Ang numerong nakarehistro sa akreditasyon — 09XXXXXXXXX o +639XXXXXXXXX.',
  },
  'login.switchLink': {
    en: 'New here? Register as a Merchant',
    fil: 'Bago dito? Magparehistro bilang Merchant',
  },
  'login.forgotFootnote': {
    en: 'Forgot your password? Contact the LGU settlement office.',
    fil: 'Nakalimutan ang password? Makipag-ugnayan sa LGU settlement office.',
  },

  'unlock.pinLabel': { en: 'Your 4-digit merchant PIN', fil: 'Ang iyong 4-digit na merchant PIN' },
};
