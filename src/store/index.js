import { createStore } from 'vuex'


const store = createStore({
  state:{
    menuVisible : false
  },
  mutations :{
    showMenu(state){
      if(state.menuVisible){
        document.querySelector('#menu').style.marginRight = '0px'
        document.querySelector('#wrapper').style.marginRight = '200px'
        
      }else{
        document.querySelector('#menu').style.marginRight = '-200px'
        document.querySelector('#wrapper').style.marginRight = '0px'

      }
    }
  }
})

export default store


