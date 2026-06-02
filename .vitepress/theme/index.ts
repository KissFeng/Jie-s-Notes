import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import TechNews from './components/TechNews.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TechNews', TechNews)
  }
} satisfies Theme
