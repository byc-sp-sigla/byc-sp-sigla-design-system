import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONTENT_MAX_WIDTH, color, font, radius, sp, type } from './theme';
import { LanguageToggle } from './LanguageToggle';
import { APP_VERSION } from '../version';

/**
 * The prototype's phone chrome, minus the phone.
 *
 * ── WHAT IS AND IS NOT PORTED ──
 * The prototype draws a 340×700 rounded rectangle with a fake status bar and a camera shutter,
 * because it renders a phone inside a desktop page. This app *is* the phone: the device supplies the
 * status bar and the rounded corners, so `.phone`, `.phone-status`, and the 340px width are
 * deliberately dropped. Reproducing them would put a picture of a phone inside a phone.
 *
 * What is ported is the part that is real UI:
 *   `.phone-head`  the app label + screen title, over a 2px ink rule
 *   `.phone-body`  card-coloured, scrollable, 18px of side padding
 *   the back chevron and the right-hand slot (`Lock` in the prototype)
 *
 * ── THE LANGUAGE TOGGLE IS NOT `headerRight` (US 1.11) ──
 * `headerRight` is per-screen opt-in — `id.tsx` passes `LockButton`, most screens pass nothing. The
 * language toggle must be reachable in one tap from EVERY screen, so it is rendered here
 * unconditionally instead, and requires a `<LanguageProvider>` ancestor (each app wraps its root
 * layout in one) the same way any screen using `useAuth()` requires an `<AuthProvider>` ancestor.
 *
 * ── NO TAB BAR HERE ──
 * The five-tab bar belongs to the signed-in app, not to this component. Every screen in the
 * landing/login flow is `noTabs: true` in the prototype, and a tab bar rendered behind a login form
 * would advertise destinations the caller cannot reach.
 */

interface AppShellProps {
  /** Small uppercase kicker above the title. The prototype always shows "SIGLA" here. */
  app?: string;
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
  /** The prototype's house icon next to the app label — jumps to the app-launcher/home. */
  onHome?: () => void;
  /** The prototype's `Lock` pill slot. Left empty on the auth screens. */
  headerRight?: React.ReactNode;
  /** Turn off when the screen manages its own scrolling. */
  scroll?: boolean;
  /**
   * Pinned below the scrolling body — the tab bar on signed-in screens.
   *
   * Outside the ScrollView on purpose: inside it, the bar would scroll away with the content, and a
   * long list would leave a citizen with no visible way out of the screen.
   *
   * Left undefined on every auth screen. A tab bar behind a login form advertises destinations the
   * caller cannot reach.
   */
  footer?: React.ReactNode;
}

/**
 * ⚠️ EVERY VALUE HERE IS A LITERAL NUMBER, NOT A CLASS. Do not "tidy" these back to `className`.
 *
 * Tailwind v4 compiles every spacing utility to `calc(var(--spacing) * N)`, and the
 * react-native-css runtime under `nativewind@5.0.0-preview` does not reliably resolve that on
 * Android. For a colour that degrades quietly; for `maxWidth` on the content column it collapses the
 * layout and the screen renders BLANK under a correct-looking header. That is exactly what shipped
 * to the first device this was ever opened on. See `theme.ts`.
 *
 * ⚠️ THE WEB PORTALS' CENTRED PHONE COLUMN IS `column` BELOW. All three of `width`, `maxWidth` and
 * `alignSelf` are load-bearing: drop `maxWidth` and the merchant/citizen web builds go full-bleed,
 * drop `alignSelf` and they left-align. `max-w-120` was 120 × 0.25rem = 480px, so this is a literal
 * translation and not a new choice. Verify at a desktop browser width after touching it.
 */
const styles = StyleSheet.create({
  fill: { flex: 1 },
  screen: { flex: 1, backgroundColor: color.card },

  headerBar: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: color.ink,
    backgroundColor: color.card,
  },
  /**
   * The RULE is full-bleed, so the header reads as a bar the way it does in the admin/COA portals.
   * Its CONTENT is capped to the body's width and centred with it — left-aligned instead, the app
   * label sat at the far left of a wide window while the body sat in the middle, which read as two
   * unrelated layouts. On a phone the cap exceeds the screen, so this is identical to full width.
   *
   * `paddingTop: 12`, not the 2px this had. The safe-area inset stops at the notch — it guarantees
   * the header is not UNDER the status bar and nothing more. With 2px on top of that, the app label
   * sat flush against the bottom edge of the status bar on a device, and against the very top of the
   * viewport on web, where the inset is zero.
   */
  headerRow: {
    width: '100%',
    maxWidth: CONTENT_MAX_WIDTH,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp(2),
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 10,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.small,
    paddingHorizontal: sp(1.5),
    paddingVertical: sp(1),
  },
  /* Pulls the chevron's own padding back so the glyph aligns with the body's 18px gutter. */
  backButton: { marginLeft: -sp(1.5) },
  iconPressed: { backgroundColor: color.line },
  chevron: { fontFamily: font.bold, fontSize: 20, lineHeight: 20, color: color.ink },
  homeIcon: { fontFamily: font.regular, fontSize: 16, lineHeight: 20, color: color.ink },

  titleColumn: { flex: 1, minWidth: 0 },
  appLabel: {
    fontFamily: font.bold,
    ...type.badge,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    color: color.muted,
  },
  title: { fontFamily: font.bold, fontSize: 14.5, lineHeight: 20, color: color.ink },

  column: {
    width: '100%',
    maxWidth: CONTENT_MAX_WIDTH,
    flex: 1,
    alignSelf: 'center',
    backgroundColor: color.card,
  },
  /**
   * The bottom padding is deliberately generous. At 24 the last control on a long screen landed
   * exactly on the fold in a mobile browser — the merchant accreditation form has one more line of
   * copy than the citizen one, which was enough to cut its Submit button in half.
   */
  body: { paddingHorizontal: 18, paddingTop: 16, paddingBottom: sp(14) },
});

export function AppShell({
  app = 'SIGLA',
  title,
  children,
  onBack,
  onHome,
  headerRight,
  scroll = true,
  footer,
}: AppShellProps) {
  const body = <View style={styles.body}>{children}</View>;

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.headerBar}>
        <View style={styles.headerRow}>
          {/* Rendered only when there is somewhere to go back to. This used to reserve its width
              unconditionally so the title never shifted between screens, but that indented the title
              past the body's own padding on every screen without a back button, which read as a stray
              margin. Aligning with the body wins. */}
          {onBack !== undefined && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Go back"
              onPress={onBack}
              style={({ pressed }) => [
                styles.iconButton,
                styles.backButton,
                pressed && styles.iconPressed,
              ]}
            >
              <Text style={styles.chevron}>‹</Text>
            </Pressable>
          )}

          {onHome !== undefined && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Go to home"
              onPress={onHome}
              style={({ pressed }) => [styles.iconButton, pressed && styles.iconPressed]}
            >
              <Text style={styles.homeIcon}>⌂</Text>
            </Pressable>
          )}

          <View style={styles.titleColumn}>
            <Text style={styles.appLabel}>
              {app} {APP_VERSION}
            </Text>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          </View>

          <LanguageToggle />
          {headerRight}
        </View>
      </View>

      {/* The functional area — scrollable body and footer — stays phone-width and centred, even
          when the header above it spans the full browser window. */}
      <View style={styles.column}>
        {scroll ? (
          <ScrollView
            style={styles.fill}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
          >
            {body}
          </ScrollView>
        ) : (
          <View style={styles.fill}>{body}</View>
        )}

        {footer}
      </View>
    </SafeAreaView>
  );
}
