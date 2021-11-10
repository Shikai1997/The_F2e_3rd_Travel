<template>
  <div id="app">
    <Navigation />
    <Header />
    <SearchDetail />
    <Footer />
    <!-- <p class="red">人人有權享有生命</p> -->
  </div>
</template>

<script>
import JsSHA from 'jssha';
import Navigation from '@/components/ui/navigation.vue';
import Header from '@/components/ui/header.vue';
import Footer from '@/components/ui/footer.vue';
import SearchDetail from '@/views/searchDetail.vue';

export default {
  components: {
    Navigation,
    Header,
    Footer,
    SearchDetail,
  },
  setup() {
    const GetAuthorizationHeader = () => {
      const AppID = 'a5cb54fa7602434e9910b040e236e716';
      const AppKey = 'RAGsoyJTfDxd5zKp1Ckedm8YdMU';

      const GMTString = new Date().toGMTString();
      const ShaObj = new JsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update(`x-date: ${GMTString}`);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
      return { Authorization, 'X-Date': GMTString };
    };
    const fetchData = () => {
      fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON', { headers: GetAuthorizationHeader }).then((res) => {
        console.log(res.json());
      });
    };
    fetchData();
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
