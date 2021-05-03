import { createStore } from "vuex";

const store = createStore({
  state: {
    menuVisible: false,
    currentNav: "",
    collectionView :'',
  },
  mutations: {
    openMenu(state, current) {
      state.currentNav = current;
      document.querySelector("#menu").style.marginRight = "0px";
      document.querySelector("#wrapper").style.marginLeft = "-300px";
    },
    closeMenu() {
      document.querySelector("#menu").style.marginRight = "-300px";
      document.querySelector("#wrapper").style.marginLeft = "0px";
    },
  },
});

export default store;
3