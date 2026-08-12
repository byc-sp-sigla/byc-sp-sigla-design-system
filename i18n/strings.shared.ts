import type { Dictionary } from './types';

/**
 * Copy identical across the Citizen and Merchant Portals — mirrors how `AppShell`/`Field`/`Button`
 * etc. are already one definition for both. App-specific copy (different nouns, different rules
 * text) lives in that app's own `strings.<app>.ts` instead of being forced in here.
 */
export const STRINGS_SHARED: Dictionary = {
  /**
   * Words that recur on almost every screen in both apps. Kept generic ON PURPOSE — a screen whose
   * loading line names what is loading ("Loading your ID…") keeps its own key, because Filipino
   * inflects that sentence differently than a bare "Naglo-load…".
   */
  'common.loading': { en: 'Loading…', fil: 'Naglo-load…' },
  'common.cancel': { en: 'Cancel', fil: 'Kanselahin' },
  'common.back': { en: 'Back', fil: 'Bumalik' },
  'common.close': { en: 'Close', fil: 'Isara' },
  'common.retry': { en: 'Try again', fil: 'Subukan muli' },
  'common.continue': { en: 'Continue', fil: 'Magpatuloy' },
  'common.none': { en: 'None', fil: 'Wala' },
  'common.unexpectedError': {
    en: 'Something went wrong. Please try again.',
    fil: 'May naganap na problema. Pakisubukan muli.',
  },

  // ── Login and PIN unlock refusals, shared by both portals ───────────────
  'auth.rateLimited': {
    en: 'Too many attempts. Please wait about 15 minutes before trying again.',
    fil: 'Masyadong maraming pagsubok. Maghintay ng humigit-kumulang 15 minuto bago subukan muli.',
  },
  'unlock.incorrectPin': { en: 'Incorrect PIN.', fil: 'Mali ang PIN.' },
  'unlock.incorrectPinOne': {
    en: 'Incorrect PIN. 1 attempt remaining.',
    fil: 'Mali ang PIN. 1 pagsubok na lang ang natitira.',
  },
  'unlock.incorrectPinMany': {
    en: 'Incorrect PIN. {remaining} attempts remaining.',
    fil: 'Mali ang PIN. {remaining} pagsubok na lang ang natitira.',
  },
  'unlock.lockedOut': {
    en: 'Too many incorrect PIN attempts. Log in with your password instead.',
    fil: 'Masyadong maraming maling PIN. Mag-login na lang gamit ang iyong password.',
  },
  'unlock.lockedOutUntil': {
    en: 'Too many incorrect PIN attempts. Try again after {when}, or log in with your password now.',
    fil: 'Masyadong maraming maling PIN. Subukan muli pagkatapos ng {when}, o mag-login na gamit ang iyong password ngayon.',
  },
  'unlock.fullRelogin': {
    en: 'For your security, please log in with your password again. This happens every 90 days.',
    fil: 'Para sa iyong seguridad, mag-login muli gamit ang iyong password. Nangyayari ito kada 90 araw.',
  },
  'forgotPin.back': { en: 'Back', fil: 'Bumalik' },
  // ── Camera capture, shared by the citizen live photo and the merchant permit ──
  'capture.retake': { en: 'Retake photo', fil: 'Kunan muli ng larawan' },
  'capture.take': { en: 'Take photo', fil: 'Kumuha ng larawan' },
  'capture.cameraOff': { en: 'Camera access is off', fil: 'Naka-off ang camera access' },
  'capture.failed': {
    en: 'Could not capture a photo. Try again.',
    fil: 'Hindi makakuha ng larawan. Subukan muli.',
  },
  'capture.cameraBusy': {
    en: 'Could not open the camera. Check that no other app is using it, then try again.',
    fil: 'Hindi mabuksan ang camera. Tiyaking walang ibang app na gumagamit nito, tapos subukan muli.',
  },
  'capture.devOnly': { en: 'Dev only', fil: 'Dev only' },
  'nav.logout': { en: 'Logout', fil: 'Mag-log out' },
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

  /** Tap-to-enlarge QR, shared by every screen that shows one (citizen ID, Claim Ticket, merchant
   *  Settlement QR) so the affordance and its wording stay identical everywhere it appears. */
  'qr.expandHint': {
    en: 'Tap the QR code to view it full-screen',
    fil: 'I-tap ang QR code para makita ito nang buong-screen',
  },
  'qr.collapseHint': { en: 'Tap anywhere to close', fil: 'I-tap kahit saan para isara' },
};
