<template>
    <header>
        <div class="wrapper">
            <div class="left-side">
                <div class="logo">
                    <p> <b> brezzi </b>Store</p>
                </div>
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
export default {

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
                ul{
                    li{
                        cursor: pointer;
                        list-style: none;
                        display: inline-block;
                        padding: 10px;
                        font-size: 20px;
                        transition:$hoverEffect ;
                     &:hover{
                        color: $iconHover;
                        }
                    }
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