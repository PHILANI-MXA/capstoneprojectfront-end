<template>
<div class="container min-vh-100">

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




</style>

