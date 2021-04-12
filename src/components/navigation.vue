<template>
        <ul>
            <li :style="{'display': displayProp}">Home</li>
            <li :style="{'display': displayProp}">Shop</li>
            <li :style="{'display': displayProp}">Features</li>
            <li :style="{'display': displayProp}">Blog</li>
            <li :style="{'display': displayProp}">About</li>
            <li :style="{'display': displayProp}">Contact</li>
        </ul>
</template>

<script>
export default {
    props : {
        displayProp: String,
    }
}
</script>

<style scoped lang="scss">
    ul{
        li{
            cursor: pointer;
            list-style: none;
            padding: 10px;
            font-size: 20px;
            transition:$hoverEffect ;
            &:hover{
            color: $iconHover;
            }
        }
    }

</style>