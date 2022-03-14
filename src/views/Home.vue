<template>
  <div>
    <nav-bar></nav-bar>
    <slider></slider>
    <search @searchedData = "setSearchedData" :page="page"></search>
    <results @pageNumber="getCurrentPage" :results="searchedItems"></results>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
import slider from "@/components/slider.vue";
import search from "@/components/search.vue";
import results from "@/components/results.vue";

export default {
  name: "Home",
  data:function (){
    return {
      searchedItems:[],
      page:1
    }
  },
  methods:{
    setSearchedData : function(data){
      this.searchedItems = data;
      // console.log(data)
    },
    getCurrentPage :function(data){
      this.page = data
      // console.log('home',data)
    }
  } , 
  components: {
    navBar,
    slider,
    search,
    results,
  },
};
</script>

<style scoped>
.showw{
  width:60px;
  height:60px;
  margin:auto;
  background-color:red
}
</style>