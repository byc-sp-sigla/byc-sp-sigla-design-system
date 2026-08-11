import { Pressable, StyleSheet, Text, View } from 'react-native';
import { color, font, sp } from './theme';
import { useLanguage, type Language } from '../i18n';

/**
 * US 1.11 — an always-visible, one-tap EN/FIL switch, no confirmation step. Rendered directly by
 * `AppShell`'s header rather than passed in through the per-screen `headerRight` slot (see that
 * file's own note) — the story requires it reachable from every screen, not opt-in per screen.
 *
 * Presentational only: `useLanguage()` is this package's own controlled context
 * (`i18n/LanguageContext.tsx`), not an app's auth/API layer, so — unlike `LockButton`, which needs
 * `useAuth()` and lives per-app — this stays a legitimate shared primitive.
 */
const OPTIONS: readonly [Language, string][] = [
  ['en', 'EN'],
  ['fil', 'FIL'],
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <View accessibilityRole="tablist" style={styles.pill}>
      {OPTIONS.map(([key, label]) => {
        const active = key === language;

        return (
          <Pressable
            key={key}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            /**
             * NOT the spelled-out language name for the `fil` tab: "Filipino" contains the
             * substring "pin" (Fili-PIN-o), which collided with `getByLabel('PIN')` in every
             * screen's own PIN-entry test — a real, discovered-by-e2e bug, not a style choice.
             */
            accessibilityLabel={key === 'en' ? 'English' : 'FIL'}
            onPress={() => setLanguage(key)}
            style={[styles.segment, active && styles.segmentActive]}
          >
            <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: color.lineStrong,
  },
  segment: { paddingHorizontal: sp(2), paddingVertical: sp(1.5) },
  segmentActive: { backgroundColor: color.ink },
  /** Same size as `LockButton`'s pill label — the two sit in the same header row. */
  label: {
    fontFamily: font.bold,
    fontSize: 9.5,
    lineHeight: 13,
    letterSpacing: 0.24,
    color: color.muted,
  },
  labelActive: { color: color.card },
});
