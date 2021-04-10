<template>
<section>
    <header>
        <div class="wrapper">
            <div class="left-side">
                <div class="logo">
                    <p> <b> brezzi </b>Store</p>
                </div>

            </div>
            <div class="right-side">
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-cart"></i>
                <i class="far fa-heart"></i>
                <i @click="menuSwitch()" v-if="!state.menuVisible"  class="fas fa-bars"></i>
                <i @click="menuSwitch()" v-if="state.menuVisible" class="fas fa-times"></i>
            </div>
        </div>
    </header>
    <div class="menu">
       <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Features</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</section>
</template>

<script>

export default {
  data() {
    return {
        state : this.$store.state
    }
  },methods: {
    menuSwitch (){
        this.state.menuVisible = !this.state.menuVisible;
        this.$store.commit('showMenu')
    }
  },

}
</script>

<style lang="scss" scoped>


    header{
        position: fixed;
        width: 100%;
        top:0;
        background-color: white;
        @include flex(center);
        .wrapper{
        @include flex(space-between);
            width : 90%;
            height: 80px;
            font-family : $font1;
            .left-side{
                @include flex(space-between);
                width:62%;
                flex-wrap: nowrap;
                .logo{
                    font-size: 26px;
                }
            }
            .right-side{
                @include flex(space-between);
                .fas,.far{
                   padding: 10px;
                    transition:$hoverEffect ;
                    cursor: pointer;
                    font-size:20px;
                    &:hover{
                    color: $iconHover;
                    }
                }
                    .fa-times{
                    font-size:25.5px;
                      &:hover{
                        color: rgb(226, 114, 114);
                      }
                    }
            }
        }
    }

.menu{
    position: fixed;
    display: flex;
    right: 0;
    justify-content: center;
    top: 80px;
    z-index: -1;
    width: 200px;
    background-color:white;
    height:100%;

    ul{
        padding: 10px;
        height:200px;
        li{
        list-style: none;
        padding: 12px;

        }
    }
}
</style>