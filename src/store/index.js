import { createStore } from "vuex";

const store = createStore({
  state: {
    menuVisible: false,
    currentNav: "",
  },
  mutations: {
    openMenu(state, current) {
      state.currentNav = current;
      document.querySelector("#menu").style.marginRight = "0px";
      document.querySelector("#wrapper").style.marginLeft = "-200px";
    },
    closeMenu() {
      document.querySelector("#menu").style.marginRight = "-200px";
      document.querySelector("#wrapper").style.marginLeft = "0px";
    },
  },
});

export default store;
