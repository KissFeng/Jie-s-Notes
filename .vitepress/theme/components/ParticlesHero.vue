<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// VueParticles 通过 tsparticles 插件全局注册，无需显式导入

const isDark = ref(false)

let observer: MutationObserver | null = null

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
  observer = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="particles-hero">
    <VueParticles
      id="heroParticles"
      :options="{
        fullScreen: false,
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 60, density: { enable: true, width: 1200, height: 800 } },
          color: {
            value: isDark
              ? ['#00d4ff', '#7c3aed', '#ec4899', '#06b6d4', '#a78bfa', '#f472b6']
              : ['#3b82f6', '#6366f1', '#8b5cf6', '#0ea5e9', '#06b6d4', '#a855f7']
          },
          links: {
            enable: true, distance: 140,
            color: isDark ? '#ffffff' : '#6366f1',
            opacity: isDark ? 0.15 : 0.2, width: 1
          },
          move: { enable: true, speed: 1.2, direction: 'none', random: true, straight: false, outModes: { default: 'out' } },
          size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false } },
          opacity: { value: { min: 0.3, max: 0.7 }, animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false } }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'grab' }, resize: { enable: true } },
          modes: { grab: { distance: 160, links: { opacity: 0.35 } } }
        }
      }"
    />
  </div>
</template>

<style scoped>
.particles-hero {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.particles-hero :deep(#heroParticles) {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
