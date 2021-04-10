import { createStore } from 'vuex'


const store = createStore({
  state:{
    menuVisible : false
  },
  mutations :{
    showMenu(state){
      if(state.menuVisible){
        document.querySelector('#wrapper').style.marginRight = '200px'
      }else{
        document.querySelector('#wrapper').style.marginRight = '0px'
      }
    }
  }
})

export default store


