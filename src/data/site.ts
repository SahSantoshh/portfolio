export const site = {
  name: "Santosh Prasad Sah",
  title: "Senior Ruby on Rails Engineer",
  tagline:
    "A decade crafting production Rails applications — from APIs and background jobs to Hotwire frontends and Kamal deployments.",
  location: "Kathmandu, Nepal",
  email: "sahsantoshh@gmail.com",
  phone: "+977 9808468833",
  summary:
    "Senior Software Engineer with a decade of Ruby and Rails experience designing, building, and scaling web applications. I specialize in Rails backends, PostgreSQL performance, system optimization, and shipping reliable software with RSpec, Docker, and Kamal — while leading teams and collaborating closely with stakeholders.",
  resumeUrl: "/Santosh-Prasad-Sah-CV.pdf",
  photos: {
    profile: "/images/santosh-profile.jpg",
    travel: "/images/santosh-travel.jpg",
  },
  primaryStack: ["Ruby", "Ruby on Rails", "PostgreSQL", "Hotwire", "Docker", "Kamal", "RSpec"],
  social: {
    github: "https://github.com/SahSantoshh",
    linkedin: "https://linkedin.com/in/sahsantoshh",
    medium: "https://medium.com/@sahsantoshh",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const projects = [
  {
    name: "Kharcha Diary",
    tagline: "Rails API + Flutter — personal finance on web & Android",
    description:
      "A full-featured expense tracker I built end to end with Ruby on Rails on the backend and Flutter on mobile. Multi-currency accounts, bill splitting, recurring payments, and lend & borrow tracking — ad-free, synced across web and Android.",
    url: "https://kharchadiary.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sahsantoshh.kharchha",
    icon: "/projects/kharcha-diary/app_icon_transparent.png",
    playStoreIcon: "/projects/kharcha-diary/google-play.svg",
    stack: ["Ruby on Rails", "Flutter", "PostgreSQL", "Hotwire", "Docker", "Android"],
    highlights: [
      "Multi-currency accounts with per-currency totals (NPR, USD, EUR, and more)",
      "Shared groups for bill splitting and simplified settlement plans",
      "Recurring expenses, smart analytics, and privacy mode",
      "Cross-device sync with 2FA and biometric authentication",
    ],
    featured: true,
  },
];

export const openSource = [
  {
    name: "access_grant",
    description:
      "Dynamic, database-backed, per-tenant roles and permissions for Rails — permission catalog in code, role mapping editable at runtime. Published on RubyGems.",
    url: "https://github.com/SahSantoshh/access_grant",
    gemUrl: "https://rubygems.org/gems/access_grant",
    language: "Ruby",
    stars: 0,
    topics: ["rails", "authorization", "rbac", "multi-tenant"],
  },
  {
    name: "ror_salesforce_integration",
    description:
      "Starter template for Salesforce Streaming API integration with Ruby on Rails — real-time account and contact sync using Restforce.",
    url: "https://github.com/SahSantoshh/ror_salesforce_integration",
    language: "Ruby",
    stars: 0,
    topics: ["ruby", "rails", "salesforce", "restforce"],
  },
  {
    name: "yaniv",
    description:
      "Card game implementation in Flutter — multiplayer-ready UI with game state management and smooth animations.",
    url: "https://github.com/SahSantoshh/yaniv",
    language: "Dart",
    stars: 0,
    topics: ["flutter", "dart", "game"],
  },
  {
    name: "RubyLlmPoc",
    description:
      "Proof of concept integrating large language models with Ruby on Rails — exploring AI-assisted features in production Rails apps.",
    url: "https://github.com/SahSantoshh/RubyLlmPoc",
    language: "Ruby",
    stars: 0,
    topics: ["ruby", "rails", "llm", "ai"],
  },
];

export const contributions = [
  {
    name: "avo",
    upstream: "avo-hq/avo",
    upstreamUrl: "https://github.com/avo-hq/avo",
    description:
      "Contributions to Avo — a Ruby on Rails admin framework for building internal tools and CRUD panels quickly.",
    url: "https://github.com/SahSantoshh/avo",
    language: "Ruby",
    topics: ["ruby", "rails", "avo", "admin"],
  },
  {
    name: "docs.avohq.io",
    upstream: "avo-hq/docs.avohq.io",
    upstreamUrl: "https://github.com/avo-hq/docs.avohq.io",
    description:
      "Documentation site for Avo — guides, API references, and examples for the Rails admin framework.",
    url: "https://github.com/SahSantoshh/docs.avohq.io",
    language: "Ruby",
    topics: ["ruby", "rails", "documentation"],
  },
  {
    name: "flutter_pulltorefresh",
    upstream: "peng8350/flutter_pulltorefresh",
    upstreamUrl: "https://github.com/peng8350/flutter_pulltorefresh",
    description:
      "Pull-to-refresh and load-more widget for Flutter scroll views — used in mobile apps with list-heavy UIs.",
    url: "https://github.com/SahSantoshh/flutter_pulltorefresh",
    language: "Flutter",
    topics: ["flutter", "dart", "mobile"],
  },
  {
    name: "colorize-text-avatar",
    upstream: "deniscolak/colorize-text-avatar",
    upstreamUrl: "https://github.com/deniscolak/colorize-text-avatar",
    description:
      "Flutter plugin for generating colorful text avatars — handy for user profiles without profile photos.",
    url: "https://github.com/SahSantoshh/colorize-text-avatar",
    language: "Flutter",
    topics: ["flutter", "dart", "ui"],
  },
];

export const skillGroups = [
  {
    title: "Ruby ecosystem",
    items: ["Ruby", "Ruby on Rails", "Sinatra", "RSpec", "Hotwire", "Sidekiq"],
  },
  {
    title: "Frontend & mobile",
    items: ["JavaScript", "TypeScript", "React", "Flutter", "Dart", "HTML5", "CSS3"],
  },
  {
    title: "Data & cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS", "GraphQL"],
  },
  {
    title: "DevOps & tooling",
    items: ["Docker", "Kamal", "Git", "RabbitMQ", "NestJS", "Node.js"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "InAllMedia",
    period: "Nov 2021 — Present",
    highlights: [
      "Enhanced application performance by 20% through caching, tech stack upgrades, and optimizations.",
      "Improved team collaboration by streamlining internal processes and documenting guidelines.",
      "Delivered enterprise-level solutions by identifying and resolving technical bottlenecks.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Leapfrog Technology",
    period: "Jan 2021 — Nov 2021",
    highlights: [
      "Designed, built, and maintained high-performance, reusable software for enterprise applications.",
      "Contributed to system improvements, defining software design patterns and best practices.",
      "Collaborated with customers to prioritize feature enhancements and resolve technical challenges.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Gurzu Inc / Jyaasa Technologies",
    period: "Feb 2019 — Jan 2021",
    highlights: [
      "Led technical approaches for multiple enterprise applications with on-time delivery.",
      "Designed and maintained scalable software systems while implementing process improvements.",
      "Mentored junior developers and conducted knowledge-sharing sessions.",
    ],
  },
  {
    role: "Android Developer",
    company: "Kathmandu University — ILP Research Lab",
    period: "Mar 2018 — Dec 2019",
    highlights: [
      "Designed and implemented solutions for research-based Android applications.",
      "Collaborated with customers to prioritize features and deployed updates to the Play Store.",
    ],
  },
  {
    role: "Software Engineer (Freelance)",
    company: "Independent",
    period: "Jul 2017 — Mar 2021",
    highlights: [
      "Designed and developed reliable software solutions with high client satisfaction.",
      "Built multiple mobile applications using Flutter.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bajra Technologies",
    period: "May 2016 — Jul 2017",
    highlights: [
      "Delivered software solutions using established design patterns and industry standards.",
      "Led identification and resolution of technical issues for smooth project execution.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Computer Science and Information Technology",
  school: "Academia International College, Tribhuvan University",
  period: "2013 — 2018",
};

export const achievements = [
  "Winner, Hack-Ed 2020 — Hackathon on enhancing education in Nepal (Leapfrog Technology)",
];

export const focusAreas = [
  {
    title: "Rails backends",
    description: "Models, services, APIs, and background jobs — built for clarity, testability, and scale.",
    icon: "Ruby on Rails",
  },
  {
    title: "Hotwire & frontends",
    description: "Turbo and Stimulus for snappy Rails UIs, plus React and Flutter when the product calls for it.",
    icon: "Hotwire",
  },
  {
    title: "PostgreSQL & performance",
    description: "Query tuning, caching, indexing, and profiling — turning slow apps into fast ones.",
    icon: "PostgreSQL",
  },
  {
    title: "Deploy with Kamal",
    description: "Dockerized Rails apps, zero-downtime deploys, and multi-server production setups.",
    icon: "Kamal",
  },
];
