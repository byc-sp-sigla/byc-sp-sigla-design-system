/**
 * Join class names, dropping anything falsy. Identical to `native/cn.ts` — see the note there.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
