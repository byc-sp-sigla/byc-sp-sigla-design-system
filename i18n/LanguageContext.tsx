import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { Dictionary, Language } from './types';

/**
 * Deliberately a CONTROLLED provider — `language`/`setLanguage` are owned by the caller, not by
 * this component. This package has no auth context and no device storage (docs/adr/0001), so
 * persisting the choice (a local cache for instant paint + syncing it to the signed-in account) is
 * each app's own hook, the same split `useAuth` already draws between shared tokens and per-app
 * session logic. This Provider is only the lookup plumbing both apps share.
 */

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Falls back to English, then to the key itself, so an untranslated screen never renders blank. */
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({
  language,
  setLanguage,
  strings,
  children,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  strings: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => strings[key]?.[language] ?? strings[key]?.en ?? key,
    }),
    [language, setLanguage, strings],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === undefined) throw new Error('useLanguage must be used inside <LanguageProvider>.');
  return ctx;
}
