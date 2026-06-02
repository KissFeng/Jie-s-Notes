import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "Jie's Notes",
    description: '我的个人公开知识库',
    lang: 'zh-cn',
    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true,

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    ],

    themeConfig: {
      outline: { level: [2, 3] },

      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '没有找到相关结果',
              resetButtonTitle: '清除搜索条件',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      },

      nav: [
        { text: '首页', link: '/' }
      ],

      sidebar: [
      {
        text: 'VitePress 使用说明',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/VitePress使用说明/' },
          { text: '从零搭建指南', link: '/docs/VitePress使用说明/从零搭建指南' },
          { text: '踩坑记录', link: '/docs/VitePress使用说明/踩坑记录' },
          { text: '插件与组件生态', link: '/docs/VitePress使用说明/插件与组件生态' },
          { text: '主题美化与视觉增强', link: '/docs/VitePress使用说明/主题美化与视觉增强' }
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
          { text: '总览', link: '/docs/技术热点新闻/' },
          { text: 'GitHub', link: '/docs/技术热点新闻/github' },
          { text: '吾爱破解', link: '/docs/技术热点新闻/ftpojie' },
          { text: '哔哩哔哩', link: '/docs/技术热点新闻/bilibili' },
          { text: '豆瓣', link: '/docs/技术热点新闻/douban' },
          { text: '掘金', link: '/docs/技术热点新闻/juejin' },
          { text: '抖音', link: '/docs/技术热点新闻/douyin' }
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
          { text: 'CodeGraph 知识图谱', link: '/docs/只有我自己看得明白/codegraph-context' },
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
)
