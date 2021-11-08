<template>
  <nav class="h-20 flex justify-center items-center">
    <div class="xl:container flex justify-between items-center">
      <span class="cursor-pointer">
        <img :src="require('@/assets/images/icon_logo.png')" alt="" />
      </span>
      <button
        class="
          w-28
          h-9
          rounded-md
          bg-white
          text-sm text-gray-400
          border-2 border-white
          transition
          duration-200
          hover:border-red-500 hover:text-red-500
          shadow-md
        "
      >
        <img src="" alt="" />
        <span>我的最愛</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
  background-color: #ccc;
}
</style>
