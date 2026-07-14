/**
 * i18n controller — single source of truth for the active locale.
 * ------------------------------------------------------------------
 * The site is config-driven & multi-language ready. Today we ship **English**
 * as the default (`LOCALE = 'en'`). To switch the whole site to Arabic, or to
 * add a new language, only this file + the matching dictionary entries change
 * — no component touches the locale.
 *
 * How it works
 * ------------
 *  - Every translatable string in `src/data/*` is a `LocalizedString`
 *    (an object keyed by locale, e.g. `{ en: 'The Studio', ar: 'الاستوديو' }`).
 *  - Components call `t(value)` to resolve the active-locale string.
 *  - `dir` flips automatically (`rtl` for Arabic, `ltr` otherwise) so the
 *    entire layout, GSAP horizontal-scroll direction and floating labels
 *    adapt from one constant.
 *
 * Adding a new language (e.g. French):
 *   1. Add `'fr'` to `Locale`.
 *   2. Provide `fr` values in every `LocalizedString` across `src/data`.
 *   3. Switch `LOCALE = 'fr'`.
 */

export type Locale = 'en' | 'ar';

/** ─────────────────────────────────────────────────────────────────
 *  ACTIVE LOCALE — flip this single constant to change the whole site.
 *  ───────────────────────────────────────────────────────────────── */
export const LOCALE: Locale = 'en';

/** All languages the project can speak (used for hreflang loops later). */
export const locales: Locale[] = ['en', 'ar'];

export const defaultLocale: Locale = 'en';

export interface LocalizedString {
  en: string;
  ar: string;
}

/** Resolve a localized string to the active locale. */
export const t = (value: LocalizedString): string => value[LOCALE] ?? value.en;

/** Resolve a localized string for an explicit locale (rarely needed). */
export const tt = (value: LocalizedString, locale: Locale = LOCALE): string =>
  value[locale] ?? value.en;

/** Writing direction for the active locale. */
export const dir: 'ltr' | 'rtl' = (LOCALE as string) === 'ar' ? 'rtl' : 'ltr';

/** `<html lang>` attribute for the active locale. */
export const htmlLang: string = LOCALE;

/** True when the layout flows right-to-left (handy inside GSAP scripts). */
export const isRTL = dir === 'rtl';

/** Resolve a localized string from the browser (client scripts). */
export const tClient = (value: LocalizedString): string => {
  const locale = ((window as any).__NASEEM_LOCALE__ as Locale) ?? LOCALE;
  return value[locale] ?? value.en;
};

export default LOCALE;