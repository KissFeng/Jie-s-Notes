import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import TechNews from './components/TechNews.vue'
import BackToTop from './components/BackToTop.vue'
import ParticlesHero from './components/ParticlesHero.vue'
import DocFooter from './components/DocFooter.vue'

import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import './styles/hero-particles.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(ParticlesHero),
      'layout-bottom': () => h(BackToTop),
      'doc-after': () => h(DocFooter),
    })
  },
  enhanceApp(ctx) {
    ctx.app.component('TechNews', TechNews)
    ctx.app.use(Particles, { init: loadSlim })
    vitepressNprogress(ctx)
  }
} satisfies Theme
