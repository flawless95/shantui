<template>
  <div class="momentcard">
    <div class="momentcard-basic">
      <div class="momentcard-basic-avatar">
        <img class="avatar" :src="moment.avatar" alt="">
      </div>
      <div class="momentcard-basic-info">
        <div class="momentcard-basic-info-name">
          {{moment.name}}
        </div>
        <div class="momentcard-basic-info-time">
          {{moment.time}}
        </div>
      </div>
    </div>
    <div class="momentcard-message">
      <div class="momentcard-message-text">
        <span v-if="moment.inviteUser" class="momentcard-message-inviteuser">
          @{{moment.inviteUser.name}}
        </span>
        <span>{{moment.momentText}}</span>
      </div>
      <div class="momentcard-message-img-wrapper" v-if="moment.momentImg">
        <div
          v-for="(momentImgItem, i) in moment.momentImg"
          :key="i" class="momentcard-message-img-item"
        >
          <img :src="momentImgItem" alt="">
        </div>
      </div>
    </div>
    <div class="momentcard-location">
      <span class="momentcard-location-content">
        <van-icon :name="locationImg" />
        <span>{{moment.location.title}}</span>
      </span>
    </div>
    <div class="momentcard-operation"></div>
  </div>
</template>

<script>
import locationImg from '../../assets/location.png';

export default {
  name: 'MomentCard',
  data() {
    return {
      locationImg,
    };
  },
  props: {
    moment: {
      type: Object,
      // default: {},
    },
  },
  components: {},
  methods: {},
};
</script>
<style lang="css">
.momentcard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;
  margin-bottom: 0.3rem;
  padding: 0.4rem;
  box-sizing: border-box;
  font-size: 10px;
}
.momentcard-basic{
  display: flex;
  justify-content: flex-start;
  height: 1.5rem;
  width: 100%;
  align-items: center;
}
.momentcard-basic-info {
  margin-left: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.momentcard-basic-info-name {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
}
.momentcard-basic-info-time {
  font-size: 10px;
  color: #a2a6a8;
  font-weight: 300;
}
.avatar{
  widows: 1.2rem;
  height: 1.2rem;
  border-radius: 0.6rem;
}
.momentcard-message-inviteuser {
  color: #3585ff;
}
.momentcard-message-img-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.1rem;
}
.momentcard-message-img-item {
  margin-right: 0.5rem;
  width: 3rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
}
.momentcard-message-img-item img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 3.3rem
}
.momentcard-message-text {
  font-size: 13px;
  margin: 0rem 0rem 0.4rem 0rem;
  letter-spacing: 0.3px;
}
.momentcard-location {
  width: 100%;
  box-sizing: border-box;
}
.momentcard-location-content{
  display: inline-block;
  color: #515354;
  background-color: #d9edff;
  padding: 0.14rem 0.21rem;
  vertical-align: middle;
  box-sizing: border-box;
}
.momentcard-location-content span {
  display: inline-block;
  margin-left: 0.12rem;
}
</style>
