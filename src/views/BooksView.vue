<template>
<div class="container min-vh-100 p-5">

<div><input type="text" id="" v-model="search" placeholder="Search" class="w-100 my-5 justify-content-center"></div>
<div class=" row d-flex justify-content-center justify-content-between">
<div  v-for="product in products" :key="product.book_id" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.img" class="img-fluid rounded-start" alt="title">
    </div>
    <div class="col-md-8 border border-black">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.BookCategory}}</p>
        <p>Please take care of this book and consult us if in need to loan it</p>
    <router-link :to="{name:'single',params:{id:product.book_id}}">
    <button>View</button>
    </router-link>
      </div>
    </div>
  </div>
</div>

</div>
</div>
</template>

<script>
import BooksView from '@/views/BooksView';

export default {
  name: '',
  components: {
    BooksView
  },
    data() {
    return {
      search:'',
    }
  },
    computed: {
       products() {
      return this.$store.state.products?.filter(products =>{
          let isMatch = true;
          if (!products.title.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  },
  methods: {
    addToCart() {
      const item = {
        title: '',
        category: '',
        book_description: '',
        img: '',
      }
    }
  }
}


</script>

<style scoped>

.card{
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
color: black;
font-family: San-Francisco;
transition: 0.4s ease-out;
margin-bottom: 30px;
width: 40%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}

img{
  height: 150px;
  margin-top: 30px;
}

.productdesc{
    display: flex;
    height: 100%;
    flex-direction: column;
}
</style>
