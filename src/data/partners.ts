/**
 * Partner ecosystem — design firms, constructors, and consultants who shape
 * each Naseem project. Logos are monochrome SVGs served from /public.
 */
import type { LocalizedString } from '../i18n';

export interface Partner {
  id: string;
  name: string;
  /** Display label rendered under the logo. */
  role: LocalizedString;
  /** Path (served from /public) to a monochrome SVG / WebP logo. */
  logo: string;
  /** External website link. */
  website: string;
}

export const partners: Partner[] = [
  {
    id: 'partner-01',
    name: 'Atelier Form',
    role: { en: 'Design consultancy', ar: 'استشارات التصميم' },
    logo: '/partners/partner-1.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-02',
    name: 'Stonecraft',
    role: { en: 'Stone entrance execution', ar: 'تنفيذ المداخل الحجرية' },
    logo: '/partners/partner-2.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-03',
    name: 'Lumière Lab',
    role: { en: 'Lighting engineering', ar: 'هندسة الإضاءة' },
    logo: '/partners/partner-3.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-04',
    name: 'Verdant',
    role: { en: 'Landscape design', ar: 'تصميم المناظر الطبيعية' },
    logo: '/partners/partner-4.svg',
    website: 'https://example.com',
  },
  {
    id: 'partner-05',
    name: 'Axis Build',
    role: { en: 'Management & supervision', ar: 'الإدارة والإشراف' },
    logo: '/partners/partner-5.svg',
    website: 'https://example.com',
  },
];

export default partners;