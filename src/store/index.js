import { createStore } from 'vuex'


const store = createStore({
  state:{
    menuVisible : false
  },
  mutations :{
    showMenu(state){
      if(state.menuVisible){
        document.querySelector('#wrapper').style.marginTop = '100px'
      }else{
        document.querySelector('#wrapper').style.marginTop = '0px'
      }
    }
  }
})

export default store


