<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'DMS',
  meta: [{ name: 'DMS', content: 'DMS' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
})
</script>

<style lang="scss"></style>
