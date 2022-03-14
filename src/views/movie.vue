<template>
  <div>
     <nav-bar></nav-bar>
    <!-- {{IMDbId}}dassda -->
    <section class="movie">
      <div class="container">
        <h1 class="movie__title">{{searchedItems.Title}}</h1>
        <div class="row">
          <div class="movie__property col-lg-4 col-sm-6 col-12 d-flex ">
              <img :src="searchedItems.Poster" :alt="searchedItems.Title" class="my-0 m-auto">
          </div>
          <div class="movie__property col-lg-8 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Plot</h2>
            <p class="movie__property-content">{{searchedItems.Plot}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Year</h2>
            <p class="movie__property-content">{{searchedItems.Year}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Runtime</h2>
            <p class="movie__property-content">{{searchedItems.Runtime}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Genre</h2>
            <p class="movie__property-content">{{searchedItems.Genre}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Director</h2>
            <p class="movie__property-content">{{searchedItems.Director}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Actors</h2>
            <p class="movie__property-content">{{searchedItems.Actors}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Language</h2>
            <p class="movie__property-content">{{searchedItems.Language}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Country</h2>
            <p class="movie__property-content">{{searchedItems.Country}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Awards</h2>
            <p class="movie__property-content">{{searchedItems.Awards}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">Ratings</h2>
            <p class="movie__property-content" v-for="rate in searchedItems.Ratings" :key =rate>{{rate.Source}} : {{rate.Value}}</p>
          </div>
          <div class="movie__property col-lg-4 col-sm-6 col-12 ">
            <h2 class="movie__property-title">BoxOffice</h2>
            <p class="movie__property-content">{{searchedItems.BoxOffice}}</p>
          </div>
          <div class="movie__property col-lg-4 col-md-6 col-12 ">
            <h2 class="movie__property-title">Type</h2>
            <p class="movie__property-content">{{searchedItems.Type}}</p>
          </div>
          <div class="movie__property col-lg-4 col-md-6 col-12 ">
            <h2 class="movie__property-title">DVD</h2>
            <p class="movie__property-content">{{searchedItems.DVD}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import navBar from "@/components/navBar.vue";

export default {
  name: "Home",
  data:function (){
    return {
      IMDbId:this.$route.params.id,
      searchedItems:[]
    }
  },
  components: {
    navBar,
  },
  created(){
    fetch(`https://www.omdbapi.com/?i=${this.IMDbId}&apikey=387f6923&plot=yes`).then(res=>res.json())
    .then(data=>{this.searchedItems = data;console.log(data.Response);
      if(data.Response =='False'){
        this.$toasted.show(data.Error,{
        type:'error',
        duration:1000,
      })
      }
    })
    .catch(err=>console.log(err))
  },
};
</script>

<style scoped>
.movie__title{
  color: white;

  text-align: center;
  font-size: 54px;
}
.movie__plot{
  color:white;
}
.movie__property{
  margin: 20px 0;
}
.movie__property-title{
  color: white;
  font-size:45px;
}
.movie__property-content{
  color: white;
  font-size:18px
}
</style>