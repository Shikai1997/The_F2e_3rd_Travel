import { createStore } from "vuex";

export default createStore({
  state: {
    citys: [
      "臺北市",
      "新北市",
      "桃園市",
      "臺中市",
      "臺南市",
      "高雄市",
      "新竹縣",
      "苗栗縣",
      "彰化縣",
      "南投縣",
      "雲林縣",
      "嘉義縣",
      "屏東縣",
      "宜蘭縣",
      "花蓮縣",
      "台東縣",
      "澎湖縣",
      "金門縣",
      "連江縣",
      "基隆市",
      "新竹市",
      "嘉義市",
    ],
    activePage: '',
  },
  mutations: {
    setActivePage(state,val) {
      console.log(val);
      state.activePage = val;
    }
  },
  actions: {},
  getters: {
    getCitys(state) {
      return state.citys;
    },
    getActivePage(state) {
      return state.activePage;
    }
  },
});
