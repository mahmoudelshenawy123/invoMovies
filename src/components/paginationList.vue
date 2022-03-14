<template>
    <ul class="pagination">
        <li v-for="page in pages" :key ="page" class="pagination__item">
            <a class="pagination__link" :class="{'active':page== activePage}" @click="getPageNumber(page)">{{page}}</a>    
        </li>    
    </ul> 
</template>

<script>

import result from "@/components/result.vue"
export default ({
    name:'results',
    data:function(){
        return {
            activePage:1
        }
    },
    methods:{
        getPageNumber:function(page){
            this.activePage = page
            this.$emit('pageNumber',page)
        }
    },
    props:['pages'],
    components:{
        result
    }
})
</script>


<style scoped>
.pagination{
    display :flex;
    overflow-x:auto ;
}
.pagination__item{
    width: 30px;
    height: 30px;
    margin: 8px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
}
.pagination__link{
    margin-bottom: 10px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    color:white;
    background: #fca311;
    transition: all 0.3s ease-in-out;
}
.pagination__link.active{
    background: #e63946;
    color:#ffffff
}
.pagination__item:hover .pagination__link{
    color: #000000;
    transition: all 0.3s ease-in-out;
}
</style>