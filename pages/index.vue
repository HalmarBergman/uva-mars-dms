<template>
  <div class="page index">
    <div class="section">
      <div class="header">
        <h1 class="white">MDS</h1>
        <div class="datepicker">
          <v-icon class="icon">mdi-calendar</v-icon>
        </div>
        <h3 class="grey semibold">March 11, 2023</h3>
      </div>
      <div class="cards">
        <Tile class="nineteen">
          <template #header>
            <h4 class="white">Sol #1728</h4>
            <h6 class="grey semibold">Mars</h6>
          </template>

          <template #content>
            <div class="planet">
              <div class="wrapper">
                <div class="image">
                  <img src="~/assets/images/mars.png" alt="mars" />
                </div>
              </div>
            </div>
          </template>
        </Tile>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '~/assets/css/_variables.scss';
.index {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .cards {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 90vw;
      .tile {
        .planet {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 180px;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.5) 50%);
          border-radius: 50%;
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 70%;
            border-radius: 50%;
            border: 1px solid $primary-light;
            box-shadow: 0 0 10px 0 $primary-light;

            .image {
              width: 70%;
              height: 70%;

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .index {
    .section {
      .cards {
        flex-direction: row;
      }
    }
  }
}
</style>
