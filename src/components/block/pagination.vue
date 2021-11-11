<template>
  <ul class="pt-5 flex justify-center pb-20">
    <li class="btn arrow">
      <div class="arrow__btn"></div>
    </li>
    <li class="btn hover:bg-blue-light hover:text-blue hover:outline-blue">1</li>
    <li class="btn hover:bg-blue-light hover:text-blue hover:outline-blue">2</li>
    <li class="btn hover:bg-blue-light hover:text-blue hover:outline-blue">3</li>
    <li class="btn hover:bg-blue-light hover:text-blue hover:outline-blue">4</li>
    <li class="btn hover:bg-blue-light hover:text-blue hover:outline-blue">5</li>
    <li class="btn arrow">
      <div class="arrow__btn rotate-180"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: '',

};
</script>

<style lang="scss" scoped>
.btn{
  @apply w-11 h-11 bg-white flex justify-center items-center text-gray-dark rounded-lg mx-2
    cursor-pointer;
  &:hover{
    @apply shadow-lg
  }
}
.arrow{
  &__btn{
    width: 20px;
    height: 20px;
    background-image: url('../../assets/images/icons/icon_arrow_gray.png');
  }
  &:hover{
    @apply bg-red;
    .arrow__btn{
      background-image: url('../../assets/images/icons/icon_arrow_white.png');
    }
  }
}
</style>
