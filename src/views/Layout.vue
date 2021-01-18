<template>
  <div>
    <router-view/>
    <HomeTabBar />
  </div>
</template>

<script>
import HomeTabBar from '../components/HomeTabBar/index.vue';

export default {
  name: 'Layout',
  components: {
    HomeTabBar,
  },
};
</script>
