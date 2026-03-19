// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface PreloaderConfig {
  enabled: boolean;
  duration: number;
  backgroundColor: string;
  logoSrc: string;
}

export interface ScrollToTopConfig {
  enabled: boolean;
  offsetY: number;
  buttonColor: string;
  buttonPosition: 'left' | 'right';
}

export interface BreadcrumbConfig {
  title?: LocaleString;
  backgroundImage?: string;
}

export interface AboutConfig {
  experienceText: LocaleString;
  badge: LocaleString;
  title: LocaleString;
  subtitle: LocaleString;
  description: LocaleString;
  button: LocaleString;
  image: string;
}

export interface CTAConfig {
  subtitle: LocaleString;
  title: LocaleString;
  phone: LocaleString;
  buttonText: LocaleString;
  backgroundImage: string;
}

export interface CounterItem {
  icon: string;
  count: LocaleString;
  label: LocaleString;
}

export interface CounterConfig {
  backgroundImage: string;
  items: CounterItem[];
}

export interface BlogDetailsConfig {
  breadcrumb: {
    title: LocaleString;
  };
  mainImage: string;
  meta: {
    author: LocaleString;
    comments: LocaleString;
  };
  content: {
    title: LocaleString;
    paragraph1: LocaleString;
    paragraph2: LocaleString;
    blockquote: LocaleString;
    paragraph3: LocaleString;
    image1: string;
    paragraph4: LocaleString;
    image2: string;
    figureText: LocaleString;
  };
  tags: {
    title: LocaleString;
    tag1: LocaleString;
    tag2: LocaleString;
    tag3: LocaleString;
  };
  share: {
    title: LocaleString;
  };
  navigation: {
    prevLabel: LocaleString;
    prevTitle: LocaleString;
    nextLabel: LocaleString;
    nextTitle: LocaleString;
  };
  related: {
    title: LocaleString;
    post1: {
      image: string;
      title: LocaleString;
      excerpt: LocaleString;
    };
    post2: {
      image: string;
      title: LocaleString;
      excerpt: LocaleString;
    };
  };
  author: {
    avatar: string;
    name: LocaleString;
    bio: LocaleString;
  };
  comments: {
    title: LocaleString;
  };
}

export interface BlogListingPost {
  author: LocaleString;
  comments?: LocaleString;
  time?: LocaleString;
  title: LocaleString;
  excerpt: LocaleString;
  readMore?: LocaleString;
}

export interface BlogListingConfig {
  post1: BlogListingPost;
  post2: BlogListingPost;
  post3: BlogListingPost;
  post4: BlogListingPost;
  post5: BlogListingPost;
  post6: BlogListingPost;
}

export interface BlogSidebarConfig {
  search: {
    title: LocaleString;
    placeholder: LocaleString;
  };
  instagram: {
    title: LocaleString;
  };
  social: {
    title: LocaleString;
  };
}

export interface BlogConfig {
  listing: BlogListingConfig;
  sidebar: BlogSidebarConfig;
}

export interface ContactTableRow {
  residence: LocaleString;
  bedBath: LocaleString;
  sqFt: LocaleString;
  salePrice: LocaleString;
  rentPrice: LocaleString;
  viewButton: LocaleString;
  floorPlan: string;
}

export interface ContactConfig {
  subtitle: LocaleString;
  title: LocaleString;
  table: {
    headers: {
      residence: LocaleString;
      bedBath: LocaleString;
      sqFt: LocaleString;
      salePrice: LocaleString;
      rentPrice: LocaleString;
      floorPlan: LocaleString;
    };
    rows: ContactTableRow[];
  };
  neighborhoods: {
    subtitle: LocaleString;
    title: LocaleString;
  };
}

export interface BrandConfig {
  items: string[];
}

export interface HeroSlide {
  title: LocaleString;
  bedrooms: LocaleString;
  squareFeet: LocaleString;
  bathrooms: LocaleString;
  parking: LocaleString;
  ctaText: LocaleString;
  price: LocaleString;
  backgroundImage: string;
}

export interface HeroConfig {
  slides: HeroSlide[];
}

export interface ServiceConfig {
  title: LocaleString;
  description: LocaleString;
  linkText: LocaleString;
}

export interface ServicesConfig {
  services: ServiceConfig[];
}

export interface ApartmentPlan {
  description1: LocaleString;
  description2: LocaleString;
  floorNo: LocaleString;
  rooms: LocaleString;
  area: LocaleString;
  parking: LocaleString;
  price: LocaleString;
  image: string;
}

