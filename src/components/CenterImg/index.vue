<template>
  <div class="centerimg" @click="showLargeImg">
    <div class="centerimg-small-wrapper">
      <img class="centerimg-small-img" :src="imgPath" alt="" />
    </div>
    <van-overlay :show="showImg" @click.stop="closeLargeImg">
      <div class="centerimg-large-wrapper">
        <img class="centerimg-large-img" :src="imgPath" alt="" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'CenterImg',
  data() {
    return {
      showImg: false,
    };
  },
  props: {
    imgPath: {
      type: String,
    },
  },
  methods: {
    showLargeImg() {
      this.showImg = true;
    },
    closeLargeImg() {
      this.showImg = false;
    },
  },
};
</script>
<style lang="css">
.centerimg-small-wrapper {
  width: 3rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
}
.centerimg-small-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 3.3rem;
}
.centerimg-large-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.centerimg-large-img {
  width: 90%;
}
</style>
