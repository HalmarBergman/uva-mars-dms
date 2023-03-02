<template>
  <div class="page index">
    <div class="section">
      <div class="cards">
        <div class="card medium planet">
          <h4 class="white">Mars</h4>
          <div class="planet">
            <div class="wrapper">
              <div class="image">
                <img src="~/assets/images/mars.png" alt="mars" />
              </div>
            </div>
          </div>
        </div>
        <div class="card small profile">
          <h4 class="white">Profile</h4>
          <div class="profile">
            <div class="image">
              <img src="~/assets/images/profile.png" alt="profile" />
            </div>
          </div>
        </div>

        <div class="card small">Test</div>
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
    justify-content: space-between;

    width: 1350px;
    height: 80vh;

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 100%;

      .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        height: 100%;

        background: linear-gradient(45deg, rgba(35, 35, 35, 0) 0%, rgba(40, 40, 40, 0.5) 100%);

        padding: 20px;
        border-radius: 5px;
        gap: 10px;

        h4 {
          font-size: 18px;
          margin: 0;
          padding: 0;
          line-height: 18px;
        }

        &.small {
          width: 285px;
          height: 100%;
        }
        &.medium {
          width: 600px;
          height: 100%;
        }
        &.large {
          width: 1350px;
        }

        &.profile {
          .profile {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.5) 50%);
            border-radius: 5px;

            .image {
              width: 100%;
              height: 200px;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }

        &.planet {
          .planet {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            width: 250px;
            height: 250px;
            background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.5) 50%);
            border-radius: 50%;

            .wrapper {
              display: flex;
              justify-content: center;
              align-items: center;

              width: 80%;
              height: 80%;

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
}
</style>
