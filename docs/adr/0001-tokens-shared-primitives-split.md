# ADR-0001 — One token file, two primitive sets

**Status:** Accepted · **Date:** 2026-08-01 · **Decider:** Tech lead

## Context

SIGLA has four frontends against one backend, and they are not one stack:

| App | Stack | Consumes |
|---|---|---|
| `byc-sp-sigla-citizen-expo` | Expo · React Native · NativeWind v5 | iOS, Android, Web |
| `byc-sp-sigla-merchant-expo` | Expo · React Native · NativeWind v5 | iOS, Android, Web |
| `byc-sp-sigla-admin-react` | Vite · React 19 · Tailwind v4 | Web |
| `byc-sp-sigla-coa-react` | Vite · React 19 · Tailwind v4 | Web |

All four must reproduce one design: `SIGLA_App_Prototype_v2.html`. Its `:root` block is the
contract — twelve colours, two radii, Hanken Grotesk at three weights, and a type scale in
half-pixel sizes.

The citizen app was built first, with tokens and primitives local to that repo. Merchant is a
byte-identical scaffold and needs exactly the same pieces, which is the point at which "copy them
across" stops being viable: two copies of a colour is two places for it to drift, and the copy that
drifts is the one nobody is looking at.

## Decision

A single package, `byc-sp-sigla-design-system`, with **one token file and two primitive
implementations** behind separate entry points:

```
byc-sp-sigla-design-system/
  tokens.css      universal. The @theme block. All four apps import this.
  native/         React Native + NativeWind    → citizen-expo, merchant-expo
  web/            React + Tailwind v4          → admin-react, coa-react
```

`native` and `web` export the **same component names with the same props**. `Button`,
`Field`, `Card`, `Badge`, `Banner`, `SectionTitle`, `Hint`, `Rule` mean the same thing on both
sides; a screen written against one reads the same as a screen written against the other.

Consumed via a `file:` dependency while the design is still moving, not a published version.

## Why

**Tokens are where the shared truth actually lives.** A hex value and a font size are
platform-neutral — the same `--color-sigla-ink: #1a2e1f` is correct in a Metro bundle and in a Vite
bundle. That is the part that must never fork, and a single CSS file is the cheapest possible way to
guarantee it.

**Component code is not platform-neutral, and pretending otherwise is expensive.** A React Native
`Button` is `Pressable` + `Text`. A web `Button` is `<button>`. Sharing one implementation means
running React Native Web inside both Vite apps — aliasing `react-native` → `react-native-web`,
pulling a bundle's worth of RN shims into an admin portal, and inheriting RNW's DOM output
(`<div role="button">` where a `<button>` belongs) along with its accessibility and form-semantics
consequences. That is a large, permanent tax for a login screen and six flat components.

The RNW cost is also not hypothetical here. Building the citizen app turned up exactly this class of
problem: react-native-web ships **unlayered** base styles for `<Text>`, which silently beat any
Tailwind utility written inside `@layer utilities`. The class landed in the DOM, the rule was in the
bundle, and the font never changed. Two Vite apps that never load RNW never inherit that failure
mode.

**Same names, two implementations, is the cheap half of the trade.** The duplication is real but
bounded: eight small presentational components, no logic, no state. What it buys is that each side is
idiomatic for its platform, and neither is a compatibility shim for the other.

## What the package does NOT contain

**No API client, no auth context, no token storage.** The citizen and merchant apps have nearly
identical `services/api.ts` and `useAuth.tsx`, and it is tempting to lift those too. They do not
belong here: a design system that ships an axios instance and a session state machine is not a design
system, and every consumer would then take a networking dependency to render a button. If that
duplication becomes painful, the answer is a second package (`sigla-client`), not this one.

**No screens.** A login screen composed of these primitives is app code. Merchant's landing copy
differs from citizen's, and admin's differs from both.

## Consequences

- Adding a component means adding it **twice**, once per entry point, with matching names and props.
  A component that exists on only one side is a smell — say why in its file header.
- A token change is one edit and reaches all four apps. That is the whole point, and it also means a
  careless token edit reaches all four apps.
- `file:` dependencies need Metro taught about them: `watchFolders` plus `nodeModulesPaths`, or the
  symlink does not resolve and NativeWind never sees the package's `.tsx` files to compile their
  classes. Documented in the package README.
- Publishing to a registry is deferred. Revisit when the design stops changing daily, or when a
  fifth consumer appears.

## Alternatives considered

**Copy tokens into each app.** Rejected — the drift this ADR exists to prevent.

**One RNW-based component set for all four.** Rejected on the bundle, DOM-semantics, and
unlayered-CSS grounds above.

**Tokens-only package, primitives per app.** Tempting, and genuinely closer than it looks: it keeps
the colours honest and leaves each app free. Rejected because citizen and merchant are the *same
stack* — their primitives would be a literal copy-paste, which is the case for sharing at its
strongest. The web set is the one that could plausibly have been left out, and it is included so
admin and COA start from the same shapes rather than reinventing a `Field`.
