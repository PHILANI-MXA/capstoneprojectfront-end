<template>
<div class="container min-vh-100">
<h1 class="text-primary">About</h1>
      <div class="row">
          <div class="col-sm-4 block1">
      <h4 class="d-block justify-items center text-center"></h4>
    </div>
        <div class="col-sm-8 block2">
          <h2></h2>
        </div>
    </div>


  <div class="row margin-top">
    <div class="col-sm-12 block-contain">
      <div class="row">
      
        <div class="col-sm-12 col-md-6">
          <div class="row">
            <div class="col-sm-12 block3">
              <h1></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 block4">
              <h1></h1>
            </div>
            <div class="col-md-5 block5">
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-md-3 block6">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/Bb1CC4Kj/Robert-Lewa.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/SN6P0fnJ/Messi-psg.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/tgKdC8fy/mario-klassen-70-Yx-STWa2-Zw-unsplash.jpg" class="d-block w-100" alt="responsive carou">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  <div>                    <select name="" id="" class="my-1">
                            <option value="" disabled hidden selected>International</option>
                            <option value="Spain"><a href="https://supersport.com/football/premier-league/logs/"></a>Spain</option>
                            <option value="France"> France</option>
                            <option value="Germany"> Germany</option>
                            <option value="England"> England</option>
                             <option value="South Africa"> South Africa</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Scotland"> Scotland</option>
                            <option value="International">Netherlands</option>
                        </select>
                          <select name="" id="">
                            <option value="" disabled hidden selected>Leagues</option>
                            <option value="EPL">English Premier League</option>
                            <option value="Championship">Championmship</option>
                            <option value="PremierShip">DSTV premiership</option>
                            <option value="Belgian">First Division</option>
                            <option value="Bundasliga"> Bundasliga</option>
                            <option value="SerieA<"> Serie A</option>
                            <option value="La-liga"> La Liga</option>
                            <option value="Ligue1">Ligue 1</option>
                            <option value="eredivisie">Eredivisie</option>
                        </select>
                        </div>

                        <h6 class="my-1 text-danger">Transfer Market <br>Trending <br>Football Transfers <br>Rumours <br>Market Value <br>Latest Transfers <br>Loan Players</h6>
                        <p class="text-bold"><strong> The transfer market is the arena in which football players are available for transfer to clubs. The transfer market consists of a list of players available for transfer, and also the money moving between clubs as they contest to purchase and sell these players</strong>.</p>

</div>

<div class="col-sm-12 col-md-3">
          <div class="row">
            <div class="col-sm-12 block7">
              <h1></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 block8">
              <h1></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 block9">
              <h1></h1>
            </div>
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

  img{
    height: 400px;
    width: 400px;
  }

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

