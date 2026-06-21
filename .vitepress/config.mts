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
          {
            text: '习概',
            collapsed: true,
            items: [
              { text: '选择题', link: '/docs/期末复习/习概' },
              { text: '主观题', link: '/docs/期末复习/习概主观题' }
            ]
          },
          {
            text: 'JavaWeb',
            collapsed: true,
            items: [
              { text: '习题库（2026）', link: '/docs/期末复习/JavaWeb应用开发习题库（2026）_破解版_答案+解析' }
            ]
          }
        ]
      },
      {
        text: '课程笔记',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/课程笔记/' },
          {
            text: '发展对象考试',
            collapsed: true,
            items: [
              { text: '总览', link: '/docs/课程笔记/发展对象考试/' },
              {
                text: '模拟试题',
                collapsed: true,
                items: [
                  { text: '6.3试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.3试题（无答案版）' },
                  { text: '6.3试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.3试题（带答案版）' },
                  { text: '6.5试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.5试题（无答案版）' },
                  { text: '6.5试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.5试题（带答案版）' },
                  { text: '6.8试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.8试题（无答案版）' },
                  { text: '6.8试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.8试题（带答案版）' },
                  { text: '6.9试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.9试题（无答案版）' },
                  { text: '6.9试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.9试题（带答案版）' },
                  { text: '6.10试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.10试题（无答案版）' },
                  { text: '6.10试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.10试题（带答案版）' },
                  { text: '6.11试题（无答案）', link: '/docs/课程笔记/发展对象考试/6.11试题（无答案版）' },
                  { text: '6.11试题（带答案）', link: '/docs/课程笔记/发展对象考试/6.11试题（带答案版）' }
                ]
              },
              {
                text: '学习资料',
                collapsed: true,
                items: [
                  { text: '习近平新时代中国特色社会主义思想', link: '/docs/课程笔记/发展对象考试/学习资料/习近平新时代中国特色社会主义思想' },
                  { text: '党的二十大', link: '/docs/课程笔记/发展对象考试/学习资料/党的二十大' },
                  { text: '党的二十届四中全会', link: '/docs/课程笔记/发展对象考试/学习资料/党的二十届四中全会' },
                  { text: '树立正确政绩观学习教育', link: '/docs/课程笔记/发展对象考试/学习资料/树立正确政绩观学习教育' },
                  { text: '校训与校风', link: '/docs/课程笔记/发展对象考试/学习资料/校训与校风' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: '技术分享',
        collapsed: true,
        items: [
          { text: '总览', link: '/docs/技术分享/' },
          { text: '域名邮箱设置指南', link: '/docs/技术分享/域名邮箱设置指南' },
          {
            text: 'Claude Code 使用指南',
            collapsed: true,
            items: [
              { text: '总览', link: '/docs/技术分享/claude-code-guide/' },
              { text: '安装与使用', link: '/docs/技术分享/claude-code-guide/install-guide' },
              { text: '代理配置与防封指南', link: '/docs/技术分享/claude-code-guide/10-cli/proxy-anti-ban' },
              { text: 'Slash Commands', link: '/docs/技术分享/claude-code-guide/01-slash-commands/README' },
              { text: 'Memory 记忆', link: '/docs/技术分享/claude-code-guide/02-memory/README' },
              { text: 'Skills 技能', link: '/docs/技术分享/claude-code-guide/03-skills/README' },
              { text: 'Subagents 子代理', link: '/docs/技术分享/claude-code-guide/04-subagents/README' },
              { text: 'MCP 协议', link: '/docs/技术分享/claude-code-guide/05-mcp/README' },
              { text: 'Hooks 钩子', link: '/docs/技术分享/claude-code-guide/06-hooks/README' },
              { text: 'Plugins 插件', link: '/docs/技术分享/claude-code-guide/07-plugins/README' },
              { text: 'Checkpoints', link: '/docs/技术分享/claude-code-guide/08-checkpoints/README' },
              { text: '高级功能', link: '/docs/技术分享/claude-code-guide/09-advanced-features/README' },
              { text: 'CLI 命令行', link: '/docs/技术分享/claude-code-guide/10-cli/README' }
            ]
          },
          {
            text: 'Git 教程',
            collapsed: true,
            items: [
              { text: '总览', link: '/docs/技术分享/Git 教程/' },
              {
                text: 'Git 基础',
                collapsed: true,
                items: [
                  { text: 'Git 的介绍与安装', link: '/docs/技术分享/Git 教程/chapter01/1.Git的介绍与安装说明' },
                  { text: 'Git 的配置', link: '/docs/技术分享/Git 教程/chapter01/2.Git的配置' },
                  { text: '获取 Git 仓库', link: '/docs/技术分享/Git 教程/chapter01/3.获取Git仓库' },
                  { text: 'Git 图示理解', link: '/docs/技术分享/Git 教程/chapter01/4.git用于理解的图示-1' },
                  { text: 'Gitee 基础配置', link: '/docs/技术分享/Git 教程/chapter01/5.Gitee基础配置' },
                  { text: 'Gitee 团队协作流程', link: '/docs/技术分享/Git 教程/chapter01/6.Gitee团队协作流程' }
                ]
              },
              {
                text: 'Git 日常操作',
                collapsed: true,
                items: [
                  { text: '最基本流程', link: '/docs/技术分享/Git 教程/chapter02/1.Git 最基本流程' },
                  { text: '状态查看', link: '/docs/技术分享/Git 教程/chapter02/2.Git 状态查看' },
                  { text: '状态重置与回滚', link: '/docs/技术分享/Git 教程/chapter02/3.Git 状态重置 或者 回滚' },
                  { text: 'Diff 差异分析', link: '/docs/技术分享/Git 教程/chapter02/4.Git Diff 差异分析' },
                  { text: '文件删除与重命名', link: '/docs/技术分享/Git 教程/chapter02/5.Git 文件删除、重命名' },
                  { text: 'gitignore 的使用', link: '/docs/技术分享/Git 教程/chapter02/6.Git之gitignore的使用' }
                ]
              },
              {
                text: 'Git 分支管理',
                collapsed: true,
                items: [
                  { text: '分支管理', link: '/docs/技术分享/Git 教程/chapter03/1.Git 分支管理' },
                  { text: '分支处理情景', link: '/docs/技术分享/Git 教程/chapter03/2.情景1： Git的分支处理' },
                  { text: '分支图示', link: '/docs/技术分享/Git 教程/chapter03/3.Git分支图示' }
                ]
              },
              {
                text: 'Git 远程协作',
                collapsed: true,
                items: [
                  { text: '远程分支管理', link: '/docs/技术分享/Git 教程/chapter04/1.Git 远程分支管理' },
                  { text: '本地与远程同步', link: '/docs/技术分享/Git 教程/chapter04/2.Git 本地与远程同步操作' },
                  { text: '远程分支关联', link: '/docs/技术分享/Git 教程/chapter04/3.Git 远程分支关联' },
                  { text: '取消文件 Track', link: '/docs/技术分享/Git 教程/chapter04/4.Git对版本库的文件取消track' },
                  { text: '远程其他操作', link: '/docs/技术分享/Git 教程/chapter04/5.Git远程其他操作' }
                ]
              }
            ]
          }
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
