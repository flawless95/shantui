<template>
  <div class="momentcard">
    <div class="momentcard-basic">
      <div class="momentcard-basic-avatar" @click="showUserInfoHandler">
        <img class="avatar" :src="momentData.avatar" alt="" />
      </div>
      <div class="momentcard-basic-info">
        <div class="momentcard-basic-info-name">
          {{ momentData.name }}
        </div>
        <div class="momentcard-basic-info-time">
          {{ momentData.time }}
        </div>
      </div>
    </div>
    <div class="momentcard-message">
      <div class="momentcard-message-text">
        <span v-if="moment.inviteUser" class="momentcard-message-inviteuser">
          @{{ momentData.inviteUser.name }}
        </span>
        <span>{{ momentData.momentText }}</span>
      </div>
      <div class="momentcard-message-img-wrapper" v-if="momentData.momentImg">
        <div
          v-for="(momentImgItem, i) in momentData.momentImg"
          :key="i"
          class="momentcard-message-img-item"
        >
          <center-img :imgPath="momentImgItem"></center-img>
        </div>
      </div>
    </div>
    <div class="momentcard-location">
      <location-tab :address="momentData.location.title"></location-tab>
    </div>
    <div class="momentcard-operation">
      <div
        class="momentcard-operation-item momentcard-operation-praise"
        @click="togglePraise"
      >
        <div
          class="momentcard-operation-havePraised-img momentcard-operation-item-img"
          v-if="momentData.praise.havePraised"
        ></div>
        <div
          class="momentcard-operation-praise-img momentcard-operation-item-img"
          v-else
        ></div>
        <div class="momentcard-operation-item-num">
          {{ momentData.praise.num }}
        </div>
      </div>
      <div class="momentcard-operation-item momentcard-operation-comment">
        <div
          class="momentcard-operation-comment-img momentcard-operation-item-img"
        ></div>
        <div class="momentcard-operation-item-num">
          {{ momentData.comment.num }}
        </div>
      </div>
      <div class="momentcard-operation-item momentcard-operation-share">
        <div
          class="momentcard-operation-share-img momentcard-operation-item-img"
        ></div>
        <div class="momentcard-operation-item-num">
          {{ momentData.share.num }}
        </div>
      </div>
    </div>
    <user-info
      class="momentcard-userinfo"
      v-if="showUserInfo"
      @close="closeUserInfo"
      :user="momentData"
    ></user-info>
  </div>
</template>

<script>
import LocationTab from '../LocationTab/index.vue';
import UserInfo from '../UserInfo/index.vue';
import CenterImg from '../CenterImg/index.vue';

export default {
  name: 'MomentCard',
  data() {
    return {
      showUserInfo: false,
      momentData: this.moment,
    };
  },
  props: {
    moment: {
      type: Object,
    },
  },
  components: {
    UserInfo,
    CenterImg,
    LocationTab,
  },
  methods: {
    showUserInfoHandler() {
      this.showUserInfo = true;
    },
    closeUserInfo() {
      this.showUserInfo = false;
    },
    togglePraise() {
      this.$set(
        this.momentData.praise,
        'havePraised',
        !this.momentData.praise.havePraised,
      );
    },
  },
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
.momentcard-basic {
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
.avatar {
  width: 1.2rem;
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
.momentcard-operation {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.4rem;
}
.momentcard-operation-item-img {
  background-size: 0.5rem 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.15rem;
}
.momentcard-operation-item {
  margin-right: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.momentcard-operation-praise-img {
  background-image: url('../../assets/praise.png');
}
.momentcard-operation-comment-img {
  background-image: url('../../assets/comment.png');
}
.momentcard-operation-share-img {
  background-image: url('../../assets/share.png');
}
.momentcard-operation-havePraised-img {
  background-image: url('../../assets/havePraised.png');
}
.momentcard-operation-item-num {
  font-size: 14px;
}
</style>
