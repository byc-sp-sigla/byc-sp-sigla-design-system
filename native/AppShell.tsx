import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
 * ⚠️ LAYOUT-CRITICAL VALUES ARE PLAIN RN STYLES, NOT CLASSES. Do not "tidy" these back to
 * `className`.
 *
 * Tailwind v4 compiles every spacing utility to `calc(var(--spacing) * N)`, and the
 * react-native-css runtime under `nativewind@5.0.0-preview` does not reliably resolve that on
 * Android — the value arrives as `NaN`. For a colour or a font weight that degrades quietly; for
 * `maxWidth` on the content column it collapses the layout and the screen renders BLANK under a
 * correct-looking header. That is exactly what shipped to the first device this was ever opened on.
 *
 * So anything that decides whether content is visible — width, maxWidth, flex, padding, gap — is a
 * literal number here. Colour and typography stay as classes, where a miss is cosmetic.
 *
 * `global.css` in both apps also overrides `.max-w-120`, `leading-*` and `text-*` for the same
 * reason. Belt and braces: this file no longer depends on those landing.
 *
 * 120 × 0.25rem = 30rem = 480. 4.5 × 4 = 18.
 */
const COLUMN = { width: '100%', maxWidth: 480, flex: 1, alignSelf: 'center' } as const;

const HEADER_ROW = {
  width: '100%',
  maxWidth: 480,
  marginHorizontal: 'auto',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  paddingTop: 12,
  paddingBottom: 10,
  paddingLeft: 18,
  paddingRight: 10,
} as const;

const BODY_PAD = { paddingHorizontal: 18, paddingTop: 16, paddingBottom: 24 } as const;

/** `flex-1` and `w-full` are classes too, and the whole layout chain has to survive without them. */
const FILL = { flex: 1 } as const;
const HEADER_BAR = { width: '100%' } as const;
const TITLE_COL = { flex: 1, minWidth: 0 } as const;

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
  const body = <View style={BODY_PAD}>{children}</View>;

  return (
    <SafeAreaView className="bg-sigla-card" style={FILL} edges={['top', 'bottom']}>
      {/*
        `pt-3`, not the `pt-0.5` this had.

        The safe-area inset stops at the notch — it guarantees the header is not UNDER the status bar
        and nothing more. With 2px on top of that, the app label sat flush against the bottom edge of
        the status bar on a device, and against the very top of the viewport on web, where the inset
        is zero. 12px gives the label room to read as a header rather than as an overflow of the
        status bar.

        Applied here rather than in either app: this is the one header both Expo apps render, so the
        citizen and merchant chrome cannot drift apart by someone padding only the screen they had
        open.

        The RULE is full-bleed, so the header reads as a bar the way it does in the admin/COA portals.
        Its CONTENT is capped to the body's width and centred with it — left-aligned instead, the app
        label sat at the far left of a wide window while the body sat in the middle, which read as two
        unrelated layouts. On a phone the cap exceeds the screen, so this is identical to full width.
      */}
      <View className="border-b-2 border-sigla-ink bg-sigla-card" style={HEADER_BAR}>
      <View style={HEADER_ROW}>
        {/* Rendered only when there is somewhere to go back to. This used to reserve its width
            unconditionally so the title never shifted between screens, but that indented the title
            past the body's own padding on every screen without a back button, which read as a stray
            margin. Aligning with the body wins. */}
        {onBack !== undefined && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBack}
            className="-ml-1.5 items-center justify-center rounded px-1.5 py-1 active:bg-sigla-line"
          >
            <Text className="font-sigla-bold text-xl leading-5 text-sigla-ink">‹</Text>
          </Pressable>
        )}

        {onHome !== undefined && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go to home"
            onPress={onHome}
            className="items-center justify-center rounded px-1.5 py-1 active:bg-sigla-line"
          >
            <Text className="text-base leading-5 text-sigla-ink">⌂</Text>
          </Pressable>
        )}

        <View style={TITLE_COL}>
          <Text className="font-sigla-bold text-sigla-badge uppercase tracking-[1.4px] text-sigla-muted">
            {app}
          </Text>
          <Text numberOfLines={1} className="font-sigla-bold text-[14.5px] leading-5 text-sigla-ink">
            {title}
          </Text>
        </View>

        {headerRight}
      </View>
      </View>

      {/* The functional area — scrollable body and footer — stays phone-width and centred, even
          when the header above it spans the full browser window. */}
      <View className="bg-sigla-card" style={COLUMN}>
        {scroll ? (
          <ScrollView
            className="bg-sigla-card"
            style={FILL}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
          >
            {body}
          </ScrollView>
        ) : (
          <View className="bg-sigla-card" style={FILL}>{body}</View>
        )}

        {footer}
      </View>
    </SafeAreaView>
  );
}
