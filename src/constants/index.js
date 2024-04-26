import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  csharp,
  nodejs,
  git,
  docker,
  postgresql,
  rubyrails,
  graphql,
  brutalBudget,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  codeImmersives,
  persevere,
  bitpay,
  savvySpace
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'csharp',
    icon: csharp
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'MERN stack Coding Instructor',
    company_name: 'Persevere',
    icon: persevere,
    iconBg: '#333333',
    date: 'Jul 2023 - Present',
  },
  {
    title: 'Node.js Developer',
    company_name: 'Bitpay',
    icon: bitpay,
    iconBg: '#333333',
    date: 'Mar 2022 - Dec 2022',
  },
  {
    title: 'Coding Immersive Student',
    company_name: 'Code Immersives',
    icon: codeImmersives,
    iconBg: '#333333',
    date: 'Jan 2021 - Dec 2021',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Brutal Budget',
    description: 'A full stack budgeting application utilizing the MERN stack with authorizations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: brutalBudget,
    repo: 'https://github.com/kylexrose/brutal-budget-frontend',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Savvy Space',
    description:
      'A full stack Learning Management System utilizing .NET core and SQL in the backend and React.js Frontend.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: savvySpace,
    repo: 'https://github.com/kylexrose/savvy-space-frontend',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
