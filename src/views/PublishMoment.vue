<template>
  <div class="publishMoment">
    <van-nav-bar title="发布动态" left-arrow @click-left="onClickLeft" />
    <div class="publishMoment-content">
      <van-field
        class="publishMoment-field"
        v-model="message"
        rows="7"
        autosize
        type="textarea"
        placeholder="请输入正文"
      />
      <div class="publishMoment-upload">
        <upload-file class="publishMoment-uploadfile">
          <img class="publishMoment-uploadfile-img" :src="uploadfile" alt="" />
        </upload-file>
      </div>
      <van-cell-group>
        <van-cell
          class="publishMoment-cell-picture publishMoment-cell"
          title=" "
          value=""
          :icon="pictureImg"
        >
          <van-button type="info" slot="right-icon" @click="publish"
            >发布</van-button
          >
        </van-cell>
        <van-cell
          title="发布至"
          value="请选择圈子"
          class="publishMoment-cell"
        />
        <van-cell title="位置" value="" class="publishMoment-cell">
          <location-tab
            :canClose="true"
            slot="right-icon"
            address="山推国际事业园办公楼"
          ></location-tab>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import UploadFile from '../components/UploadFile/index.vue';
import LocationTab from '../components/LocationTab/index.vue';
import uploadfile from '../assets/uploadfile.png';
import pictureImg from '../assets/picture.png';

export default {
  name: 'PabulishMoment',
  data() {
    return {
      message: '',
      uploadfile,
      pictureImg,
    };
  },
  components: {
    UploadFile,
    LocationTab,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    publish() {
      this.$router.back();
    },
  },
};
</script>
<style lang="css">
.publishMoment-content {
  padding: 0.1rem;
}
.publishMoment-field {
  border-radius: 5px;
}
.publishMoment-upload {
  padding: 10px 16px;
}
.publishMoment-uploadfile-img {
  width: 80px;
  height: 80px;
}
.publishMoment-cell-picture .van-icon__image {
  width: 1.5em;
  height: 1.5em;
}
.publishMoment-cell {
  align-items: center;
  padding: 8px 16px;
  min-height: 1.3rem;
}
.publishMoment-cell .van-button {
  height: 0.78rem;
}
</style>
