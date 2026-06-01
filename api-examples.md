# Runtime API 示例

本页演示了 VitePress 提供的一些 Runtime API 的用法。

## `useData()` API

`useData()` 可以获取当前页面的数据：

```ts
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
```

## `useRoute()` API

获取当前路由信息：

```ts
import { useRoute } from 'vitepress'

const route = useRoute()
```

## `<script setup>` 中使用

在 `.md` 文件中可以直接使用 Vue 3 的 `<script setup>` 语法，实现动态交互功能。
