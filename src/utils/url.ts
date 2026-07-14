/**
 * URL helpers — single source of truth for the Astro `base` config.
 * ------------------------------------------------------------------
 * `import.meta.env.BASE_URL` is injected at build time from
 * `astro.config.mjs → base`. Today that's `/landing-test`. Every internal
 * URL in the project should go through `asset()` or `anchor()` so flipping
 * the base in the config re-routes the entire site with zero code changes.
 *
 *   • `asset('projects/x.svg')`  → `/landing-test/projects/x.svg`
 *   • `anchor('contact')`        → `/landing-test/#contact`
 *
 * External links (https://, tel:, mailto:, whatsapp:) must NOT be prefixed.
 */

/**
 * The configured Astro base, normalized to ALWAYS end with a single `/`.
 * `import.meta.env.BASE_URL` may be `/landing-test` (no trailing slash) or
 * `/` for root — we normalize so `asset('x')` never produces a missing slash.
 */
const rawBase: string = import.meta.env.BASE_URL || '/';
export const BASE_URL: string = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Prefix a public/ asset path with the configured base. */
export const asset = (path: string): string =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;

/** Build an in-page anchor URL that respects the base. */
export const anchor = (id: string): string =>
  `${BASE_URL}#${id.replace(/^#/, '')}`;