/**
 * Project catalogue — structured, type-safe, localized & fully decoupled
 * from the UI. Swap a field or add a project and the gallery updates itself.
 */
import type { LocalizedString } from '../i18n';
import { LOCALE } from '../i18n';
import { asset } from '../utils/url';

export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface Project {
  id: string;
  title: LocalizedString;
  location: LocalizedString;
  status: ProjectStatus;
  /** Path (served from /public) to an optimized WebP/SVG asset. */
  image: string;
  /** Alt text for accessibility. */
  alt: LocalizedString;
  description: LocalizedString;
  /** Optional gross floor area / units used in the card meta. */
  meta?: LocalizedString;
}

/** Localized status badges. */
export const statusLabel: Record<ProjectStatus, LocalizedString> = {
  completed: { en: 'Completed', ar: 'مكتمل' },
  ongoing: { en: 'Ongoing', ar: 'قيد التنفيذ' },
  upcoming: { en: 'Upcoming', ar: 'قادم' },
};

export const projects: Project[] = [
  {
    id: 'dunes-01',
    title: { en: 'Oasis Dunes', ar: 'كثبان الواحة' },
    location: { en: 'Riyadh — Al Yassmeen', ar: 'الرياض — حي الياسمين' },
    status: 'completed',
    image: asset('projects/project-1.svg'),
    alt: {
      en: 'Architectural façade of the Oasis Dunes project at sunset',
      ar: 'واجهة معمارية لمشروع كثبان الواحة وقت الغروب',
    },
    description: {
      en: 'A luxury residential complex that echoes the dune topography, with stone façades that respond to daylight throughout the day.',
      ar: 'مجمع سكني فاخر يحاكي تضاريس الكثبان الرملية، بواجهات حجرية تتفاعل مع ضوء الشمس على مدار اليوم.',
    },
    meta: { en: '42 units — 120,000 m²', ar: '٤٢ وحدة — ١٢٠٬٠٠٠ م²' },
  },
  {
    id: 'nasiem-tower-02',
    title: { en: 'Naseem Tower', ar: 'برج نَسيم' },
    location: { en: 'Jeddah — Al Abhur Corniche', ar: 'جدة — كورنيش الأبحر' },
    status: 'ongoing',
    image: asset('projects/project-2.svg'),
    alt: {
      en: 'A cubic glass tower overlooking the sea',
      ar: 'برج زجاجي مكعب الشكل يطل على البحر',
    },
    description: {
      en: 'A mixed-use tower set at a 45° angle using smart glass, creating a visual dialogue between sky and sea.',
      ar: 'برج مختلط الاستخدام بزاوية مائلة ٤٥° من الزجاج الذكي، يخلق حواراً بصرياً بين السماء والبحر.',
    },
    meta: { en: '35 floors — 60 residences', ar: '٣٥ طابقاً — ٦٠ وحدة سكنية' },
  },
  {
    id: 'murabba-03',
    title: { en: 'The Platinum Square', ar: 'المربّع البلاتيني' },
    location: { en: 'Dammam — The Shore', ar: 'الدمام — الشاطئ' },
    status: 'completed',
    image: asset('projects/project-3.svg'),
    alt: {
      en: 'An inner courtyard of a mixed-use complex with golden lighting',
      ar: 'فناء داخلي لمجمع تجاري سكني بإضاءة ذهبية',
    },
    description: {
      en: 'A square architectural mass that splits into a shaded inner courtyard, merging luxury retail with serene living.',
      ar: 'كتلة معمارية مربعة تتجزأ إلى فناء داخلي مظلل، تجمع بين التجارة الفاخرة والمعيشة الهادئة.',
    },
    meta: { en: '24 boutiques — 16 penthouses', ar: '٢٤ محل — ١٦ بنتهاوس' },
  },
  {
    id: 'gem-cut-04',
    title: { en: 'The Cut Gem', ar: 'الجوهرة المشذوبة' },
    location: { en: 'Riyadh — Diplomatic Quarter', ar: 'الرياض — حي السفارات' },
    status: 'upcoming',
    image: asset('projects/project-4.svg'),
    alt: {
      en: 'A tower with cut facets resembling precious stones',
      ar: 'برج بزوايا مقطوعة يشبه الأحجار الكريمة',
    },
    description: {
      en: 'A tower with cut facets inspired by the craft of gem cutting, fracturing sunlight and reflecting it in dynamic motion.',
      ar: 'برج بزوايا مقطوعة مستوحاة من فنّ تقطيع الأحجار الكريمة، يكسر ضو الشمس ويعكسه بحركة ديناميكية.',
    },
    meta: { en: '28 floors — Opening 2027', ar: '٢٨ طابقاً — افتتاح ٢٠٢٧' },
  },
  {
    id: 'wadi-arc-05',
    title: { en: 'Valley Arches', ar: 'أقواس الوادي' },
    location: { en: 'Abha — Wadi Al Thi’b', ar: 'أبها — وادي الذئب' },
    status: 'ongoing',
    image: asset('projects/project-5.svg'),
    alt: {
      en: 'A residential complex with curved passages through mountainous terrain',
      ar: 'مجمع سكني بممرات مقوسة وسط تضاريس جبلية',
    },
    description: {
      en: 'Curved residential passages that follow the descent of the valley, merging the geometry of the land with the geometry of buildings in one dialogue.',
      ar: 'ممرات سكنية مقوسة تتبع انحدار الوادي، تندمج هندسة الأرض مع هندسة المباني في حوار واحد.',
    },
    meta: { en: '52 villas — 80,000 m²', ar: '٥٢ فيلا — ٨٠٬٠٠٠ م²' },
  },
];

export default projects;
export { LOCALE };