<template>
  <div id="app">
    <Navigation />
    <Header />
    <div class="content"></div>
    <Footer />
    <!-- <p class="red">人人有權享有生命</p> -->
  </div>
</template>

<script>
import Navigation from '@/components/ui/navigation.vue';
import Header from '@/components/ui/header.vue';
import Footer from '@/components/ui/footer.vue';

export default {
  components: {
    Navigation,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.content{
  background: #7bf;
  height: 1000px;
}
</style>
