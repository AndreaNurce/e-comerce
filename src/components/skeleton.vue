<template>
  <div class="skeleton-container">
    <div>
      <div
        class="skeleton-wrapper"
        v-for="(quantity, index) in quantitys"
        :key="index"
        :style="{ width: contentWidth, height: contentHeight }"
      >
        <section class="main-content">
          <div class="content"></div>
          <div class="content"></div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quantitys: {
      type: Number,
    },
    contentWidth: {
      type: String,
    },
    contentHeight: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
$backgroundColor: #fafafa;
$contentColor: #e3e3e3;
$subTittleColor: #cac9c9;
.skeleton-container {
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .skeleton-wrapper {
      background-color: $backgroundColor;
      margin: 20px 0;
      @include flex(center);
      animation: effect1 1s ease-in-out infinite;
      .main-content {
        all: unset;
        box-sizing: border-box;
        height: 85%;
        width: 90%;
        background-color: $contentColor;
        display: flex;
        flex-direction: column-reverse;
        .content {
          height: 8%;
          width: 25%;
      animation: effect2 1s ease-in-out infinite;

          background-color: $subTittleColor;
          &:last-child {
            margin: 30px 30px 0 30px;
          }
          &:first-child {
            margin: 15px 30px 10% 30px;
          }
        }
      }
    }
  }
}

@keyframes effect1 {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }

  }

@keyframes effect2 {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>