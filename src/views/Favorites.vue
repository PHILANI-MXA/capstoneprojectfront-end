<template>
<div class="container min-vh-100" id="favourites">
<h2 class="display-2">Favourite books</h2>
<div class="row">
<div v-if="favourites">
<div class="about ">
<div class="card mx-auto"
 style="width: 32rem">
<div v-for="f in favourites" :key="f.book_id">
<h1 class="title">{{ f.title }}</h1>
<img :src="f.img" class="card-img-top" :alt="f.title"/>
<div class="card-body" id="" >
<p class="card-text">
</p>
<div class="product-btns">
<button  @click="this.$store.dispatch('DeletItem',f.book_id)">Remove from Favourite</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</template>
<script>
    export default {
    props: ["book_id"],
    computed: {
    favourites() {
        return this.$store.state.favourites;
    },
    },
    mounted() {
    this.$store.dispatch("getfavourites");
}
};
</script>

<style scoped>
</style>