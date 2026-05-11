// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Aelex-1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AFC Official Website',
          description:
            'This is the official website of Arthurs Fried Chicken. Currently under approval from the client. Will be live soon.',
          imageUrl:
            '/src/assets/images/afc-webpage-preview.png', // Can be a local image or a remote image. (Remote images must be hosted with HTTPS)
          link: 'https://afc-website-bice.vercel.app/',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Aelex Aquino', description: '', imageURL: '' },
  social: {
    linkedin: 'www.linkedin.com/in/aelex-aquino',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'aelexaquino@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1_15iI7uUPoGqiSniIhJ33WwLrGtSDQNS/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Arthurs Fried Chicken',
      position: 'Web Developer | Social Media Manager',
      from: '2023',
      to: 'Present',
      companyLink: 'https://afc-website-bice.vercel.app/',
    },
    {
      company: 'R3hub Technologies Inc.',
      position: 'Network Engineer Intern',
      from: 'October 2025',
      to: 'December 2025',
      companyLink: 'http://r3hub.net/',
    },
  ],
  certifications: [
    {
      name: 'Complete Javascript Course 2021: From Zero to Expert!',
      body: 'Udemy: Jonas Schmedtmann',
      year: 'February 2026',
      link: 'https://www.udemy.com/certificate/UC-0707db97-01de-47ad-8194-39b948c2689c/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
    },
  ],
  educations: [
    {
      institution: 'University of Mindanao - Main Campus',
      degree: 'Bachelor of Science in Computer Engineering',
      from: '2020',
      to: '2025',
    }
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Currently under development.`,

  enablePWA: true,
  
};

export default CONFIG;
