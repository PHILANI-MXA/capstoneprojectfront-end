<template>

<div class="container">
  <div v-if="product" class="single">
    <router-link to="/books">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div v-for="item in product" :key="item.id" id="singleproduct">
      <div id="productimage">
        <img :src="item.img" :alt="item.title" id="picture"/>
      </div>
      <div id="productbox">
        <div class="productdetails">
          <h2>Product Name: {{ item.title }}</h2>
          <br>
          <h2></h2>
        </div>
        <div class="product_description">
          <h2>Details</h2>
          <h1>{{ item.book_description }}</h1>
        </div>
        <div class="productprice">
          <h5></h5>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['book_id'],
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  },

}
</script>

<style scoped>
.productimage{
  size: 50%;
}

.product_description{
  width: 100%;
  margin: auto;
}
#productimage{
  height: 60%;
  width: 60%;
  border-radius: 10%;
  margin: auto;
}

img{
  width: 200px;
  height: 200px;

}
</style>