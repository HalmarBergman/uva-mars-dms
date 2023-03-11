<template>
  <div class="tile">
    <div class="tile-header">
      <slot name="header" />
    </div>
    <div class="tile-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '~/assets/css/_variables.scss';

.tile {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(35, 35, 35, 0) 0%, rgba(40, 40, 40, 0.5) 100%);
  padding: 15px;
  border-radius: 5px;
  gap: 10px;
  .tile-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .tile-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) {
  .tile {
    &.one-fifth {
      width: 19%;
    }
    &.two-fifth {
      width: 39%;
    }
    &.three-fifth {
      width: 59%;
    }
    &.four-fifth {
      width: 79%;
    }

    &.one-fourth {
      width: 24%;
    }
    &.two-fourth {
      width: 49%;
    }
    &.three-fourth {
      width: 74%;
    }
    &.halve {
      width: 49.5%;
    }

    &.one-third {
      width: 32%;
    }
    &.two-third {
      width: 66.5%;
    }
    &.hundred {
      width: 100%;
    }
  }
}
</style>
