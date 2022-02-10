<template>
  <section class="bg-gray-bg pt-14">
    <div class="w-[1260px] m-auto">
      <div>
        <h2 class="text-xl text-gray-dark flex items-center mb-6">搜尋結果</h2>
        <div class="flex justify-between flex-wrap">
          <Card v-for="data in dataList" :key="data" :cardData="data" :cardName="cardTitle" />
        </div>
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Card from "@/components/block/card.vue";
import Pagination from "@/components/block/pagination.vue";

export default {
  components: {
    Card,
    Pagination,
  },
  props: ["data"],
  setup(props) {
    const store = useStore();
    const cardTitle = computed(() => {
      let value = "";
      switch (store.getters.getActivePage) {
        case "spot":
          value = "ScenicSpotName"
          break;
        case "restaurant":
          value = "RestaurantName"
          break;
        case "hotel":
          value = "HotelName"
          break;
        case "activity":
          value = "ActivityName"
          break;
      }
      return value;
    });
    return {
      dataList: computed(() => props.data),
      cardTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  &:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 28px;
    background-color: #2a48ff;
    margin-right: 4px;
  }
}
</style>
