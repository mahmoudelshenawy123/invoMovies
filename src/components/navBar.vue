<template>
    <nav class="navbar navbar-expand-lg navbar--background-color navbar-dark">
        <router-link :to="{name:'Home'}" class="navbar-brand m-auto" ><span class="navbar__logo-span">INVO</span>Movies</router-link>
    </nav> 
</template>

<script>

export default ({
    name:'navBar',
})
</script>

<style>
.navbar--background-color{
    background-color:#2f4365;
}
.navbar-brand{
    font-weight: bold;
    font-size: 30px!important;
    padding: 0;
}
.navbar__logo-span{
    color:#42b983;
}

</style>