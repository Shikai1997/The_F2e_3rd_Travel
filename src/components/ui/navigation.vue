<template>
  <nav
    class="
      h-20
      flex
      justify-center
      items-center
      fixed
      top-0
      w-full
      z-50
    "
    :class="[activeNavigation ? 'bg-white shadow-lg': null]"
  >
    <div class="xl:container flex justify-between items-center">
      <a class="cursor-pointer">
        <img
          v-show="!activeNavigation"
          :src="require('@/assets/images/logo_white.png')"
          alt=""
        />
        <img
          v-show="activeNavigation"
          :src="require('@/assets/images/logo_blue.png')"
          alt=""
        />
      </a>
      <button
        class="
          w-28
          h-9
          flex
          justify-center
          items-center
          rounded-md
          bg-white
          text-sm text-gray
          border-2 border-white
          transition
          duration-200
          hover:border-red-500 hover:text-red
          shadow-md
        "
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <img
          v-show="!isHovering"
          :src="require('@/assets/images/icons/icon_like_gray.png')"
          alt=""
          class="pr-1"
        />
        <img
          v-show="isHovering"
          :src="require('@/assets/images/icons/icon_like_red.png')"
          alt=""
          class="pr-1"
        />
        <span>我的最愛</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isHovering = ref(false);
    const activeNavigation = ref(false);
    const scrollTop = 60;
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollTop) {
        activeNavigation.value = true;
        return;
      }
      activeNavigation.value = false;
    });
    return {
      isHovering,
      activeNavigation,
    };
  },
};
</script>
