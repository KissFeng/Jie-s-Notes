import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jie's Notes",
  description: '我的个人公开知识库',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'VitePress 使用说明',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/VitePress使用说明/' },
          { text: '从零搭建指南', link: '/docs/VitePress使用说明/从零搭建指南' },
          { text: '踩坑记录', link: '/docs/VitePress使用说明/踩坑记录' }
        ]
      },
      {
        text: '期末复习',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/期末复习/' },
          { text: 'JavaWeb 习题库', link: '/docs/期末复习/JavaWeb应用开发习题库（2026）_破解版_答案+解析' },
          { text: '习概选择题', link: '/docs/期末复习/习概' },
          { text: '习概主观题', link: '/docs/期末复习/习概主观题' }
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
          { text: '总览', link: '/docs/只有我自己看得明白/' },
          { text: 'CodeGraph 上下文丢失问题', link: '/docs/只有我自己看得明白/codegraph-context' },
          { text: 'Gitee 多账号 SSH 配置', link: '/docs/只有我自己看得明白/gitee-multi-account' },
          { text: 'PowerShell 与 Node.js 路径冲突', link: '/docs/只有我自己看得明白/pwsh-node-path' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KissFeng' }
    ]
  }
})
