<template>
  <Transition name="fade">
    <div v-show="visible" class="back-to-top" title="返回顶部" @click="scrollToTop">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
let scrollEl: HTMLElement | Window | null = null

function getScrollParent(): HTMLElement | Window {
  const main = document.querySelector('.VPContent')
  if (main && main.scrollHeight > main.clientHeight) return main
  return window
}

function getScrollTop(): number {
  if (scrollEl === window || !scrollEl) {
    return window.pageYOffset || document.documentElement.scrollTop
  }
  return (scrollEl as HTMLElement).scrollTop
}

function onScroll() {
  visible.value = getScrollTop() > 300
}

function scrollToTop() {
  const target = scrollEl === window || !scrollEl ? { top: 0 } : { top: 0 }
  if (scrollEl && scrollEl !== window) {
    ;(scrollEl as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  scrollEl = getScrollParent()
  scrollEl.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  scrollEl?.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  cursor: pointer;
  z-index: 99;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.back-to-top:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
