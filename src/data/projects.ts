export type Contribution = 'design' | 'development' | 'both'

export type Project = {
  slug: string
  title: string
  eyebrow: string
  contribution: Contribution
  contributionLabel: string
  summary: string
  overview: string
  objective: string
  problem: string
  role: string[]
  focus: string[]
  tech: string[]
  highlights: string[]
  decisions: { title: string; text: string }[]
  learned: string
  liveUrl?: string
  liveNote?: string
  cover: string
  coverAlt: string
  gallery: { src: string; alt: string; caption?: string }[]
  accent: 'blush' | 'lilac' | 'lavender' | 'ink'
  featured: boolean
  composition: 'full' | 'split' | 'editorial'
}

export const projects: Project[] = [
  {
    slug: 'soft-glow-oil',
    title: 'Soft Glow Oil',
    eyebrow: 'Haircare · Brand storefront',
    contribution: 'both',
    contributionLabel: 'Designed & developed',
    summary:
      'A warm, shoppable brand website for a handcrafted hair oil — from homepage story to product detail and cart.',
    overview:
      'Soft Glow Oil needed a digital home that feels as gentle as the product: soft cream tones, clear hierarchy, and a simple path from discovery to purchase.',
    objective:
      'Design and build a responsive brand storefront with product storytelling, ingredients, reviews, FAQ, and a lightweight shopping flow.',
    problem:
      'The brand had strong product photography and a soft visual identity, but needed a website that turned that mood into a clear, usable shopping experience without feeling template-like.',
    role: [
      'UI design',
      'Website development',
      'Responsive layout',
      'Product & cart experience',
    ],
    focus: [
      'Brand-led visual system',
      'Product hierarchy',
      'Shop flow',
      'Responsive components',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Warm cream and clay palette with serif display + sans body typography',
      'Section order planned for scanning: hero, product, ingredients, story, reviews, FAQ',
      'Product detail with purchase panel and cart drawer',
      'Reusable components for header, accordion, ratings, and fade-in sections',
    ],
    decisions: [
      {
        title: 'Story before checkout pressure',
        text: 'The homepage leads with atmosphere and product benefit, then ingredients and social proof, so shoppers understand the ritual before they buy.',
      },
      {
        title: 'Soft but readable type',
        text: 'Cormorant Garamond for headlines and DM Sans for body keep the brand feminine without sacrificing contrast or scanability.',
      },
      {
        title: 'Cart as a drawer, not a dead end',
        text: 'A side cart lets people review packs without leaving the page — useful on a single-product brand site.',
      },
    ],
    learned:
      'A single-product site still needs strong information architecture. Warm aesthetics only work when buttons, prices, and navigation stay unmistakably clear.',
    liveUrl: 'https://soft-glow-oil.vercel.app/',
    cover: '/projects/soft-glow-oil/homepage.jpg',
    coverAlt: 'Soft Glow Oil homepage with warm cream hero and brand headline',
    gallery: [
      {
        src: '/projects/soft-glow-oil/homepage.jpg',
        alt: 'Soft Glow Oil homepage screenshot',
        caption: 'Homepage',
      },
      {
        src: '/projects/soft-glow-oil/product.jpg',
        alt: 'Soft Glow Oil product bottle photography',
        caption: 'Product photography',
      },
      {
        src: '/projects/soft-glow-oil/detail.jpg',
        alt: 'Soft Glow Oil bottle product photography used on the site',
        caption: 'Product photography',
      },
      {
        src: '/projects/soft-glow-oil/ingredients.jpg',
        alt: 'Natural ingredients used in Soft Glow Oil',
        caption: 'Ingredients story',
      },
      {
        src: '/projects/soft-glow-oil/lifestyle.jpg',
        alt: 'Lifestyle imagery for Soft Glow Oil',
        caption: 'Brand atmosphere',
      },
    ],
    accent: 'blush',
    featured: true,
    composition: 'full',
  },
  {
    slug: 'noirel',
    title: 'NOIREL',
    eyebrow: 'Fashion · Editorial concept',
    contribution: 'both',
    contributionLabel: 'Designed & developed',
    summary:
      'A scroll-driven editorial website for a fictional black-on-black fashion label — cinematic chapters, brutalist frames, and film-led browsing.',
    overview:
      'NOIREL is a portfolio concept for a fashion label world: charcoal, graphite, and silver, with scroll choreography that feels closer to a campaign film than a catalogue.',
    objective:
      'Build a complete fashion-label presence online with dark editorial UI, chapter navigation, and a film-like path through the brand.',
    problem:
      'A conventional product grid would flatten the mood. The site needed orientation tools for a long scroll while protecting the cinematic first impression.',
    role: [
      'Concept & art direction',
      'UI/UX design',
      'Website development',
      'Scroll choreography',
    ],
    focus: [
      'Editorial hierarchy',
      'Scroll experience',
      'Chapter navigation',
      'Motion & atmosphere',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Lenis'],
    highlights: [
      'Dark monochrome UI with strong display/utility type contrast',
      'Chapter rail and section cues for long-form orientation',
      'GSAP ScrollTrigger + Lenis for film-like scroll scenes',
      'Custom media components for editorial frames and video',
    ],
    decisions: [
      {
        title: 'Chapters instead of a flat page',
        text: 'A chapter rail keeps visitors oriented through Intro, Collection, Architecture, Film, and Final without interrupting the immersive layout.',
      },
      {
        title: 'Motion as pacing, not decoration',
        text: 'Scroll-linked reveals and transitions support the brand story. Reduced-motion preferences turn scroll-driven motion off.',
      },
      {
        title: 'Restraint in colour',
        text: 'Limiting the palette to black, charcoal, graphite, and soft white makes typography and imagery carry the personality.',
      },
    ],
    learned:
      'Immersive sites still need wayfinding. Without a chapter system, cinematic scrolling becomes disorienting rather than premium.',
    liveUrl: 'https://noirel-aura.vercel.app/',
    cover: '/projects/noirel/homepage.jpg',
    coverAlt: 'NOIREL dark editorial homepage with cinematic fashion framing',
    gallery: [
      {
        src: '/projects/noirel/homepage.jpg',
        alt: 'NOIREL website homepage screenshot',
        caption: 'Homepage',
      },
      {
        src: '/projects/noirel/fashion.jpg',
        alt: 'NOIREL fashion campaign still',
        caption: 'Campaign imagery',
      },
      {
        src: '/projects/noirel/architecture.jpg',
        alt: 'Brutalist architecture scene used in NOIREL',
        caption: 'Architecture chapter',
      },
      {
        src: '/projects/noirel/final.jpg',
        alt: 'Closing editorial frame from NOIREL',
        caption: 'Final chapter',
      },
    ],
    accent: 'ink',
    featured: true,
    composition: 'split',
  },
  {
    slug: 'socutesy',
    title: 'SoCutesy',
    eyebrow: 'E-commerce · Gift shop',
    contribution: 'both',
    contributionLabel: 'UI/UX & frontend',
    summary:
      'A soft boutique storefront for Polaroid-style gifts — product browsing, customisation paths, and a friendly multi-step order flow.',
    overview:
      'SoCutesy is a gift shop experience built around personalised keepsakes. The frontend focuses on clear browsing, product detail, and a guided checkout path.',
    objective:
      'Ship a responsive React shop that makes browsing gifts and moving through ordering feel simple while keeping a light, personal brand personality.',
    problem:
      'Custom gift products need more than a standard add-to-cart. The interface has to explain product options, photo upload, and customer details without feeling heavy.',
    role: [
      'UI/UX design',
      'Frontend development',
      'Responsive shop layouts',
      'Product & order flows',
    ],
    focus: [
      'Shop browsing',
      'Multi-step flows',
      'Soft brand UI',
      'Component consistency',
    ],
    tech: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    highlights: [
      'Pastel boutique UI with clear hero, categories, and shop CTAs',
      'Routed product detail and checkout steps',
      'Cart context and order-flow state across pages',
      'Reusable cards, forms, and shop header components',
    ],
    decisions: [
      {
        title: 'Route the order journey',
        text: 'Separate pages for product, customer details, payment, and upload keep each step focused instead of packing everything into one modal.',
      },
      {
        title: 'Soft personality, clear controls',
        text: 'Pastel colour and gift imagery carry the brand, while prices, CTAs, and form fields stay high-contrast and obvious.',
      },
      {
        title: 'Shared shop shell',
        text: 'A persistent header and shared cart context keep orientation stable as people move between browse and checkout.',
      },
    ],
    learned:
      'Multi-step commerce flows benefit from explicit routes and shared state. Soft branding only works when the next action is always obvious.',
    liveUrl: 'https://socutesy.vercel.app/',
    liveNote:
      'Frontend is deployed on Vercel. Full order/admin features also use a separate API deployment when connected.',
    cover: '/projects/socutesy/homepage.jpg',
    coverAlt: 'SoCutesy gift shop homepage with soft pastel UI',
    gallery: [
      {
        src: '/projects/socutesy/homepage.jpg',
        alt: 'SoCutesy homepage screenshot',
        caption: 'Homepage',
      },
      {
        src: '/projects/socutesy/hero.jpg',
        alt: 'SoCutesy hero gift imagery',
        caption: 'Hero atmosphere',
      },
      {
        src: '/projects/socutesy/product.jpg',
        alt: 'SoCutesy product presentation',
        caption: 'Product presentation',
      },
      {
        src: '/projects/socutesy/magazine.png',
        alt: 'SoCutesy magazine-style visual',
        caption: 'Brand visual',
      },
    ],
    accent: 'lilac',
    featured: true,
    composition: 'editorial',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
