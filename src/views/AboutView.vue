<template>
<div class="container p-3">
  <div><input type="text" id="" v-model="search" placeholder="Search" class="w-100 my-5 justify-content-center"></div>
<div class=" row d-flex justify-content-center justify-content-between"></div>
  <div class="col">
    <div class="row center">
  </div>
</div>
      <div class="row">
          <div class="col-sm-4 block1">
      <h4 class="d-block justify-items-center text-center"></h4>
 
    </div>
        <div class="col-sm-8 block2 overflow-auto text-black">
          <h2>About Us</h2>
          <p>We promote social justice</p>
          <p>Social justice is the theory that all people in society should have equal opportunities and rights. Social justice aims to ensure that every individual enjoys equal privileges without any kind of discrimination.

Social justice is extremely crucial for every individual's life and development, especially for minority groups of the population such as disabled people, the LGBTQ+ community, refugees, minority ethnic groups and women. Without social justice, there is no fairness and equality in society, only degradation of the individual's integrity and dignity.</p>

<h4>Our Library treats everyone equally and we plan to provide more services and to fight the digital divide among communities!</h4>
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

<style lang="scss" scoped>

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
//background-image: url(https://i.postimg.cc/DzXnj0kZ/markus-spiske-f-Ynyfx3-UBxk-unsplash.jpg) !important;
background-position: fixed !important;
object-fit: cover center/contain;
background-position: center;
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
</style>

