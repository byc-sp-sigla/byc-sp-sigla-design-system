import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from './cn';

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
  const body = <View className="px-4.5 pb-6 pt-4">{children}</View>;

  return (
    <SafeAreaView className="flex-1 bg-sigla-card" edges={['top', 'bottom']}>
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

        Full-bleed on web on purpose — a wide browser window centres the body below, but the header
        reads as a bar the way it does in the admin/COA portals, not as a phone header clipped to the
        body's own width.
      */}
      <View className="w-full flex-row items-center gap-2 border-b-2 border-sigla-ink bg-sigla-card pb-2.5 pl-4.5 pr-2.5 pt-3">
        {/* Reserves the chevron's width even when there is nothing to go back to, so the title does
            not shift horizontally between screens. */}
        <View className="w-8">
          {onBack !== undefined && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Go back"
              onPress={onBack}
              className="items-center justify-center rounded px-2 py-1 active:bg-sigla-line"
            >
              <Text className="font-sigla-bold text-xl leading-5 text-sigla-ink">‹</Text>
            </Pressable>
          )}
        </View>

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

        <View className="min-w-0 flex-1">
          <Text className="font-sigla-bold text-sigla-badge uppercase tracking-[1.4px] text-sigla-muted">
            {app}
          </Text>
          <Text numberOfLines={1} className="font-sigla-bold text-[14.5px] leading-5 text-sigla-ink">
            {title}
          </Text>
        </View>

        {headerRight}
      </View>

      {/* The functional area — scrollable body and footer — stays phone-width and centred, even
          when the header above it spans the full browser window. */}
      <View className="w-full max-w-120 flex-1 self-center bg-sigla-card">
        {scroll ? (
          <ScrollView
            className="flex-1 bg-sigla-card"
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
          >
            {body}
          </ScrollView>
        ) : (
          <View className={cn('flex-1 bg-sigla-card')}>{body}</View>
        )}

        {footer}
      </View>
    </SafeAreaView>
  );
}
