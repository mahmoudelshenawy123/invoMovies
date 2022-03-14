<template>
    <section class="search">
        <div class="container">

            <form class="form-group d-flex" @submit.prevent="getSearchedData()">
                <input type="text" class="form-control search__text-input" placeholder="What are you looking for?" v-model="searchedText">
                <input type="submit" class="btn search__submit-input" value="Search">
            </form>
        </div>
    </section>    
</template>

<script>

export default ({
    name:'search',
    data :function(){
        return{
            searchedText:'',
            searchedItems:[],
        }
    },
    computed:{
        pages:function(){
            return this.page
        }
    },
    watch:{
        pages:function(){
            this.getSearchedData()  
        }
    },
    props:['page'],
    methods:{
        getSearchedData:function(){
            console.log('asddassa',this.pages)
            fetch(`https://www.omdbapi.com/?s=${this.searchedText}&apikey=387f6923&page=${this.pages}`)
            .then(res=>res.json())
            .then(data=> 
            {
                this.searchedItems =data;
                console.log(this.page)
                console.log(data)
                console.log(this.searchedItems.Search)
                if(data.Response =='False'){
                    this.$toasted.show(data.Error,{
                    type:'error',
                    duration:1000,
                })
                }
                this.$emit('searchedData',this.searchedItems)
            })
            .catch(err => console.log(err))
            
        }
    }
})
</script>


<style scoped>
    .search{
        margin: 50px 0;
    }
    .search__text-input{
        background-color: #4A5D76;
        width: 90%;
        border: 0;
        color:white
    }
    .search__text-input::placeholder{
        color:white;
    }
 
    .search__text-input:focus{
        background-color: #4A5D76;
        width: 90%;
        border: 0;
        color:white;

    }
    .search__submit-input{
        margin-left: auto;
        background-color: #438165;
        color: white;
    }
    .search__submit-input:focus{
        box-shadow: none;
    }
</style>