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
  githubUrl?: string
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
  {
    slug: 'mellow-studio',
    title: 'Mellow Studio',
    eyebrow: 'Creative agency · Brand site',
    contribution: 'both',
    contributionLabel: 'Designed & developed',
    summary:
      'A playful pastel website for an independent creative studio — brand identity, web design, and campaign storytelling in one scroll.',
    overview:
      'Mellow Studio needed a digital home that feels warm and intentional: soft gradients, clear services, selected concept work, and a calm path to contact.',
    objective:
      'Design and build a responsive agency marketing site with hero, services, selected work, about, process, and contact sections.',
    problem:
      'A creative studio site can tip into decoration. This project needed personality without losing hierarchy, scanability, or mobile clarity.',
    role: [
      'UI/UX design',
      'Website development',
      'Visual identity for the site',
      'Responsive layout',
    ],
    focus: [
      'Agency storytelling',
      'Pastel visual system',
      'Selected work grid',
      'Smooth section navigation',
    ],
    tech: ['Vite', 'React', 'CSS'],
    highlights: [
      'Floating navbar with services, work, about, process, and contact anchors',
      'Hero with floating brand/web/campaign cards and clear CTAs',
      'Services, selected work, about, creative process, and contact sections',
      'Hover interactions with prefers-reduced-motion support',
    ],
    decisions: [
      {
        title: 'Warmth without clutter',
        text: 'Soft pastel glows and floating cards carry personality while type hierarchy and section order keep the page easy to scan.',
      },
      {
        title: 'Concept work, labelled honestly',
        text: 'Selected work entries are marked as concept projects so the portfolio stays clear about what is illustrative.',
      },
      {
        title: 'One continuous story',
        text: 'Services → work → about → process → contact mirrors how a studio conversation usually unfolds.',
      },
    ],
    learned:
      'Playful agency sites work best when motion and colour support the content hierarchy instead of competing with it.',
    githubUrl: 'https://github.com/yasal01/mellow-studio',
    liveNote:
      'Source and local build match the GitHub repo. The Vercel project at mellow-studio.vercel.app currently serves a different link-in-bio page, so no matching live URL is linked here.',
    cover: '/projects/mellow-studio/homepage.jpg',
    coverAlt: 'Mellow Studio creative agency homepage with pastel hero and floating project cards',
    gallery: [
      {
        src: '/projects/mellow-studio/homepage.jpg',
        alt: 'Mellow Studio homepage screenshot',
        caption: 'Homepage',
      },
      {
        src: '/projects/mellow-studio/about.jpg',
        alt: 'Mellow Studio about imagery',
        caption: 'Studio atmosphere',
      },
      {
        src: '/projects/mellow-studio/service-web.jpg',
        alt: 'Website development service visual from Mellow Studio',
        caption: 'Services imagery',
      },
      {
        src: '/projects/mellow-studio/work-sample.jpg',
        alt: 'Selected work sample visual from Mellow Studio',
        caption: 'Selected work mood',
      },
    ],
    accent: 'lavender',
    featured: true,
    composition: 'editorial',
  },
  {
    slug: 'hotel-website',
    title: 'Hotel Website',
    eyebrow: 'Hospitality · Marketing site',
    contribution: 'both',
    contributionLabel: 'Designed & developed',
    summary:
      'A hospitality marketing website with room listings, gallery, reviews, FAQs, and a reservation enquiry flow.',
    overview:
      'A hotel-style landing site focused on first impression and browsing: hero slider, availability form, rooms, amenities, gallery, reviews, FAQ, and book-now calls to action.',
    objective:
      'Build a clear, sectioned hotel marketing page that helps visitors scan rooms and amenities and start a booking enquiry.',
    problem:
      'Hospitality sites need strong imagery and obvious next steps. The interface organises rooms, services, social proof, and reservation fields into a single scrollable journey.',
    role: [
      'UI design',
      'Website development',
      'Section layout & content structure',
      'Interactive slider & forms',
    ],
    focus: [
      'Hospitality UI',
      'Room browsing',
      'Reservation enquiry',
      'Responsive sections',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'],
    highlights: [
      'Hero image slider with visit-offer CTAs',
      'Check-in / check-out availability form',
      'Exclusive room cards, amenities, gallery, reviews, and FAQ accordion',
      'Persistent book-now actions in the header and reservation section',
    ],
    decisions: [
      {
        title: 'Sections visitors expect',
        text: 'Home, about, rooms, gallery, reviews, FAQ, and reservation follow a familiar hospitality path so the site feels immediately usable.',
      },
      {
        title: 'Book now stays visible',
        text: 'Primary booking CTAs appear in the header and again near reservation fields to keep the next step obvious.',
      },
      {
        title: 'Slider for atmosphere',
        text: 'A Swiper hero carousel carries the mood of the stay before visitors dive into rooms and amenities.',
      },
    ],
    learned:
      'Hotel marketing pages depend on imagery and clear enquiry paths — when media assets fail to load, the layout still has to keep CTAs and structure readable.',
    liveUrl: 'https://hotelwebsite.vercel.app/',
    liveNote:
      'Live HTML/CSS/JS hotel marketing site. Some image assets on the deploy currently fail to load; structure, navigation, and booking CTAs remain intact. The GitHub repo named hotelwebsite currently holds a different project (Atelier Nouve).',
    cover: '/projects/hotel-website/homepage.jpg',
    coverAlt: 'Hotel Website rooms section with book-now actions',
    gallery: [
      {
        src: '/projects/hotel-website/homepage.jpg',
        alt: 'Hotel Website rooms section screenshot',
        caption: 'Rooms section',
      },
      {
        src: '/projects/hotel-website/section.jpg',
        alt: 'Hotel Website mid-page section screenshot',
        caption: 'Page sections',
      },
    ],
    accent: 'ink',
    featured: true,
    composition: 'full',
  },
  {
    slug: 'atelier-nouve',
    title: 'Atelier Nouve',
    eyebrow: 'Interior design · Brand site',
    contribution: 'both',
    contributionLabel: 'Designed & developed',
    summary:
      'A luxury interior-design studio website for a fictional practice — residential storytelling, services, materials, and project case pages in React.',
    overview:
      'Atelier Nouve is a concept brand site for an interior design studio: calm typography, full-bleed photography, and a clear path from hero through projects, studio, services, and contact.',
    objective:
      'Design and build a responsive studio marketing site with routed project detail pages and a considered residential mood.',
    problem:
      'Interior brand sites can tip into decoration. This project needed strong imagery and hierarchy without losing scanability or mobile clarity.',
    role: [
      'UI/UX design',
      'Website development',
      'Content structure',
      'Project detail pages',
    ],
    focus: [
      'Studio brand storytelling',
      'Project case layouts',
      'Material & service sections',
      'Responsive composition',
    ],
    tech: ['Vite', 'React', 'React Router', 'CSS'],
    highlights: [
      'Full-bleed hero with studio positioning and dual CTAs',
      'Featured residential concept projects with detail routes',
      'Services, process, materials, studio intro, and contact sections',
      'Illustrative Unsplash photography labelled as concept work in the project README',
    ],
    decisions: [
      {
        title: 'Photography carries the brand',
        text: 'Large interior imagery leads the narrative while type and navigation stay quiet enough to stay readable over media.',
      },
      {
        title: 'Projects as routes',
        text: 'Individual project pages keep case stories focused instead of packing every residential concept into one long scroll.',
      },
      {
        title: 'Honest concept labelling',
        text: 'Project names and locations are illustrative concepts — the README notes Unsplash imagery is for demonstration, not real client commissions.',
      },
    ],
    learned:
      'Luxury studio sites work best when media quality and spacing do the heavy lifting — UI chrome should stay minimal so rooms and materials feel primary.',
    githubUrl: 'https://github.com/yasal01/hotelwebsite',
    liveNote:
      'Source lives in the hotelwebsite GitHub repository (package name atelier-nouve). No separate matching live deploy is linked here.',
    cover: '/projects/atelier-nouve/homepage.jpg',
    coverAlt: 'Atelier Nouve hero with interior photography and studio headline',
    gallery: [
      {
        src: '/projects/atelier-nouve/homepage.jpg',
        alt: 'Atelier Nouve homepage hero screenshot',
        caption: 'Homepage hero',
      },
      {
        src: '/projects/atelier-nouve/section.jpg',
        alt: 'Atelier Nouve mid-page section screenshot',
        caption: 'Studio sections',
      },
      {
        src: '/projects/atelier-nouve/services.jpg',
        alt: 'Atelier Nouve services or materials section screenshot',
        caption: 'Services & materials',
      },
    ],
    accent: 'lavender',
    featured: true,
    composition: 'editorial',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
