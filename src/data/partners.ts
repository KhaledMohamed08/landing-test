/**
 * Partner ecosystem — design firms, constructors, and consultants who shape
 * each Naseem project. Logos are monochrome SVGs served from /public.
 */
import type { LocalizedString } from '../i18n';
import { asset } from '../utils/url';

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
    logo: asset('partners/partner-1.svg'),
    website: 'https://example.com',
  },
  {
    id: 'partner-02',
    name: 'Stonecraft',
    role: { en: 'Stone entrance execution', ar: 'تنفيذ المداخل الحجرية' },
    logo: asset('partners/partner-2.svg'),
    website: 'https://example.com',
  },
  {
    id: 'partner-03',
    name: 'Lumière Lab',
    role: { en: 'Lighting engineering', ar: 'هندسة الإضاءة' },
    logo: asset('partners/partner-3.svg'),
    website: 'https://example.com',
  },
  {
    id: 'partner-04',
    name: 'Verdant',
    role: { en: 'Landscape design', ar: 'تصميم المناظر الطبيعية' },
    logo: asset('partners/partner-4.svg'),
    website: 'https://example.com',
  },
  {
    id: 'partner-05',
    name: 'Axis Build',
    role: { en: 'Management & supervision', ar: 'الإدارة والإشراف' },
    logo: asset('partners/partner-5.svg'),
    website: 'https://example.com',
  },
];

export default partners;