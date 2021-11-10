<template>
  <header class="h-96 relative overflow-hidden">
    <img
      class="w-full h-full absolute header__bg"
      :src="require('@/assets/images/view_banner.png')"
      alt=""
    />
    <div class="content m-auto">
      <h1 class="text-white">景點</h1>
      <button class=" w-28 h-12 inline-flex
          justify-center items-center bg-white
          rounded-full mr-3 hover:shadow-lg"
          v-for="data in btnData" :key="data">
        <p v-html="data.text" class="mr-2 text-gray"></p>
        <img :src="data.iconSrc" alt="" />
        <img :src="data.iconSrcActive" v-if="false" alt="" />
      </button>
      <div class="mt-4">
        <input class="w-[468px] h-14" type="text" placeholder="輸入想去的地區">
        <input type="text" placeholder="輸入景點名稱">
        <button>
          <img src="" alt="">
          <p>搜尋</p>
        </button>
      </div>
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
.header__bg {
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
