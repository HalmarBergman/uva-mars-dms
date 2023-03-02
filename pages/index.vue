<template>
  <div class="page index">
    <div class="section">
      <h2>Matt Damon Scheduler</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '~/assets/css/_variables.scss';
.index {
  .section {
    width: 80vw;
    height: 80vh;

    padding: 20px;
    background: linear-gradient(-45deg, $black, $grey-dark);
    border-radius: 15px;

    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
