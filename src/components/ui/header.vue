<template>
  <header class="h-96 relative overflow-hidden">
    <img
      class="w-full h-full absolute"
      :src="require('@/assets/images/view_banner.png')"
      alt=""
    />
    <div class="content m-auto">
      <h1 class="text-white">景點</h1>
      <button v-for="data in btnData" :key="data">
        <p v-html="data.text"></p>
        <img :src="data.iconSrc" alt="" />
        <img :src="data.iconSrcActive" alt="" />
      </button>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import iconView from '../../assets/images/icons/icon_btn_view.png';
import iconViewActive from '../../assets/images/icons/icon_btn_view_active.png';
import iconRestaurant from '../../assets/images/icons/icon_btn_restaurant.png';
import iconRestaurantActive from '../../assets/images/icons/icon_btn_restaurant_active.png';
import iconHotel from '../../assets/images/icons/icon_btn_hotel.png';
import iconHotelActive from '../../assets/images/icons/icon_btn_hotel_active.png';
import iconActivity from '../../assets/images/icons/icon_btn_activity.png';
import iconActivityActive from '../../assets/images/icons/icon_btn_activity_active.png';

export default {
  setup() {
    //  此處引入圖片，原本要使用require但被EsLint擋下來，故用此方法
    const btnData = ref([
      {
        text: '景點',
        iconSrc: iconView,
        iconSrcActive: iconViewActive,
      },
      {
        text: '餐飲',
        iconSrc: iconRestaurant,
        iconSrcActive: iconRestaurantActive,
      },
      {
        text: '旅宿',
        iconSrc: iconHotel,
        iconSrcActive: iconHotelActive,
      },
      {
        text: '活動',
        iconSrc: iconActivity,
        iconSrcActive: iconActivityActive,
      },
    ]);
    return {
      btnData,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  z-index: -1;
}
.content {
  width: 1060px;
  margin-top: 120px;
}
h1 {
  font-size: 80px;
  text-shadow: 0 3px 6px #00000029;
}
</style>
