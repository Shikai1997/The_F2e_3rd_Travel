<template>
    <section class="bg-gray-bg pt-14">
      <div class="w-[1260px] m-auto">
        <div>
          <h2 class="text-xl text-gray-dark flex items-center mb-6">搜尋結果</h2>
          <div class="flex justify-between flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Card from '@/components/block/card.vue';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
h2{
  &:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 28px;
    background-color: #2A48FF;
    margin-right: 4px;
  }
}
</style>
