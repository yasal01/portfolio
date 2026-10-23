export const site = {
  name: 'Yasal',
  role: 'UI/UX Designer & Website Developer',
  email: 'yasalshabbir05@gmail.com',
  instagram: 'https://www.instagram.com/yasaall__/',
  location: 'Pakistan',
  availability: 'Open to UI/UX, product design, and frontend roles',
  tagline: 'I design thoughtful digital experiences and build websites that feel as considered as they look.',
  heroLead:
    'UI/UX design and website development for brands that want clarity, warmth, and craft — from first impression to final interaction.',
  about: [
    "I'm Yasal — a designer and website developer who cares about how something feels as much as how it looks. I work across interface design and frontend implementation, so the layout, type, colour, and interaction stay coherent from sketch to shipped site.",
    'Alongside personal and concept work, I’ve collaborated with marketing agencies on website design and development. Soft Glow Oil, NOIREL, and SoCutesy are examples of websites I’ve designed and built — each one teaching me something different about hierarchy, responsiveness, and keeping personality without noise.',
  ],
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const

export const experience = [
  {
    id: 'agency-websites',
    title: 'Website Designer & Developer',
    context: 'Marketing Agency Projects',
    summary:
      'Worked with marketing agencies to design and build websites, focusing on thoughtful UI/UX, visual consistency, responsive layouts, and polished digital experiences aligned with each agency’s needs.',
    points: [
      'Designing interfaces with clear hierarchy and brand-aligned visuals',
      'Building responsive website layouts that hold up on phone and desktop',
      'Collaborating on websites for agency-driven client and brand work',
      'Carrying projects from visual direction through frontend implementation',
    ],
  },
] as const

export const expertise = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    summary:
      'Interface structure, visual hierarchy, and interaction design that make a product feel clear and intentional.',
    points: [
      'Information hierarchy and layout systems',
      'Typography, colour, and spacing decisions',
      'Navigation patterns and user flows',
      'Responsive compositions for phone and desktop',
      'Editorial and brand-led visual direction',
    ],
  },
  {
    id: 'webdev',
    title: 'Website Development',
    summary:
      'Frontend implementation with reusable components, responsive layouts, and interactions that hold up in the browser.',
    points: [
      'React and Next.js application structure',
      'Component-based UI and routing',
      'Responsive CSS and design-system tokens',
      'Interactive elements: carts, drawers, scroll scenes',
      'Debugging, refinement, and deploy-ready builds',
    ],
  },
] as const

export const skills = {
  'UI/UX & Interface Design': [
    'Visual hierarchy',
    'Layout systems',
    'Typography',
    'Colour & spacing',
    'Navigation design',
    'Responsive composition',
  ],
  'Website Development': [
    'React',
    'Next.js',
    'Vite',
    'TypeScript',
    'JavaScript',
    'Component architecture',
  ],
  'Responsive Design': [
    'Mobile-first layouts',
    'Fluid grids',
    'Accessible contrast',
    'Touch-friendly UI',
  ],
  'Design Craft': [
    'Brand-led visual systems',
    'Editorial composition',
    'Interaction design',
    'Art direction for web',
  ],
  'Frontend Technologies': [
    'HTML & CSS',
    'Tailwind CSS',
    'GSAP',
    'Framer Motion',
    'React Router',
    'Lenis',
  ],
} as const
