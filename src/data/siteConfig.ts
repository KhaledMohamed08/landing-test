/**
 * Central site configuration — fully localized & config-driven.
 * ------------------------------------------------------------------
 * Every piece of copy / phone number / link shown across the UI is sourced
 * from here. All human-readable text is a `LocalizedString` so every locale
 * ships from one schema. Editing content = editing this file.
 */
import type { LocalizedString } from '../i18n';
import { dir, htmlLang } from '../i18n';

export interface NavLink {
  label: LocalizedString;
  href: string;
}

export interface SocialLink {
  label: LocalizedString;
  href: string;
}

export interface SiteConfig {
  /** Document-level metadata */
  meta: {
    title: LocalizedString;
    description: LocalizedString;
    /** Active `<html lang>` (driven by i18n). */
    lang: string;
    /** Active writing direction (driven by i18n). */
    dir: 'ltr' | 'rtl';
  };

  /** Brand identity */
  agency: {
    name: LocalizedString;
    nameEn: string;
    tagline: LocalizedString;
  };

  /** Primary navigation shown in the header */
  nav: NavLink[];

  /** Core philosophy section */
  philosophy: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    body: LocalizedString;
  };

  /** Development phases rendered in the timeline */
  phases: {
    id: string;
    index: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];

  /** Projects gallery section header */
  projectsSection: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    headingSub: LocalizedString;
    endMarker: LocalizedString;
    scrollHint: LocalizedString;
  };

  /** Partners section header */
  partnersSection: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
  };

  /** Contact section */
  contactSection: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    body: LocalizedString;
    fields: {
      name: LocalizedString;
      phone: LocalizedString;
      email: LocalizedString;
      message: LocalizedString;
    };
    submit: LocalizedString;
    successMessage: LocalizedString;
    callLabel: LocalizedString;
    whatsappLabel: LocalizedString;
    emailLabel: LocalizedString;
    ctaPrimary: LocalizedString;
    ctaSecondary: LocalizedString;
    heroCtaExplore: LocalizedString;
    heroCtaPhilosophy: LocalizedString;
    heroScrollCue: LocalizedString;
    requestPitch: LocalizedString;
  };

  /** Contact channels (structural — same across locales) */
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: LocalizedString;
    email: string;
    address: LocalizedString;
  };

  /** Social channels */
  social: SocialLink[];

  /** Footer legal copy */
  footer: {
    rights: LocalizedString;
    credits: LocalizedString;
    linksTitle: LocalizedString;
    contactTitle: LocalizedString;
    taglineLong: LocalizedString;
  };
}