export interface ApartmentPlansConfig {
  cta: {
    subtitle: LocaleString;
    title: LocaleString;
    phone: LocaleString;
    button: LocaleString;
  };
  plans: {
    subtitle: LocaleString;
    title: LocaleString;
    apartment1: ApartmentPlan;
    apartment2: ApartmentPlan;
    apartment3: ApartmentPlan;
    apartment4: ApartmentPlan;
  };
  availability: {
    subtitle: LocaleString;
    title: LocaleString;
  };
}

export interface AvailabilityConfig {
  // Configuration for availability section
  enabled: boolean;
}

export interface NeighborhoodsConfig {
  subtitle: LocaleString;
  title: LocaleString;
  hospital: {
    title: LocaleString;
    description: LocaleString;
  };
  supermarket: {
    title: LocaleString;
    description: LocaleString;
  };
  restaurant: {
    title: LocaleString;
    description: LocaleString;
  };
  mall: {
    title: LocaleString;
    description: LocaleString;
  };
  coffee: {
    title: LocaleString;
    description: LocaleString;
  };
  metro: {
    title: LocaleString;
    description: LocaleString;
  };
}

export interface TestimonialItem {
  content: LocaleString;
  author: LocaleString;
  position: LocaleString;
  avatar: string;
}

export interface TestimonialConfig {
  subtitle: LocaleString;
  title: LocaleString;
  backgroundImage: string;
  testimonials: TestimonialItem[];
}

export interface FeatureItem {
  title: LocaleString;
  icon: string;
}

export interface FeaturesConfig {
  cta: {
    subtitle: LocaleString;
    title: LocaleString;
    phone: LocaleString;
    buttonText: LocaleString;
  };
  features: {
    items: FeatureItem[];
  };
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: '', en: '' },
  description: { el: '', en: '' },
  language: '',
  keywords: { el: '', en: '' },
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: '',
};

export const preloaderConfig: PreloaderConfig = {
  enabled: true,
  duration: 2000,
  backgroundColor: '#ffffff',
  logoSrc: '/img/logo/logo.png'
};

export const scrollToTopConfig: ScrollToTopConfig = {
  enabled: true,
  offsetY: 300,
  buttonColor: '#007bff',
  buttonPosition: 'right'
};

export interface AboutConfig {
  title: LocaleString;
  description: LocaleString;
  content: LocaleString;
}

export const aboutConfig: AboutConfig = {
  title: { el: 'Σχετικά με εμάς', en: 'About Us' },
  description: { el: 'Μάθετε περισσότερα για την HAYC', en: 'Learn more about HAYC' },
  content: { el: 'Περιεχόμενο σχετικά με την εταιρεία', en: 'Content about the company' },
};

export interface BlogConfig {
  title: LocaleString;
  description: LocaleString;
  postsPerPage: number;
  featuredPostsCount: number;
  categories: LocaleString[];
  showCategories: boolean;
  showTags: boolean;
  showAuthor: boolean;
  showDate: boolean;
  showExcerpt: boolean;
}

export const blogConfig: BlogConfig = {
  title: { el: 'Ιστολόγιο', en: 'Blog' },
  description: { el: 'Διαβάστε τα τελευταία άρθρα και νέα μας', en: 'Read our latest articles and news' },
  postsPerPage: 6,
  featuredPostsCount: 3,
  categories: [
    { el: 'Τεχνολογία', en: 'Technology' },
    { el: 'Επιχειρήσεις', en: 'Business' },
    { el: 'Σχεδιασμός', en: 'Design' }
  ],
  showCategories: true,
  showTags: true,
  showAuthor: true,
  showDate: true,
  showExcerpt: true
};

export interface BlogDetailsConfig {
  title: LocaleString;
  description: LocaleString;
  breadcrumbHome: LocaleString;
  breadcrumbBlog: LocaleString;
  breadcrumbCurrent: LocaleString;
  metaAuthor: LocaleString;
  metaDate: LocaleString;
  metaCategory: LocaleString;
  metaTags: LocaleString;
  shareText: LocaleString;
  relatedPostsTitle: LocaleString;
  commentFormTitle: LocaleString;
  commentNamePlaceholder: LocaleString;
  commentEmailPlaceholder: LocaleString;
  commentMessagePlaceholder: LocaleString;
  commentSubmitButton: LocaleString;
}

