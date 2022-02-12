<template>
  <span class="bg-gray-light text-sm rounded py-1 px-2 font-light mr-2" v-html="text"></span>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  props: ["text"],
  setup(props) {
    const sotre = useStore();
    const activePage = ref(sotre.getters.getActivePage);
    const defaultHashTag = reactive({
      spot: "景點類",
      restaurant: "餐飲類",
      hotel: "旅宿類",
      activity: "活動類",
    });
    return {
      text: props.text ? props.text : defaultHashTag[activePage.value],
    };
  },
};
</script>
