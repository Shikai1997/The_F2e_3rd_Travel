<template>
  <header class="h-96 relative overflow-hidden">
    <img
      class="w-full h-full absolute header__bg"
      :src="pageData.backgroundImage"
      alt=""
    />
    <div class="content m-auto">
      <h1 class="text-white" v-html="pageData.title"></h1>
      <router-link
        :to="{ name: data.title_En }"
        class="
          w-[108px]
          h-12
          inline-flex
          justify-center
          items-center
          bg-white
          rounded-full
          mr-3
          hover:shadow-lg
        "
        :class="[data.title_En, { active: data.title_En === route.name }]"
        v-for="data in btnData"
        :key="data"
      >
        <p v-html="data.title" class="mr-2 text-gray"></p>
      </router-link>
      <div class="flex mt-4 whitespace-nowrap">
        <label for="search">
          <img
            class="inline-block absolute z-10 mt-4 ml-3"
            :src="require('@/assets/images/icons/icon_location.svg')"
            alt=""
          />
        </label>
        <input
          class="
            w-[468px]
            h-14
            mr-3
            rounded-lg
            focus:outline-none
            shadow-lg
            text-gray-dark text-sm
            pl-11
            relative
          "
          type="text"
          id="search"
          placeholder="輸入想去的地區"
        />
        <input
          class="
            w-[412px]
            h-14
            mr-3
            rounded-lg
            focus:outline-none
            shadow-lg
            text-gray-dark text-sm
            pl-5
          "
          type="text"
          placeholder="輸入景點名稱"
        />
        <button
          class="
            w-40
            h-14
            bg-red
            hover:bg-red-light
            inline-flex
            justify-center
            items-center
            rounded-lg
            text-white text-xl
            shadow-lg
          "
        >
          <img class="mr-2" :src="require('@/assets/images/icons/icon_search.svg')" alt="" />
          <p>搜尋</p>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed,reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const data = reactive({
        spot: {
          backgroundImage: require("@/assets/images/spot_banner.png"),
          title: "景點",
          title_En: "spot",
        },
        restaurant: {
          backgroundImage: require("@/assets/images/restaurant_banner.png"),
          title: "餐飲",
          title_En: "restaurant",
        },
        hotel: {
          backgroundImage: require("@/assets/images/hotel_banner.png"),
          title: "旅宿",
          title_En: "hotel",
        },
        activity: {
          backgroundImage: require('@/assets/images/activity_banner.png'),
          title: '活動',
          title_En: 'activity'
        },
      });
    const btnData = Object.values(data);
    const route = useRoute();
    const pageData = computed(() => {
      return data[route.name] || data['spot'];
    });
    return {
      btnData,
      route,
      pageData,
      data
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
.spot,
.restaurant,
.hotel,
.activity {
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
  }
  &.active,
  &:hover {
    background-color: #b72323;
    p {
      color: #fff;
    }
    &.spot {
      &::after {
        background-image: url("../../assets/images/icons/icon_btn_view_active.png");
      }
    }
    &.restaurant {
      &::after {
        background-image: url("../../assets/images/icons/icon_btn_restaurant_active.png");
      }
    }
    &.hotel {
      &::after {
        background-image: url("../../assets/images/icons/icon_btn_hotel_active.png");
      }
    }
    &.activity {
      &::after {
        background-image: url("../../assets/images/icons/icon_btn_activity_active.png");
      }
    }
  }
}
.spot {
  &::after {
    background-image: url("../../assets/images/icons/icon_btn_view.png");
  }
}
.restaurant {
  &::after {
    background-image: url("../../assets/images/icons/icon_btn_restaurant.png");
  }
}
.hotel {
  &::after {
    background-image: url("../../assets/images/icons/icon_btn_hotel.png");
  }
}
.activity {
  &::after {
    background-image: url("../../assets/images/icons/icon_btn_activity.png");
  }
}
</style>
