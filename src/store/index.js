import { createStore } from 'vuex'


const store = createStore({
  state:{
    menuVisible : false
  },
  mutations :{
    openMenu(){
        document.querySelector('#menu').style.marginRight = '0px'
        document.querySelector('#wrapper').style.marginRight = '200px'
    },closeMenu(){
      document.querySelector('#menu').style.marginRight = '-200px'
      document.querySelector('#wrapper').style.marginRight = '0px'
    }
}})

export default store


