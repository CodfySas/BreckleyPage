export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export interface Content {
  navigation: NavigationItem[];
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    admissionsButton: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    values: Array<{
      title: string;
      description: string;
    }>;
  };
  academics: {
    title: string;
    subtitle: string;
    programs: Array<{
      title: string;
      description: string;
      ages: string;
    }>;
  };
  admissions: {
    title: string;
    subtitle: string;
    process: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    requirements: {
      title: string;
      items: string[];
    };
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
  };
  history: {
    title: string;
    subtitle: string;
    description: string;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  mission: {
    title: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: Array<{
      title: string;
      description: string;
    }>;
  };
  staff: {
    title: string;
    subtitle: string;
    directors: Array<{
      name: string;
      position: string;
      description: string;
      image: string;
    }>;
  };
  programs: {
    title: string;
    subtitle: string;
    specialPrograms: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
  activities: {
    title: string;
    subtitle: string;
    categories: Array<{
      title: string;
      description: string;
      activities: string[];
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: Array<{
      title: string;
      images: Array<{
        url: string;
        caption: string;
      }>;
    }>;
  };
}

export interface TestimonialType {
  name: string;
  role: string;
  content: string;
  image: string;
}