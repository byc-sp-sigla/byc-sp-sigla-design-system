/**
 * `t()` returns a finished string, so a line with a name or a time in it needs the value put back:
 *
 *     fill(t('id.offlineValidUntil'), { when: formatWhen(qr.graceExpiresAt) })
 *
 * Placeholders rather than string concatenation, because Filipino puts the pieces of a sentence in
 * a different order than English — `'Valid until ' + when` can only ever build the English one.
 */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
