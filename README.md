# byc-sp-sigla-design-system

Design tokens and UI primitives for the four SIGLA portals. The design is defined by
`SIGLA_App_Prototype_v2.html` — this package is that prototype, in code.

```
tokens.css      the @theme block. Colour, radii, type. ALL FOUR apps import this.
native/         React Native + NativeWind  →  citizen-expo, merchant-expo
web/            React + Tailwind v4        →  admin-react, coa-react
docs/adr/       why it is shaped this way
```

`native` and `web` export the **same component names with the same props**. Two implementations,
one API — see [ADR-0001](docs/adr/0001-tokens-shared-primitives-split.md) for why they are not one.

## Install

Consumed as a `file:` dependency while the design is still moving. From a consuming app:

```bash
npm install file:../byc-sp-sigla-design-system
```

### Expo apps (citizen, merchant)

**1. Import the tokens** in `src/global.css`, after the Tailwind imports:

```css
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';

@import 'byc-sp-sigla-design-system/tokens.css';
```

**2. Point Tailwind at the package's sources** so the classes used *inside* the primitives are
compiled:

```css
@source '../../byc-sp-sigla-design-system/native';
```

Tailwind v4 only emits utilities it can **see** used. A class that appears only inside the design
system is invisible to the app's own content scan, so the rule is silently absent from the bundle and
the component renders unstyled.

**3. Teach Metro about the link.** Not optional, and its absence is confusing rather than loud — a
`file:` dependency is a symlink, and Metro does not follow one out of the project root by default:

```js
// metro.config.js
const path = require('path');
const DS = path.resolve(__dirname, '../byc-sp-sigla-design-system');

config.watchFolders = [DS];
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(DS, 'node_modules'),
];
// React must not load twice. The linked package would otherwise resolve its own copy and every
// hook throws "invalid hook call".
config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
};
```

**4. Load the fonts.** The package names three families; each app registers them:

```tsx
useFonts({ HankenGrotesk_400Regular, HankenGrotesk_700Bold, HankenGrotesk_800ExtraBold });
```

The keys must match `--font-sigla*` in `tokens.css` exactly. A mismatch does not error — it falls
back to the system face and merely looks slightly wrong.

### Vite apps (admin, COA)

```css
/* src/index.css */
@import 'tailwindcss';
@import 'byc-sp-sigla-design-system/tokens.css';
@source '../../byc-sp-sigla-design-system/web';
```

Fonts come from `@font-face` rules declaring the same three family names.

## Using it

```tsx
import { AppShell, Button, Field, Banner, Hint } from 'byc-sp-sigla-design-system/native';

<AppShell title="Login" onBack={() => router.back()}>
  <Banner tone="warn">This SIGLA ID is suspended.</Banner>
  <Field label="Phone Number" placeholder="09171234567" value={phone} onChangeText={setPhone} />
  <Button label="Log In" variant="primary" loading={busy} onPress={submit} />
  <Hint>Forgot your password? Visit your barangay office.</Hint>
</AppShell>
```

## What is here

| Component | Prototype counterpart |
|---|---|
| `AppShell` | `.phone-head` + `.phone-body` |
| `Button` | `.btn`, `.btn.primary`, `.btn.danger`, `.btn.disabled` |
| `Field` | `.field` + `.input` + `.hint` (plus an error state the prototype has no need for) |
| `Card` | `.card`, and its dark `background:var(--ink)` variant |
| `Badge` | `.badge` |
| `Banner` | `.banner-msg` |
| `SectionTitle` | `.section-title` |
| `Hint` | `.hint` |
| `Rule` | `.hr` |
| `PinDots` | `pinDots()` |
| `Toggle` | `.toggle` |

## Rules

- **Never copy `tokens.css` into an app.** Four copies of a hex value is four places to drift, and the
  one that drifts is the one nobody is looking at.
- **A colour not in `tokens.css` does not belong in a screen.** If the design needs one, it lands here
  first.
- **Add a component to both entry points**, matching names and props. One-sided is a smell — put the
  reason in the file header.
- **No API clients, auth contexts, or screens.** This package renders; it does not fetch or decide.
