<template>
<div class="container min-vh-100 p-5">

  <h4 class="fw-bold display-6">Admin page</h4>

  <router-link to="/deleteacc">
      <div class="">
          <button class="float-start">Delete Account</button>
      </div>
    </router-link>


 
    <button type="button" class="float-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Update your account
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Update your account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
        <div class="modal-body">
      </div>
      
      <div class="modal-footer">
        
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  <router-link to="/">
      <div class="">
          <button class="float-end">Logout</button>
      </div>
    </router-link>


<div><input type="text" id="" v-model="search" placeholder="Search" class="w-100 my-5 justify-content-center"></div>
<div class=" row d-flex justify-content-center justify-content-between">
<div  v-for="product in products" :key="product.id" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.img" class="img-fluid rounded-start" alt="title">
    </div>
    <div class="col-md-8 border border-black">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p>Please take care of this book and consult us if in need to loan it</p>
        <p class="card-text">{{product.BookCategory}}</p>
        <button class="btn btn-secondary">Edit</button>
        <button class="btn btn-danger"  @click="this.$store.dispatch('DeletItem',product.book_id)">delete</button>
        <button class="btn btn-primary">add</button>
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
margin-bottom: 10px;
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
