<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface NewsItem {
  title: string
  url: string
  content: string
  source: string
  publish_time: string
}

const items = ref<NewsItem[]>([])
const loading = ref(true)
const error = ref('')
const fetchedAt = ref('')

onMounted(async () => {
  try {
    const res = await fetch('https://orz.ai/api/v1/dailynews/?platform=github')
    if (!res.ok) {
      throw new Error(`请求失败: ${res.status}`)
    }
    const json = await res.json()
    items.value = json?.data ?? []
    fetchedAt.value = new Date().toLocaleString()
  } catch (e: any) {
    error.value = e?.message || '加载失败'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="tech-news">
    <div class="tech-news-header">
      <span class="tech-news-source">数据来源：GitHub</span>
      <span v-if="fetchedAt" class="tech-news-time">抓取时间：{{ fetchedAt }}</span>
    </div>

    <p v-if="loading">正在加载最新热点...</p>
    <p v-else-if="error" class="tech-news-error">{{ error }}</p>
    <div v-else class="tech-news-list">
      <div v-for="(item, idx) in items" :key="idx" class="tech-news-card">
        <div class="tech-news-card-head">
          <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
          <span class="tech-news-tag">GitHub</span>
        </div>
        <p class="tech-news-desc">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-news {
  margin-top: 16px;
}

.tech-news-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 14px;
  margin-bottom: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.02);
}

.tech-news-source {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tech-news-time {
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.tech-news-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-news-card {
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.tech-news-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.tech-news-card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.tech-news-card-head a {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.tech-news-card-head a:hover {
  text-decoration: underline;
}

.tech-news-tag {
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: #1d4ed8;
  background: rgba(59, 130, 246, 0.08);
}

.tech-news-desc {
  margin-top: 10px;
  color: var(--vp-c-text-2);
  line-height: 1.75;
}

.tech-news-meta {
  margin-top: 10px;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.tech-news-error {
  color: #b91c1c;
}
</style>
