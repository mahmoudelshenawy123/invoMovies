<template>
    <section class="results">
        <div class="container">
            <div class="d-flex flex-column">
                <h2 class="results__total text-light ">Total Results : {{results.totalResults || '0'}}</h2>
                <div class="row">
                    <result v-for="(result,index) in results.Search" :key="index" :resultData="result"></result>
                </div>
                <paginationList v-if="results.totalResults" @pageNumber="getCurrentPage" :pages="pages"></paginationList>
            </div>
        </div>
    </section>    
</template>

<script>

import result from "@/components/result.vue"
import paginationList from "@/components/paginationList.vue"
export default ({
    name:'results',
    data:function(){
        return {
            page: 1
        }
    },
    methods:{
        getCurrentPage:function(data){
            this.$emit('pageNumber',data)
            this.page =data
        }
    },
    computed:{
        pages:function(){
            return Math.ceil(this.results.totalResults / 10)
        }  
    },
    props:['results'],
    components:{
        result,
        paginationList
    }
})
</script>


<style scoped>
</style>