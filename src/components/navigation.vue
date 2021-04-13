<template>
<div>
     <i @click="closeSideMenu()"   class="fas fa-times"></i>

        <ul>
            <li >Home</li>
            <li >Shop</li>
            <li >Features</li>
            <li >Blog</li>
            <li >About</li>
            <li >Contact</li>
        </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            store : this.$store.state
        }
    }
,methods: {
        closeSideMenu(){
            this.$store.commit('closeMenu');
        }
    },
}
</script>

<style scoped lang="scss">
    ul{
        margin-top:20px;
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

    i{
        position :absolute;
        left :10px;
        z-index: 1;
    }

    .fas,.far{
    padding: 10px;
    transition:$hoverEffect ;
    cursor: pointer;
    font-size:20px;
    &:hover{
    color: $iconHover;
    }
}

</style>