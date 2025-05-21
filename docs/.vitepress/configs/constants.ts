import type { DefaultTheme } from 'vitepress'
import { x } from 'tinyexec'

export const hostname: string = 'https://labhub.io'
export const excludedFiles = ['t.md']
export const GIT_COMMIT =
  /** Github actions commit hash */
  process.env.GITHUB_SHA ??
  /** Commit hash from git */
  (await x('git', ['rev-parse', 'HEAD']).then((result) =>
    result.stdout.trim()
  )) ??
  'dev'

// @unocss-include
export const nav: DefaultTheme.NavItem[] = [
{
  text: '🔥 UX-Level Architecture',
  items: [
    {
      text: '✨ Digital Awakening',
      items: [
        { text: '📜 Manifesto & How to Use', link: 'qs' },
        { text: '⚡ Digital Awakening Guides ', link: 'guides' }
      ]
    },
    {
      text: '🗺️ Cartographer',
      items: [
        { text: '🧭 Open Indexers & Link Archives', link: 'open' },
        { text: '📊 Data Mapping & Visualization', link: 'data' },
        { text: '📰 Communities, Forums & Alt-Media', link: 'communities' }
      ]
    }
  ]
},
  {
  text: '🧠 Semantic Clustering',
  items: [
    {
      text: '🧰 Tech & Infrastructure',
      items: [
        { text: '🤖 AI Tools', link: 'ai' },
        { text: '🧰 Dev Forge (Programming & Toolchains)', link: 'dev' },
        { text: '☁️ Webcraft (Frontend / Backend)', link: 'webcraft' },
        { text: '🔧 SysOps & Automation', link: 'sysops' },
        { text: '🐧 Unix Environments', link: 'unix' },
      ]
    },
            {
      text: '😈 Malware Lab',
      items: [
    { text: '🧬 Malware Analysis', link: '/malware/analysis' },
    { text: '👁️ Forensics', link: '/malware/forensics' },
    { text: '🔄 Reverse Engineering', link: '/malware/reversing' },
    { text: '🟥 Red Team', link: '/malware/red' },
    { text: '🟦 Blue Team', link: '/malware/blue' },
    { text: '🟣 Purple Team', link: '/malware/purple' },
    { text: '🎟️ Conferences, Events, Hackathons', link: '/malware/events' },
      ]
    },
        {
      text: 'Creative & Media Stack',
      items: [
        { text: '🎨 Design & Concept Art', link: 'design' },
        { text: '📸 Image Tools', link: 'image' },
        { text: '🎥 Video Creation', link: 'video' },
        { text: '🎵 Audio Tools', link: 'audio' },
        { text: '🌀 File Flows & Media Ops', link: 'files' },
      ]
    },
    {
      text: 'Digital Lifestyle',
      items: [
    { text: '🎮 Gaming & Emulation', link: 'gaming' },
    { text: '💬 Social Media Tools', link: 'social-media' },
    { text: '📱 Mobile Platforms (iOS/Android)', link: 'mobile' },
    { text: '💸 FinTech & Crypto', link: 'fintech' },
    { text: '👷 Jobs & Remote Work', link: 'jobs' },
    { text: '🎌 Language Learning', link: 'language' },
      ]
    }
  ]
},
  {
    text: '📖 Deep Knowledge & Education',
    items: [
      { text: '📗 eBook Libraries & Archives', link: 'ebooks' },
      { text: '⚡ Tech Educational', link: 'techedu' },
      { text: '📖 General Knowledge & Educational', link: 'educational' },
      { text: '✡️ Esoteric & Occult Tech', link: 'esoteric' },
    ]
  }
]


