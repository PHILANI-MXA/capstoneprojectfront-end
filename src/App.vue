<template>
<NavComponent/>
<footer-comp/>
</template>


<script>
import FooterComp from './components/FooterComp.vue';
import NavComponent from './components/NavComponent.vue';

 export default {
  name: '',
  components: {
    NavComponent,
    FooterComp
}
 }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body{
    background-color: rgb(242,227,228);
}
</style>
