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
  max-height: 100%;
  background: linear-gradient(45deg, rgba(35, 35, 35, 0) 0%, rgba(40, 40, 40, 0.5) 100%);
  padding: 20px;
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
    &.nine {
      width: 9%;
    }
    &.nineteen {
      width: 19%;
    }
    &.twenty-nine {
      width: 29%;
    }
    &.thrity-nine {
      width: 39%;
    }
    &.forty-nine {
      width: 49%;
    }
    &.fifty-nine {
      width: 59%;
    }
    &.sixty-nine {
      width: 69%;
    }
    &.seventy-nine {
      width: 79%;
    }
    &.eighty-nine {
      width: 89%;
    }
    &.hundred {
      width: 100%;
    }
  }
}
</style>
