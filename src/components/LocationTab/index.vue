<template>
  <span class="locationTab" v-if="showTab">
    <div class="locationTab-flex">
      <van-icon :name="locationImg" />
      <span>{{ address }}</span>
      <van-icon
        class="locationTab-close"
        name="cross"
        v-if="canClose"
        size="15"
        @click="close"
      ></van-icon>
    </div>
  </span>
</template>

<script>
import locationImg from '../../assets/location.png';

export default {
  name: 'LocationTab',
  props: {
    address: {
      type: String,
    },
    canClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      locationImg,
      showTab: true,
    };
  },
  methods: {
    close() {
      this.showTab = false;
      this.$emit('closeTab');
    },
  },
};
</script>
<style lang="css">
.locationTab {
  display: inline-block;
  font-size: 12px;
}
.locationTab-flex {
  display: flex;
  align-items: center;
  color: #515354;
  background-color: #d9edff;
  padding: 0.12rem 0.21rem;
  vertical-align: middle;
  box-sizing: border-box;
}
.locationTab-flex span {
  display: inline-block;
  margin-left: 0.12rem;
}
.locationTab-close {
  margin: 0 0.1rem 0 0.2rem;
}
</style>
