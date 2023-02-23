<template>
  <div class="page index">
    <div class="content">
      <h1>DMS</h1>
      <img src="~/assets/images/mars.png" />
    </div>
    <div class="background">
      <img src="~/assets/images/space.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.index {
  h1 {
    color: white;
  }
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
