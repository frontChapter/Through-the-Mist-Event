export interface CurriculumItem {
  number: string;
  type: string;
  title: string;
  description?: string;
}

export interface HotelItem {
  name: string;
  area: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const EXPERIENCE_DATA = {
  hero: {
    dates: 'September 18 – 19, 2026',
    location: 'New York City',
    venue: 'NYU College of Dentistry',
    title: 'Design x Hand',
    subtitle: 'The first ever hands-on course in cosmetic dentistry led by Dr. Michael Apa.',
    videoUrl: 'https://pub-b1d5e6d1afa5432f955cf147f0f14b20.r2.dev/DxH-hero.mp4',
    deadline: 'Reserve by August 19, 2026',
  },
  mission: {
    quote:
      'Michelangelo did not look at a block of marble and see stone. He saw what was already inside it, waiting to be revealed.',
    author: 'The Apa Philosophy of Smile Design',
    lead:
      'Design by Hand is where the art of smile design is passed on directly. Centered around hand sculpting on models, the program teaches the same precise process Dr. Apa has refined for decades.',
    body:
      'Moving beyond theory, attendees will execute complete workflows from preliminary consultation to final delivery, translating aesthetic intuition into repeatable clinical mastery.',
    pillars: [
      {
        num: 'I',
        title: 'Diagnostic Mockup & Proportions',
        desc: 'Refine direct mockups to achieve ideal facial harmony, contours, and proportions, learning the clinical reasoning behind each millimeter of adjustment.',
      },
      {
        num: 'II',
        title: 'Putty Matrix & Prep-Through-Mockup',
        desc: 'Translate diagnostic wax-ups into functional preparations using putty matrix techniques and prep-through-mockup protocols to preserve tooth structure.',
      },
      {
        num: 'III',
        title: 'Temporary Fabrication & Delivery',
        desc: 'Fabricate LuxaTemp shell provisionals, capture precision impressions, and execute the full cementation protocol through final seating.',
      },
    ],
  },
  dayOne: {
    day: 'Day One',
    date: 'Friday, September 18, 2026',
    time: '9:00 AM – 5:00 PM',
    title: 'Additive Smile Design & Direct Mockup',
    overview:
      'Day One is centered around developing a deep understanding of additive smile design through the lens of Dr. Apa’s complete clinical workflow.',
    curriculum: [
      { number: '01', type: 'Lecture', title: 'Consultation, Case Review & Treatment Planning' },
      { number: '02', type: 'Hands-On', title: 'Direct Mockup on Original Model' },
      { number: '03', type: 'Lab Strategy', title: 'Lab Wax-Up, Lab Communication & Putty Guides' },
      { number: '04', type: 'Clinical', title: 'Putty Matrix Fabrication & Wax-Up Transfer' },
      { number: '05', type: 'Sculpting', title: 'Adjusting the Wax-Up' },
      { number: '06', type: 'Refinement', title: 'Mockup Adjustment' },
      { number: '07', type: 'Technique', title: 'Preparation: Temporaries as the Blueprint' },
      { number: '08', type: 'Hands-On', title: 'Preparation (Through the Mockup)' },
      { number: '09', type: 'Provisional', title: 'Temporary Fabrication (LuxaTemp Shell)' },
      { number: '10', type: 'Clinical', title: 'Mastering Impressions' },
      { number: '11', type: 'Delivery', title: 'Temporary Cementation' },
    ] as CurriculumItem[],
  },
  dayTwo: {
    day: 'Day Two',
    date: 'Saturday, September 19, 2026',
    time: '9:00 AM – 5:00 PM',
    title: 'Combined Additive & Reductive Treatment',
    overview:
      'Day Two advances into combined additive and reductive treatment, where preparation precedes restorative design and every reduction decision is made with purpose.',
    curriculum: [
      { number: '01', type: 'Case Review', title: 'VPO1 & Lab Communication Review' },
      { number: '02', type: 'Lecture', title: 'The Difference in Additive / Reductive' },
      { number: '03', type: 'Preparation', title: 'Advanced Preparation Design' },
      { number: '04', type: 'Hands-On', title: 'Procedural Mockup' },
      { number: '05', type: 'Matrix', title: 'Putty Matrix & Transfer' },
      { number: '06', type: 'Clinical', title: 'Preparation (Additive / Reductive Case)' },
      { number: '07', type: 'Delivery', title: 'Final Cementation Protocol & Veneer Seating' },
    ] as CurriculumItem[],
  },
  hospitality: [
    {
      tag: 'PRE-EVENT',
      title: 'Private Gathering & Studio Tour',
      description:
        'Apa Inner Circle attendees are invited to an intimate private tour of the Apa Aesthetic Suite at NYU followed by an inside look and drinks at the Apa Aesthetic New York Office.',
      image: 'https://framerusercontent.com/images/deKq4QUS91JvHj1mVTvbdf4e38.png',
    },
    {
      tag: 'MEALS & REFRESHMENTS',
      title: 'Curated Dining Experience',
      description:
        'Each day begins at 8:00 AM with a curated welcome breakfast designed to set the tone, followed by thoughtfully catered lunch and scheduled breaks throughout the day with continuous specialty coffee and beverages.',
      image: 'https://framerusercontent.com/images/kwUU1rBWv681HtZLrg68CeCE.png',
    },
    {
      tag: 'AFTER HOURS',
      title: 'Cocktails & Private Dinner',
      description:
        'Close out Day One with cocktails, conversation and curated bites alongside Dr. Apa, fellow attendees, and the Apa Aesthetic New York team. Reserved intimate private dinner for Inner Circle attendees.',
      image: 'https://framerusercontent.com/images/v3RCF0bz9htqXJTGrH2bP6CS2FY.png',
    },
  ],
  passes: [
    {
      id: 'foundation',
      name: 'Foundation Access Pass',
      category: 'DOCTORS & PRACTITIONERS',
      subtitle: 'Designed for doctors focused on mastering the technique.',
      price: '$10k',
      currency: 'USD',
      features: [
        'Full two-day hands-on course including all materials',
        'Breakfast, lunch, all-day beverages and catered breaks',
        'Day One evening reception with Dr. Apa and all attendees',
        'Exclusive Apa clinical materials kit to bring home',
        'Hand-signed course completion certificate and ADA CERP CE credits',
      ],
      ctaText: 'Claim your seat',
      isSoldOut: false,
    },
    {
      id: 'inner-circle',
      name: 'Inner Circle Access Pass',
      category: 'DIRECT MENTORSHIP & ELEVATED EXPERIENCE',
      subtitle:
        'Reserved for a limited group seeking direct access, mentorship, and elevated experiences with Dr. Michael Apa.',
      price: '$15k',
      currency: 'USD',
      isPopular: true,
      features: [
        'Includes everything in Foundation Access, plus:',
        'Private pre-event gathering at Apa Aesthetic New York',
        'Priority seating in closest seats at the course',
        'Custom embroidered doctor’s jacket by L’Atelier Forte',
        'Personalized post-course content package',
        'Intimate private dinner with Dr. Apa + Inner Circle attendees',
      ],
      ctaText: 'Sold Out',
      isSoldOut: true,
    },
  ],
  location: {
    city: 'Manhattan, New York City',
    venue: 'NYU College of Dentistry',
    address: '345 E 24th St, New York, NY 10010',
    area: 'Gramercy / Kips Bay',
    hotels: [
      { name: 'The Ned NoMad', area: 'NoMad', url: 'https://www.thened.com/nomad' },
      { name: 'The New York EDITION', area: 'Flatiron District', url: 'https://www.editionhotels.com/new-york/' },
      { name: 'The Marmara Park Avenue', area: 'Murray Hill', url: 'https://park.marmaranyc.com/' },
      { name: 'The Langham', area: 'Fifth Avenue', url: 'https://www.langhamhotels.com/en/the-langham/new-york/' },
    ] as HotelItem[],
  },
  faqs: [
    {
      question: 'Will CE be offered for this course?',
      answer:
        'Yes. Design by Hand is an ADA CERP recognized provider. Attendees will receive 16 continuing education credits upon completion of the full two-day course.',
    },
    {
      question: 'What do I need to bring?',
      answer:
        'All instruments, models, handpieces, restorative materials, and loupe lights will be provided at your dedicated hands-on bench. You only need to bring your personal dental loupes.',
    },
    {
      question: 'Will meals be included?',
      answer:
        'Yes. Continuous breakfast, catered lunch, snacks, espresso, and evening reception drinks are included for all attendees across both days.',
    },
    {
      question: 'Will you cater to dietary restrictions?',
      answer:
        'Yes. Vegetarian, vegan, kosher-friendly, and gluten-free dietary options will be accommodated with advance notice during registration.',
    },
    {
      question: 'What is the dress code?',
      answer:
        'Business casual attire is recommended for daytime course lectures and hands-on laboratory sessions. Evening receptions are smart casual / cocktail.',
    },
    {
      question: 'Do you offer Visa Support Letters for international attendees?',
      answer:
        'Yes. Upon completed registration, our concierge team can issue a formal letter of invitation to support your United States visa application.',
    },
  ] as FaqItem[],
};
