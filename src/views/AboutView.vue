<template>
<div class="container p-5">
  <h2 class="fw-bold fs-lg text-black bg-secondary">About</h2>

<div class=" row d-flex justify-content-center justify-content-between">
<div v-for="product in pictures" class="col-md-2 card d-flex" :key="product.id">
<div>
  <div class="card-header ">
  <h5 class="card-title mt-0">{{product.title}}</h5>
  <p class="card-text">{{product.category}}</p>
  </div>
  <div class="card-body">
  <img class="img-fluid image m-auto" :src="product.img" :alt="product.title">
    <!-- <p class="card-text description productdesc">{{product.product_description}}</p> -->
    <p class="card-text">{{product.price}}</p>
    <!-- <router-link :to="{name: 'cart',params:{id:product.product_id}}"> <button class="cart" @click="addToCart">add to cart</button></router-link>
    <router-link :to="{name:'SingleProduct',params:{id:product.product_id}}">
    <button>View</button>
    </router-link> -->
</div>
</div>
<div class="row-12">
<div  v-for="card in about" :key="card.id" class="carding">
  <div class="row">
    <div class="">
      <p>{{card.id}}</p>
    </div>
      <div class="card-body">
        <p>{{card.aboutpara}}</p>
      </div>
  </div>
</div>
</div>
    </div>
  <div class="row margin-top">
    <div class="col-sm-12 block-contain">
      <div class="row">
        <div class="col-sm-12 col-md-6">
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import AboutView from '@/views/AboutView';

export default {
  components: {
    AboutView
  },
  computed: {
    about() {
      return this.$store.state.about;
    },
      pictures() {
      return this.$store.state.pictures;
    }
  }
}


</script>

<style scoped>

.carding{
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
color: black;
font-family: San-Francisco;
transition: 0.4s ease-out;
margin-bottom: 10px;

  }
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
.container {
  text-align: center;
  color: white;
  background-color: #f0f0f0;
  overflow-x: hidden;
  overflow:auto;
}
h1 {
  margin-top: 40px;
}
.margin-top {
  margin-top: 10px;
}
.block1 {
  height: 300px;
  background-color: blue;
  border: 5px solid #f0f0f0;
  color: black;
  background-image: url(https://i.postimg.cc/5yv5mmjx/aaron-burden-QJDz-YT-K8-Xg-unsplash.jpg);
  background-position: fixed !important;
  object-fit: cover center/contain;
  background-position: center;
}
.block2 {
height: 300px;
background-color: rgb(242,227,228);
border: 5px  black;

background-image: url(https://postimg.cc/HjJXZ46Z) !important;
background-position: fixed !important;
object-fit: cover !important;
background-attachment: fixed !important;
font-weight: bolder;
}
.block-contain {
  height: 620px;
}
.block3 {
  height: 620px;
  background-color: #5bbfb4;
  border: 5px solid #f0f0f0;
  background-image: url(https://i.postimg.cc/c1V8cYQz/mark-adriane-mu-S2-Rra-YRu-Q-unsplash.jpg) !important;
  object-position: 0 0;
  background-position: fixed !important;
  object-fit: cover;
}
.block6 {
  height: 620px;
  background-color: transparent;
  background-color: lightblue;
  border: 5px solid #f0f0f0;
  object-position: 0 1 0 1 0 0;
  background-image: url() !important;
  background-position: fixed !important;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  
}
.block7 {
  height: 150px;
  background-color: #5bbfb4;
  border: 5px solid #f0f0f0;
    background-image: url(https://i.postimg.cc/c1hhJFwS/nick-fewings-f2-Bi-VBs71-M-unsplash.jpg);
  object-position: 0 0;
  background-position: fixed !important;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
.block8 {
  height: 150px;
  background-color: #42a8c8;
  border: 5px solid #f0f0f0;
  background-image: url(https://i.postimg.cc/c1hhJFwS/nick-fewings-f2-Bi-VBs71-M-unsplash.jpg) !important;
  object-position: 0 0;
  background-position: fixed !important;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;

}
.block9 {
  height: 300px;
  background-color: #5bbfb4;
  margin-top: 10px;
  border: 5px solid #f0f0f0;
    background-image: url(https://i.postimg.cc/c1hhJFwS/nick-fewings-f2-Bi-VBs71-M-unsplash.jpg);
  object-position: 0 0;
  background-position: fixed !important;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
}


.jumbotron {
    color: #2c3e50;
    background: #ecf0f1;
}

.emptyy{
  height: 100;
}


/* From uiverse.io by @adamgiebl */


</style>

