<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? iconList[0].active : iconList[0].unactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/find">
        <span>发现</span>
        <template #icon="props">
          <img :src="props.active ? iconList[1].active : iconList[1].unactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/message">
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ? iconList[2].active : iconList[2].unactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/user">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? iconList[3].active : iconList[3].unactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <div><img src="/assets/home_unactive.png" alt=""></div>
  </div>
</template>

<script>
import HomeActive from '../../assets/home_active.png';
import HomeUnactive from '../../assets/home_unactive.png';
import FindActive from '../../assets/find_active.png';
import FindUnactive from '../../assets/find_unactive.png';
import MessageActive from '../../assets/message_active.png';
import MessageUnactive from '../../assets/message_unactive.png';
import UserActive from '../../assets/user_active.png';
import UserUnactive from '../../assets/user_unactive.png';

export default {
  name: 'HomeTabBar',
  data() {
    return {
      active: 0,
      iconList: [
        {
          active: HomeActive,
          unactive: HomeUnactive,
        },
        {
          active: FindActive,
          unactive: FindUnactive,
        },
        {
          active: MessageActive,
          unactive: MessageUnactive,
        },
        {
          active: UserActive,
          unactive: UserUnactive,
        },
      ],
    };
  },
  components: {},
  methods: {
    onChange(res) {
      console.log(res);
    },
  },
};
</script>
