<template>
    <header>
        <div class="wrapper">
            <div class="left-side">
                <div class="logo">
                    <h1>breezi store</h1>
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

@mixin flex($content){
        display: flex;
        align-items:center;
        justify-content: $content;
}
    header{
        @include flex(center);

        .wrapper{
        @include flex(space-between);
            width : 90%;
            height: 80px;
            .left-side{
                @include flex(space-between);
                width:65%;
                flex-wrap: nowrap;
                ul{
                    li{
                        list-style: none;
                        display: inline-block;
                        padding: 15px;
                    }
                }
            }
            .right-side{
                i{
                    padding: 10px;
                }
            }
        }
    }
</style>