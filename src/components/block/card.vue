<template>
  <div
    class="w-[300px] h-[305px] bg-white mb-8 rounded-lg shadow-lg overflow-hidden hover:outline-red"
  >
    <div class="h-48 overflow-hidden">
      <img
        v-if="data.Picture.PictureUrl1"
        class="w-full h-full"
        :src="data.Picture.PictureUrl1"
        alt=""
        @error="replaceDefaultImages"
      />
      <img v-else class="w-full h-full" :src="require('@/assets/images/noPicture.png')" alt="" />
    </div>
    <div class="mt-3 mx-4">
      <h3 class="text-base text-gray-dark mb-2 truncate" v-html="data[name]"></h3>
      <div class="flex mb-3">
        <img
          class="w-5 h-5"
          :src="require('@/assets/images/icons/icon_location_blue.svg')"
          alt=""
        />
        <a class="text-sm text-blue underline" href="#" v-html="city"></a>
      </div>
      <HashTag />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import HashTag from "@/components/block/hashTag.vue";

export default {
  components: {
    HashTag,
  },
  props: ["cardData", "cardName"],
  setup(props) {
    const store = useStore();
    const citys = store.getters.getCitys;
    const replaceDefaultImages = (e) => {
      e.target.src = require("@/assets/images/noPicture.png");
    };
    const getCity = () => {
      if (!props.cardData.Address) {
        return "暫無資料";
      }
      const val = citys.find((city) => {
        return city === props.cardData.Address.substring(0, 3);
      });
      return val ? props.cardData.Address.substring(0, 3) : "暫無資料";
    };
    getCity();
    return {
      data: props.cardData,
      name: props.cardName,
      city: getCity(),
      replaceDefaultImages,
    };
  },
};
</script>
