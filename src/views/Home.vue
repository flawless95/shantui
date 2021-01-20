<template>
  <div class="home">
    <van-tabs>
      <van-tab title="推荐">
        <div class="swiper-wrapper">
          <van-swipe
            class="my-swipe"
            :autoplay="2000"
            indicator-color="white"
          >
            <van-swipe-item>
              <img src="../assets/home_banner1.png" alt="" />
            </van-swipe-item>
            <van-swipe-item class="swiper-item-special">
              <!-- <img src="../assets/home_banner2.png" alt=""> -->
              这个缺个图片呀 =。=
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="moment-wrapper">
          <div
            v-for="(item, index) in momentList"
            :key="index"
            class="moment-card-wrapper"
          >
            <moment-card :moment="item"></moment-card>
          </div>
          <router-link to="/publishMoment">
            <div class="moment-add"></div>
          </router-link>
        </div>
      </van-tab>
      <van-tab title="热榜">
        <div>热榜内容</div>
      </van-tab>
      <van-tab title="关注"> 关注内容 </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import MomentCard from '../components/MomentCard/index.vue';
import { momentList } from '../mockData/moment';

export default {
  name: 'Home',
  data() {
    return {
      momentList,
    };
  },
  components: {
    MomentCard,
  },
};
</script>
<style lang="css">
.home {
  padding: 20px 0px 10px;
}
.van-tabs__line {
  background-color: #3585ff;
  width: 0.5rem;
}
.swiper-wrapper {
  width: 100%;
  height: 5rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-top: solid 0.01rem #dddddd;
  border-bottom: solid 0.2rem #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-swipe {
  width: 9rem;
  height: 4rem;
}
.van-swipe-item {
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: center;
  border-radius: 0.2rem;
  background: #fff;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.swiper-item-special {
  background: #ffcc66;
}
.my-swipe img {
  width: 100%;
  height: 4rem;
}
/* .moment-wrapper {
    position: relative;
  } */
.moment-card-wrapper {
  width: 100%;
}
.moment-add {
  width: 2.2rem;
  height: 2.2rem;
  background-image: url('../assets/blue_add.png');
  background-size: 2.2rem 2.2rem;
  position: fixed;
  bottom: 1.6rem;
  right: 0.4rem;
}
</style>
