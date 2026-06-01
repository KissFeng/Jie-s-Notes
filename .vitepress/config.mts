import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jie's Notes",
  description: '我的个人公开知识库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '期末复习',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/期末复习/' }
        ]
      },
      {
        text: '课程笔记',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/课程笔记/' }
        ]
      },
      {
        text: '技术分享',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/技术分享/' }
        ]
      },
      {
        text: '技术热点新闻',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/技术热点新闻/' }
        ]
      },
      {
        text: '日常吐槽',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/日常吐槽/' },
          { text: '第一篇笔记', link: '/docs/日常吐槽/第一篇笔记' }
        ]
      },
      {
        text: '只有我自己看得明白',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/只有我自己看得明白/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KissFeng' }
    ]
  }
})
