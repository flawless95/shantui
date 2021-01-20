<template>
  <div class="UploadFile">
    <van-uploader v-model="fileList" multiple>
      <slot class="UploadFile-btn" />
    </van-uploader>
  </div>
</template>

<script>
export default {
  name: 'UploadFile',
  data() {
    return {
      fileList: [],
    };
  },
  props: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="css">
</style>
