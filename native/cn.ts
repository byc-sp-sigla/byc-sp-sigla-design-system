/**
 * Join class names, dropping anything falsy.
 *
 * Deliberately not `clsx` or `tailwind-merge`: this package should add no runtime dependency to
 * four apps for eight lines of string joining, and conflict-resolution (`tailwind-merge`) is not
 * wanted here — a primitive that silently drops a caller's override is harder to debug than one
 * where the later class simply wins, which is what CSS already does.
 *
 * Each app has its own identical `cn` in `src/lib/utils`. This copy exists so the package resolves
 * standalone rather than reaching into a consumer's path alias.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
