<template>
  <section class="bg-gray-bg pt-14">
    <div class="w-[1260px] m-auto">
      <div>
        <h2 class="text-xl text-gray-dark flex items-center mb-6">搜尋結果</h2>
        <div class="flex justify-between flex-wrap">
          <Card v-for="data in dataList" :key="data.ScenicSpotID" :cardData="data" />
        </div>
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import Card from "@/components/block/card.vue";
import Pagination from "@/components/block/pagination.vue";
import { getScenicSpot } from "@/api/methods";

export default {
  components: {
    Card,
    Pagination,
  },
  setup() {
    const dataList = ref(0);
    getScenicSpot().then((res) => {
      dataList.value = res.data
      console.log(dataList.value);
    });
    return {
      dataList
    }
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
