import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import TechNews from './components/TechNews.vue'
import BackToTop from './components/BackToTop.vue'

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop)
    })
  },
  enhanceApp(ctx) {
    ctx.app.component('TechNews', TechNews)
    vitepressNprogress(ctx)
  }
} satisfies Theme
