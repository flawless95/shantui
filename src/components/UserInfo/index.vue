<template>
  <div class="userInfo">
    <van-nav-bar
      :title="user.name"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="userInfo-wrapper">
      <van-skeleton title avatar :row="3" :loading="!dataLoaded">
        <div class="userInfo-content">
          <div class="avatar">
            <img :src="user.avatar" alt="" srcset="" />
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      dataLoaded: false,
    };
  },
  props: {
    user: {
      type: Object,
    },
  },
  mounted() {
    setTimeout(() => {
      this.dataLoaded = true;
    }, 700);
  },
  methods: {
    onClickLeft() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="css">
.userInfo {
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.userInfo-wrapper {
  padding: 1rem 0 0 0;
}
.userInfo-content {
  display: flex;
  justify-content: center;
}
.avatar,
.avatar img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.6rem;
}
</style>
