<template>
    <section class="slider">
        <div class="slider__info">
            <h1 class="slider__title">Inception</h1>
            <p class="slider__description"> Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas.</p>
        </div>

    </section>    
</template>

<script>

export default ({
    name:'slider'
})
</script>


<style scoped>
.slider{
    background: url('../assets/cover.jpg') center center;
    background-size: cover  100%;
    height:500px;
    display: flex;
}
.slider__info{
    background: rgb(0 0 0 / 70%);
    text-align: center;
    color: white;
    margin-top: auto;
    width: 100%;
    padding: 30px 0;
}
</style>