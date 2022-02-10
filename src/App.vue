<template>
  <div id="app">
    <Navigation />
    <Header />
    <SearchDetail :data="searchData" />
    <Footer />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import { useStore } from "vuex";
import Navigation from "@/components/ui/navigation.vue";
import Header from "@/components/ui/header.vue";
import Footer from "@/components/ui/footer.vue";
import SearchDetail from "@/views/searchDetail.vue";
import { getScenicSpot, getRestaurant, getHotel, getActivity } from "@/api/methods";

export default {
  components: {
    Navigation,
    Header,
    Footer,
    SearchDetail,
  },
  setup() {
    const store = useStore();
    //  初次進入緩存當前頁面
    if (!sessionStorage.getItem("activePage")) {
      store.commit("setActivePage", "spot");
    }
    const searchData = ref([]);
    const updateSearchDetail = (activePage) => {
      store.commit("setActivePage", activePage);
      switch (activePage) {
        case "spot":
          getScenicSpot().then((res) => {
            searchData.value = res.data;
          });
          break;
        case "restaurant":
          getRestaurant().then((res) => {
            searchData.value = res.data;
          });
          break;
        case "hotel":
          getHotel().then((res) => {
            searchData.value = res.data;
          });
          break;
        case "activity":
          getActivity().then((res) => {
            searchData.value = res.data;
          });
          break;
      }
    };
    provide("updateSearchDetail", updateSearchDetail);
    updateSearchDetail(store.getters.getActivePage);
    return {
      searchData,
    };
  },
};
</script>
