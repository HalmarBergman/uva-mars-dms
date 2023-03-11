<template>
  <div class="page index">
    <div class="section">
      <div class="header">
        <div class="main">
          <h1 class="grey semibold">MDF</h1>
          <div class="datepicker">
            <h4 class="pagelink grey">Next week overview</h4>
            <v-icon class="icon">mdi-arrow-left</v-icon>
            <h4 class="primary light semibold">March 11, 2023</h4>
            <v-icon class="icon">mdi-arrow-right</v-icon>
          </div>
        </div>
        <div class="sub">
          <h3 class="white semibold">Sol #1728</h3>
        </div>
      </div>
      <div class="cards small">
        <Tile class="one-fifth">
          <template #header>
            <div class="profile-header">
              <div class="avatar">
                <div class="image">
                  <img src="~/assets/images/profile.png" alt="matt-damon" />
                </div>
              </div>
              <div class="description">
                <h4 class="white">Matt Damon</h4>
                <h6 class="grey semibold">Botanist Astronaut</h6>
              </div>
            </div>
          </template>

          <template #content> </template>
        </Tile>

        <Tile class="one-fifth">
          <template #header>
            <h4 class="white">Planet</h4>
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

        <Tile class="one-fifth">
          <template #header>
            <h4 class="white">Sol #1728</h4>
            <h6 class="grey semibold">Mars</h6>
          </template>

          <template #content></template>
        </Tile>
        <Tile class="two-fifth">
          <template #header>
            <h4 class="white">Sol #1728</h4>
            <h6 class="grey semibold">Mars</h6>
          </template>

          <template #content></template>
        </Tile>
      </div>

      <div class="cards large">
        <Tile class="one-third">
          <template #header>
            <h4 class="white">Sol #1728</h4>
            <h6 class="grey semibold">Mars</h6>
          </template>

          <template #content></template>
        </Tile>
        <Tile class="two-third">
          <template #header>
            <h4 class="white">Sol #1728</h4>
            <h6 class="grey semibold">Mars</h6>
          </template>

          <template #content></template>
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
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 40px 20px;
    gap: 15px;
    .header {
      width: 90vw;
      padding: 0px 5px;

      .main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 48px;
        .datepicker {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .pagelink {
            font-size: 14px;
            &:hover {
              cursor: pointer;
              color: $grey-standard;
            }
          }
          h4 {
            font-size: 16px;
            margin: 0px 18px;
            &:hover {
              cursor: pointer;
            }
          }
          .icon {
            color: $grey-dark;
            &:hover {
              cursor: pointer;
              color: $primary-light;
            }
          }
        }
      }
      .sub {
        height: 48px;
      }
    }
    .cards {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 90vw;
      &.small {
        height: 300px;
      }
      &.large {
        height: 100%;
      }
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
        .profile-header {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 15px;
          .avatar {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90px;
            height: 90px;
            background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.5) 50%);
            border-radius: 50%;
            .image {
              width: 100%;
              height: 100%;
              border-radius: 50%;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
              }
            }
          }
          .description {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            h4 {
              font-size: 16px;
              margin: 0px;
            }
            h6 {
              font-size: 14px;
              margin: 0px;
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
