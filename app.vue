<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'MDS',
  meta: [{ name: 'MDS', content: 'MDS' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
})
</script>

<style src="@/assets/css/main.scss" lang="scss"></style>
