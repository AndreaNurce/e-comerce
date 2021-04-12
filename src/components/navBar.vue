<template>
    <header>
        <div class="wrapper">
            <div class="left-side">
                <div class="logo">
                    <p> <b> brezzi </b>Store</p>
                </div>
                <div class="menu">
                    <navigation displayProp="inline-block" />
                </div>
            </div>
            <div class="right-side">
                <i class="fas fa-search"></i>
                <i class="fas fa-shopping-cart"></i>
                <i class="far fa-heart"></i>
            </div>
        </div>
    </header>
</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
components : {
    navigation,
}
}
</script>

<style lang="scss" scoped>


    header{
        @include flex(center);
        position: fixed;
        width: 100%;
        top:0;
        background-color: white;
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
                .fas,.far{
                   padding: 10px;
                    transition:$hoverEffect ;
                    cursor: pointer;
                    font-size:18px;
                    &:hover{
                    color: $iconHover;
                    }
                }
            }
        }
    }
</style>