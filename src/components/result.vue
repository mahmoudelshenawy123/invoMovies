<template>
   <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
        <div class="results__item">
            <router-link :to="{name:'movie',params:{id:resultData.imdbID}}" :data-imdbID='resultData.imdbID' class="results__item-link"></router-link>
            <div class = "results__item-top">
                <img :src="resultData.Poster" :alt="resultData.Title" class="img-fluid results__item-img">
                <div class="results__item-category">{{resultData.Type}}</div>
            </div>
            <div class="results__item-botom">
                <span class="results__item-year">{{resultData.Year}}</span>
                <h2 class="results__item-title">{{resultData.Title}}</h2>
            </div>
        </div>
    </div>  
</template>

<script>

export default ({
    name:'result',
    props:['resultData']
})
</script>


<style scoped>
.results__item{
    background-color:#465870;
    position: relative;
    height:100%
}
.results__item-link{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
}
.results__item-top{
    position: relative;
}
.results__item-category{
    position: absolute;
    background-color: #42b983;
    bottom: 10px;
    left: 5px;
    color: white;
    padding: 0 6px;
    font-size: 14px;
    border-radius: 5px;
    text-transform:capitalize;

}
.results__item-title{
    color:white;
    font-size:22px;
    font-weight:bold;
    text-transform:capitalize;
}
.results__item-year{
    font-weight:bold;
    color:#7b8ea5;
}
.results__item-img{
    width: 100%;
    height: 300px;
}
.results__item-botom{
    padding: 20px 10px;
}
</style>