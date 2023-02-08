import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  base: "/docs/",
  title: '📦 Documentations',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide()
    }, 

    editLink: {
      pattern: 'https://github.com/AlxisHenry/docs/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlxisHenry' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/alexishenry03' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Alexis Henry'
    },

    algolia: {
      appId: 'Z7MU1KXKY9',
      apiKey: 'db0abdb40c41cff16a0b46f56eb7d300',
      indexName: 'alexishenry.eu'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: 'guide/', activeMatch: '/guide/' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Repositories',
      collapsed: false,
      items: [
        { text: 'Portfolio', link: '/guide/projects/portfolio' },
        { text: 'Vanilla Portfolio', link: '/guide/projects/vanilla-portfolio' },
        { text: 'Homemade CDN', link: '/guide/projects/cdn' },
        { text: 'URL Shortener', link: '/guide/projects/url-shortener' },
        { text: 'DOM Chrome Ext.', link: '/guide/projects/dom-chrome-ext' },
        { text: 'Github Timeline', link: '/guide/projects/timeline' },
        { text: 'Slides Presentaiton', link: '/guide/projects/slides' },
        { text: 'Click per second', link: '/guide/projects/cps' },
        { text: 'Battle Card Game', link: '/guide/projects/battle-card-game' },
        { text: 'Automated Deployment', link: '/guide/projects/deployment' },
        { text: 'Server Mainteance Tool', link: '/guide/projects/server-maintenance' },
        { text: 'Convert.py', link: '/guide/projects/convert' },
      ]
    },
    {
      text: 'Organizations',
      collapsed: true,
      items: [
        { 
          text: 'CCI-Campus', 
          collapsed: true,
          items: [
            { text: 'CCI-Appro', link: '/guide/orgs/cci-campus/cci-appro' }
          ] 
        },
        { 
          text: 'Restiloc', 
          collapsed: true,
          items: [
            { text: 'Mobile Application', link: '/guide/orgs/restiloc/mobile' },
            { text: 'API RESTful', link: '/guide/orgs/restiloc/api' }
          ] 
        },
        { 
          text: 'WeebYou',
          collapsed: true,
          items: [] 
        }    
      ]
    },
    {
      text: 'Getting Started With',
      collapsed: true,
      items: [
        { text: 'Sass', link: '/guide/start/sass' },
        { text: 'Symfony', link: '/guide/start/symfony' } 
      ]
    }
  ]
}
