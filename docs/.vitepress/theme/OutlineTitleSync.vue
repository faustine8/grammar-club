<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { onContentUpdated, useData } from 'vitepress'

const { frontmatter, page } = useData()

function currentPageTitle() {
  const frontmatterTitle = frontmatter.value.title

  if (typeof frontmatterTitle === 'string' && frontmatterTitle.trim()) {
    return frontmatterTitle.trim()
  }

  if (page.value.title) {
    return page.value.title
  }

  return 'On this page'
}

function syncOutlineTitle() {
  nextTick(() => {
    const outlineTitle = document.getElementById('doc-outline-aria-label')

    if (outlineTitle) {
      outlineTitle.textContent = currentPageTitle()
    }
  })
}

watch(() => page.value.relativePath, syncOutlineTitle, { immediate: true })
onContentUpdated(syncOutlineTitle)
</script>

<template />
