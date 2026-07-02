<template>
  <div class="doc-footer">
    <!-- 不蒜子统计 -->
    <div class="busuanzi-stats">
      <span id="busuanzi_container_page_pv" style="display: none;">
        👀 本文阅读量 <span id="busuanzi_value_page_pv"></span> 次
      </span>
      <span class="divider">|</span>
      <span id="busuanzi_container_site_pv" style="display: none;">
        🌟 本站总访问量 <span id="busuanzi_value_site_pv"></span> 次
      </span>
    </div>

    <!-- Giscus 评论区 -->
    <div class="giscus-wrapper" :key="route.path">
      <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="KissFeng/Jie-s-Notes"
        data-repo-id="R_kgDOSt9pUA" 
        data-category="General"
        data-category-id="DIC_kwDOSt9pUM4DAU5P"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress'

const route = useRoute()
const router = useRouter()

// SPA 路由切换时重新加载不蒜子
const fetchBusuanzi = () => {
  if (typeof window !== 'undefined') {
    let script = document.getElementById('busuanzi-script')
    if (script) {
      script.remove()
    }
    script = document.createElement('script')
    script.id = 'busuanzi-script'
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    script.async = true
    document.head.appendChild(script)
  }
}

watch(
  () => route.path,
  () => {
    // 延迟一点加载，确保页面渲染完成
    setTimeout(fetchBusuanzi, 500)
  }
)

onMounted(() => {
  fetchBusuanzi()
})
</script>

<style scoped>
.doc-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
.busuanzi-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 10px;
}
.divider {
  color: var(--vp-c-divider);
}
@media (max-width: 640px) {
  .divider {
    display: none;
  }
  .busuanzi-stats {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
