import { defineUserConfig } from 'vuepress'
import { gungnirTheme } from 'vuepress-theme-gungnir'
import { i18n } from 'vuepress-theme-gungnir'
import { navbar, sidebar } from './configs'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'

const isProd = process.env.NODE_ENV === 'production'
const base = process.env.BASE ? `/${process.env.BASE}/` : '/'

export default defineUserConfig({
  dest: 'build',
  base: base as `/${string}/`,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${base}img/logo/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${base}/img/logo/favicon-32x32.png`,
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: 'xuyixiang',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          "xuyixiang,xuyixiang's blog,xuyixiang blog,xuyixiang 的博客,许逸翔的博客,许逸翔的blog,许逸翔's blog",
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content:
          "xuyixiang's blog,xuyixiang blog, xuyixiang 的博客,许逸翔的博客,许逸翔的blog,许逸翔's blog",
      },
    ],
    [
      'meta',
      {
        name: 'baidu-site-verification',
        content: 'code-b3AXWsolty',
      },
    ],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'aV2Di5uN-VKtK_bGNYGHx---yYqZRds6mSCvEZcFURU',
      },
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-title', content: "xuyixiang's blog" },
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { name: 'theme-color', content: '#377bb5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#377bb5' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: "xuyixiang's blog",
      description: "xuyixiang's blog",
    },
  },

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: 'Renovamen/vuepress-theme-gungnir',
    docsDir: 'docs',
    hitokoto: 'https://v1.hitokoto.cn?c=i', // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: 'xuyixiang',
      avatar: '/img/avatar.jgp',
      description: "xuyixiang's blog",
      sns: {
        github: 'xu1xiang',
        email: 'xuyixiang18@gmail.com',
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: '/img/home-bg/1.jpg',
        mask: 'rgba(40, 57, 101, .4)',
      },
      {
        path: '/img/home-bg/2.jpg',
        mask: 'rgb(251, 170, 152, .2)',
      },
      {
        path: '/img/home-bg/3.jpg',
        mask: 'rgba(68, 74, 83, .1)',
      },
      {
        path: '/img/home-bg/4.jpg',
        mask: 'rgba(19, 75, 50, .2)',
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: 'Black Sheep Wall',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },
      links: {
        subtitle:
          'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // i18n
        ...i18n.zh,
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: 'xu1xiang/blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkzOTc0ODYzMzk=',
        category: 'General',
        categoryId: 'DIC_kwDOF7EpA84COi_d',
        lazyLoad: true,
      },
      mdPlus: {
        all: true,
      },
      // ga: 'G-ZLWJGDQC5S',
      ba: 'f645355c45295e011faa1a65c2c0b86c',
      pwa: false,
      // search: false, // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/xu1xiang" target="_blank">xuyixiang</a> 2019-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),

  plugins: [
    sitemapPlugin({
      hostname: 'https://www.xuyx.site',
    }),
  ],

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
})