export const sidebar: DefaultTheme.Sidebar = [
  // Digital Awakening layer
  {
    text: '✨ Digital Awareness',
    collapsed: false,
    items: [
      { text: '📜 Manifesto & How to Use', link: 'qs' },
      { text: '🔥 Privacy & Identity Protection', link: 'privacy' },
      { text: '⚡ Digital Awakening Guides', link: 'guides' }
    ]
  },

  // Cartographer layer
  {
    text: '🧭 Mapping & Indexing',
    collapsed: false,
    items: [
      { text: '🧭 Open Indexers & Link Archives', link: 'open' },
      { text: '📊 Data Mapping & Visualization', link: 'data' },
      { text: '📰 Communities, Forums & Alt-Media', link: 'communities' }
    ]
  },

  // Tech & Infrastructure layer
  {
    text: '🧰 Dev & Infrastructure',
    collapsed: false,
    items: [
      { text: '🤖 AI Tools', link: 'ai' },
      { text: '🛠 Dev Forge (Programming & Toolchains)', link: 'dev' },
      { text: '☁️ Webcraft (Frontend / Backend)', link: 'webcraft' },
      { text: '🔧 SysOps & Automation', link: 'sysops' },
      { text: '🐧 Unix Environments', link: 'unix' }
    ]
  },

  // Expresión Creativa
  {
    text: '🖌️ Creative Tools',
    collapsed: false,
    items: [
      { text: '🎨 Design & Concept Art', link: 'design' },
      { text: '📸 Image Tools', link: 'image' },
      { text: '🎥 Video Creation', link: 'video' },
      { text: '🎵 Audio Tools', link: 'audio' },
      { text: '🌀 File | Media | Sharing', link: 'files' }
    ]
  },
  // Malware LabHub
{
  text: '😈 Malware LabHub',
  collapsed: true,
  items: [
    { text: '🧬 Malware Analysis', link: '/malware/analysis' },
    { text: '👁️ Forensics', link: '/malware/forensics' },
    { text: '🔄 Reverse Engineering', link: '/malware/reversing' },
    { text: '🟥 Red Team', link: '/malware/red' },
    { text: '🟦 Blue Team', link: '/malware/blue' },
    { text: '🟣 Purple Team', link: '/malware/purple' },
    { text: '🎟️ Conferences, Events, Hackathons', link: '/malware/events' }
  ]
},
  // Integración Digital
  {
    text: '🌏 Digital Lifestyle',
    collapsed: true,
    items: [
      { text: '🎮 Gaming & Emulation', link: 'gaming' },
      { text: '💬 Social Media Tools', link: 'social' },
      { text: '📱 Mobile Platforms (iOS / Android)', link: 'mobile' },
      { text: '💸 FinTech & Crypto', link: 'fintech' },
      { text: '👷 Jobs & Remote Work Platforms', link: 'jobs' }
    ]
  },

  // Conocimiento & Estudio
  {
    text: '📖 Knowledge & Learning',
    collapsed: true,
    items: [
      { text: '📗 eBook Libraries & Archives', link: 'ebooks' },
      { text: '⚡ Tech Educational', link: 'techedu' },
      { text: '🧠 General Knowledge & Interdisciplinary Studies', link: '/knowledge/general' },
      { text: '✡️ Esoteric & Occult Tech', link: '/knowledge/esoteric' },
    ]
  }
]


export const siteConfig = {
  title: 'LabHub',
  description:
    'LabHub, the one-stop resource hub for all your interests. Here you can find websites for Anime, Manga, Light Novels, Music, Soundtracks, Games and more. Our japanese learning section has books and videos about language, history and culture.',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: true,
  titleTemplate: ':title • LabHub by Hakired',
  head: [
    ['meta', { name: 'theme-color', content: '#56b4fc' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['link', { rel: 'icon', href: '/asset/fav.png' }],
    // PWA
    ['link', { rel: 'icon', href: '/asset/fav.png', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/asset/fav.png' }],
    ['link', { rel: 'mask-icon', href: '/asset/fav.png', color: '#56b4fc' }],
    // prettier-ignore
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Anime, Manga, VTuber, Music, JPOP, Japan, Learning Japanese, Resources, Guides'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/asset/fav.png',
        sizes: '192x192'
      }
    ],
    [
      'script',
      { id: 'restore-banner-preference' },
      `
(() => {
  const restore = (key, cls, def = false) => {
    const saved = localStorage.getItem(key);
    if (saved) {
      document.documentElement.classList.add(cls);
    }
  };
  restore('ackDomainChange', 'banner-dismissed');
})();`
    ]
  ],
  srcExclude: ['README.md', 'sandbox/**/*.md'],
  sitemap: {
    hostname: hostname
  }
}