export const blogDetailsConfig: BlogDetailsConfig = {
  title: { el: 'Λεπτομέρειες Άρθρου', en: 'Blog Details' },
  description: { el: 'Διαβάστε το πλήρες άρθρο', en: 'Read the full article' },
  breadcrumbHome: { el: 'Αρχική', en: 'Home' },
  breadcrumbBlog: { el: 'Blog', en: 'Blog' },
  breadcrumbCurrent: { el: 'Άρθρο', en: 'Article' },
  metaAuthor: { el: 'Συγγραφέας', en: 'Author' },
  metaDate: { el: 'Ημερομηνία', en: 'Date' },
  metaCategory: { el: 'Κατηγορία', en: 'Category' },
  metaTags: { el: 'Ετικέτες', en: 'Tags' },
  shareText: { el: 'Μοιραστείτε', en: 'Share' },
  relatedPostsTitle: { el: 'Σχετικά Άρθρα', en: 'Related Posts' },
  commentFormTitle: { el: 'Αφήστε ένα Σχόλιο', en: 'Leave a Comment' },
  commentNamePlaceholder: { el: 'Το όνομά σας', en: 'Your Name' },
  commentEmailPlaceholder: { el: 'Το email σας', en: 'Your Email' },
  commentMessagePlaceholder: { el: 'Το μήνυμά σας', en: 'Your Message' },
  commentSubmitButton: { el: 'Υποβολή Σχολίου', en: 'Submit Comment' }
};

export interface ContactConfig {
  title: LocaleString;
  subtitle: LocaleString;
  description: LocaleString;
  formTitle: LocaleString;
  formSubtitle: LocaleString;
  contactInfo: {
    phone: string;
    email: string;
    address: LocaleString;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const contactConfig: ContactConfig = {
  title: { el: 'Επικοινωνία', en: 'Contact' },
  subtitle: { el: 'Ελάτε σε επαφή μαζί μας', en: 'Get in touch with us' },
  description: { el: 'Είμαστε εδώ για να σας βοηθήσουμε', en: 'We are here to help you' },
  formTitle: { el: 'Στείλτε μας μήνυμα', en: 'Send us a message' },
  formSubtitle: { el: 'Συμπληρώστε τη φόρμα παρακάτω', en: 'Fill out the form below' },
  contactInfo: {
    phone: '+30 123 456 7890',
    email: 'info@example.com',
    address: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' }
  },
  socialLinks: {
    facebook: 'https://facebook.com/example',
    twitter: 'https://twitter.com/example',
    instagram: 'https://instagram.com/example',
    linkedin: 'https://linkedin.com/company/example'
  }
};

export interface IndexConfig {
  hero: {
    title: LocaleString;
    subtitle: LocaleString;
    description: LocaleString;
    cta: {
      primary: LocaleString;
      secondary: LocaleString;
    };
  };
  features: {
    title: LocaleString;
    items: Array<{
      icon: string;
      title: LocaleString;
      description: LocaleString;
    }>;
  };
}

export const indexConfig: IndexConfig = {
  hero: {
    title: { el: 'HAYC', en: 'HAYC' },
    subtitle: { el: 'Καλώς ήρθατε', en: 'Welcome' },
    description: { el: 'Η πλατφόρμα μας για την κοινότητα', en: 'Our platform for the community' },
    cta: {
      primary: { el: 'Ξεκινήστε', en: 'Get Started' },
      secondary: { el: 'Μάθετε περισσότερα', en: 'Learn More' }
    }
  },
  features: {
    title: { el: 'Χαρακτηριστικά', en: 'Features' },
    items: [
      {
        icon: 'star',
        title: { el: 'Ποιότητα', en: 'Quality' },
        description: { el: 'Υψηλή ποιότητα υπηρεσιών', en: 'High quality services' }
      },
      {
        icon: 'users',
        title: { el: 'Κοινότητα', en: 'Community' },
        description: { el: 'Ενεργή κοινότητα μελών', en: 'Active member community' }
      },
      {
        icon: 'shield',
        title: { el: 'Ασφάλεια', en: 'Security' },
        description: { el: 'Ασφαλής πλατφόρμα', en: 'Secure platform' }
      }
    ]
  }
};

export interface ServicesConfig {
  title: LocaleString;
  description: LocaleString;
  services: Array<{
    title: LocaleString;
    description: LocaleString;
    icon: string;
    link?: string;
  }>;
}

export const servicesConfig: ServicesConfig = {
  title: { el: 'Υπηρεσίες', en: 'Services' },
  description: { el: 'Οι υπηρεσίες μας', en: 'Our Services' },
  services: [
    {
      title: { el: 'Υπηρεσία 1', en: 'Service 1' },
      description: { el: 'Περιγραφή υπηρεσίας 1', en: 'Service 1 description' },
      icon: 'icon-1',
      link: '#service-1'
    },
    {
      title: { el: 'Υπηρεσία 2', en: 'Service 2' },
      description: { el: 'Περιγραφή υπηρεσίας 2', en: 'Service 2 description' },
      icon: 'icon-2',
      link: '#service-2'
    },
    {
      title: { el: 'Υπηρεσία 3', en: 'Service 3' },
      description: { el: 'Περιγραφή υπηρεσίας 3', en: 'Service 3 description' },
      icon: 'icon-3',
      link: '#service-3'
    }
  ]
};