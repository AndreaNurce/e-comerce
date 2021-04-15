<template>
    <div id="logIn">
        <form action="">
            <input type="email" required placeholder="Email">
            <input type="password" required placeholder="Password">
            <button>Sign In</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #logIn{
        margin-top:50%;

        form{
            display: flex;
            justify-content: center;
            flex-direction: column;
            input{
                border-top:none;
                border-left:none;
                border-right:none;
                outline-color:$iconHover;
            }
            button{
                border: none;
            }
            *{
                padding:10px 5px;
                margin:10px 0;
            }
        }
    }
</style>