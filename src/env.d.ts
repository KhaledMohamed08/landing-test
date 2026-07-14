/// <reference path="../.astro/types.d.ts" />

/**
 * Augment the global scope so component <script> tags can safely access the
 * shared GSAP instance installed once in Layout.astro (window.gsapLoaded is
 * set client-side only and never during SSG).
 */
interface Window {
  gsap?: typeof import('gsap').gsap;
  ScrollTrigger?: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  gsapLoaded?: boolean;
  __NASEEM_LOCALE__?: string;
}