export const siteConfig: SiteConfig = {
  meta: {
    title: {
      en: 'Naseem Real Estate | Developments that shape cities',
      ar: 'نَسيم العقارية | تنمية استثنائية تشكّل المدن',
    },
    description: {
      en: 'A leading real-estate development company crafting luxury residential and commercial projects where contemporary architecture meets the spirit of place.',
      ar: 'شركة تنمية عقارية رائدة تبني مشاريع سكنية وتجارية فاخرة، تجمع بين العمارة المعاصرة وروح المكان.',
    },
    lang: htmlLang,
    dir,
  },

  agency: {
    name: { en: 'Naseem', ar: 'نَسيم' },
    nameEn: 'NASEEM',
    tagline: { en: 'We build cities with the soul of art', ar: 'نبني المدن بروح الفن' },
  },

  nav: [
    { label: { en: 'Philosophy', ar: 'الفلسفة' }, href: '#philosophy' },
    { label: { en: 'Journey', ar: 'الرحلة' }, href: '#timeline' },
    { label: { en: 'Projects', ar: 'المشاريع' }, href: '#projects' },
    { label: { en: 'Partners', ar: 'الشركاء' }, href: '#partners' },
    { label: { en: 'Contact', ar: 'تواصل' }, href: '#contact' },
  ],

  philosophy: {
    eyebrow: { en: 'Our Philosophy', ar: 'فلسفتنا' },
    heading: {
      en: 'We shape brick into a timeless living experience.',
      ar: 'نُشكّل الطوب إلى تجربة معيشية خالدة',
    },
    body: {
      en: 'At Naseem we do not merely construct buildings — we hold the threads of place and identity, weaving them into contemporary architecture that respects its context and inspires its inhabitants. Every project begins with understanding people, and ends with a touch whose details tell a story. We redefine real-estate luxury, where restraint meets innovation, and beauty honours proportion.',
      ar: 'في نَسيم لا نبني مبانٍ فحسب، بل نمسك خيوط المكان والهوية، وننسجها في عمارة معاصرة تحترم موضعها وتلهم ساكنها. كل مشروع لدينا يبدأ من فهم الناس، وينتهي عند لمسة تُقرأ في تفاصيلها قصة. نعيد تعريف الفخامة العقارية، حيث الرزانة تلتقي بالابتكار، والجمال يلتزم بالقياس.',
    },
  },

  phases: [
    {
      id: 'phase-01',
      index: '01',
      title: { en: 'Perception', ar: 'الإدراك' },
      description: {
        en: 'We begin by reading the land and its people: we walk the site, understand its cultural and urban context, and define the latent investment opportunity before drawing a single line.',
        ar: 'نبدأ من قراءة الأرض والناس: نمشي الموقع، ونفهم سياقه الثقافي والحضري، ونحدد الفرصة الاستثمارية الكامنة قبل أن نرسم خطاً واحداً.',
      },
    },
    {
      id: 'phase-02',
      index: '02',
      title: { en: 'Design', ar: 'التصميم' },
      description: {
        en: 'We collaborate with the world’s elite architectural studios to translate vision into lines and masses that balance function and beauty — honouring light and shadow, water and stone.',
        ar: 'نتعاون مع نخبة المكاتب المعمارية العالمية لنترجم الرؤية إلى خطوط وكتل تتوازن بين الوظيفة والجمال، وتكرم الضوء والظل، والماء والحجر.',
      },
    },
    {
      id: 'phase-03',
      index: '03',
      title: { en: 'Execution', ar: 'التنفيذ' },
      description: {
        en: 'We apply the highest global quality standards throughout construction, deliver operationally sustainable solutions, and pursue the final detail with the same care as the first.',
        ar: 'نطبّق أعلى معايير الجودة العالمية خلال البناء، ونؤمن حلولاً مستدامة تشغيلياً، ونتابع التفاصيل الأخيرة بنفس وعي التفاصيل الأولى.',
      },
    },
  ],

  projectsSection: {
    eyebrow: { en: 'The Portfolio', ar: 'معرض الأعمال' },
    heading: {
      en: 'Projects that write themselves',
      ar: 'مشاريع تكتب نفسها',
    },
    headingSub: {
      en: 'in the details of place.',
      ar: 'في تفاصيل المكان.',
    },
    endMarker: {
      en: 'End of the gallery — reach out for what comes next.',
      ar: 'نهاية المعرض — تواصل لمشاريعنا القادمة.',
    },
    scrollHint: {
      en: 'Scroll vertically to glide the projects horizontally →',
      ar: 'مرّر عمودياً لتنزّل المشاريع أفقياً ←',
    },
  },

  partnersSection: {
    eyebrow: { en: 'Partners', ar: 'الشركاء' },
    heading: {
      en: 'A network of the elite. Craft by hands that honour detail.',
      ar: 'شبكة من النخبة. عملٌ بأيدٍ تَحترم التفاصيل.',
    },
  },

  contactSection: {
    eyebrow: { en: 'Contact', ar: 'تواصل' },
    heading: {
      en: 'Let’s start a dialogue that opens your next project.',
      ar: 'لنبدأ حواراً يَفتتح مشروعك القادم.',
    },
    body: {
      en: 'Whether you seek a development partner, hold land awaiting a vision, or want a detailed proposal — our team responds within 24 hours.',
      ar: 'سواء كنت تبحث عن شريك تنمية، أو تملك أرضاً تنتظر رؤية، أو تريد عرضاً تفصيلياً — فريقنا يرد عليك خلال ٢٤ ساعة.',
    },
    fields: {
      name: { en: 'Full name', ar: 'الاسم الكامل' },
      phone: { en: 'Phone number', ar: 'رقم الجوال' },
      email: { en: 'Email address', ar: 'البريد الإلكتروني' },
      message: { en: 'Your message', ar: 'رسالتك' },
    },
    submit: { en: 'Send request', ar: 'إرسال الطلب' },
    successMessage: {
      en: 'We received your request. We’ll be in touch shortly.',
      ar: 'تم استلام طلبك. سنتواصل معك قريباً.',
    },
    callLabel: { en: 'Direct call', ar: 'اتصال مباشر' },
    whatsappLabel: { en: 'WhatsApp', ar: 'واتساب' },
    emailLabel: { en: 'Email', ar: 'البريد' },
    ctaPrimary: { en: 'Discover the projects', ar: 'اكتشف المشاريع' },
    ctaSecondary: { en: 'Philosophy', ar: 'الفلسفة' },
    heroCtaExplore: { en: 'Explore', ar: 'اكتشف' },
    heroCtaPhilosophy: { en: 'Our Philosophy', ar: 'الفلسفة' },
    heroScrollCue: { en: 'Scroll down', ar: 'مرّر للأسفل' },
    requestPitch: { en: 'Request a pitch', ar: 'اطلب عرضاً' },
  },

  contact: {
    phone: '+966920001234',
    phoneDisplay: '+966 92 000 1234',
    whatsapp: '+966500000000',
    whatsappDisplay: { en: 'Direct WhatsApp', ar: 'واتساب مباشر' },
    email: 'hello@naseem.dev',
    address: {
      en: 'Al Yassmeen District, Riyadh, Saudi Arabia',
      ar: 'حي الياسمين، الرياض، المملكة العربية السعودية',
    },
  },

  social: [
    { label: { en: 'Instagram', ar: 'إنستغرام' }, href: 'https://instagram.com' },
    { label: { en: 'LinkedIn', ar: 'لينكدإن' }, href: 'https://linkedin.com' },
    { label: { en: 'Behance', ar: 'بيهانس' }, href: 'https://behance.net' },
  ],

  footer: {
    rights: {
      en: '© 2026 Naseem Real Estate. All rights reserved.',
      ar: '© ٢٠٢٦ نَسيم العقارية. جميع الحقوق محفوظة.',
    },
    credits: {
      en: 'Designed & engineered as a digital architectural piece.',
      ar: 'صُمّمت وبُرمجت كقطعة معمارية رقمية.',
    },
    linksTitle: { en: 'Links', ar: 'روابط' },
    contactTitle: { en: 'Contact', ar: 'تواصل' },
    taglineLong: {
      en: 'A real-estate developer building projects as timeless architectural pieces.',
      ar: 'شركة تنمية عقارية تَبني مشاريع كقطع معمارية خالدة.',
    },
  },
};

export default siteConfig;