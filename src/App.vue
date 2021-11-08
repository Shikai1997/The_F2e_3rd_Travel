<template>
  <div id="app">
    <Navigation />
    <p class="red">人人有權享有生命</p>
  </div>
</template>

<script>
import Navigation from '@/components/ui/navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
.red {
  color: red;
}
</style>
