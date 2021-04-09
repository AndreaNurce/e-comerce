<template>
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
</template>

<script>

export default {
  data() {
    return {
        state : this.$store.state
    }
  },methods: {
    menuSwitch (){
        this.state.menuVisible = !this.state.menuVisible
    }
  },

}
</script>

<style lang="scss" scoped>


    header{
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
</style>