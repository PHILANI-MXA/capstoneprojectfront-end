<template>
<div class="container p-3">
  <h4 class="bg-secondary">Rainbow Library</h4>
  <div class="col">
    <div class="row center">
  <div><input type="text" id="" v-model="search" placeholder="Search" class="w-80 my-5 justify-content-center align-items-center">
    </div>
  </div>
</div>
      <div class="row">
          <div class="col-sm-4 block1">
      <h4 class="d-block justify-items-center text-center"></h4>
              <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/nhts7Jv9/desola-lanre-ologun-Ig-UR1i-X0mq-M-unsplash.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/WpgJX8sk/thought-catalog-o0-Qqw21-0-NI-unsplash.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/NMVF0qsM/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg" class="d-block w-100" alt="responsive carou">
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
    </div>
        <div class="col-sm-8 block2 overflow-auto text-black">
          <h2></h2>
        </div>
    </div>
    <div class="row">
      <div class=" empty h-100 container w-100"></div>
      <div class="container">

	<div class="container__progressbars">

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
			</svg>
			<span class="progressbar__text shadow-html">Computers</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
			</svg>
			<span class="progressbar__text shadow-css">Labs</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
			</svg>
			<span class="progressbar__text shadow-scss">Exams</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
			</svg>
			<span class="progressbar__text shadow-js">Databases</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
			</svg>
			<span class="progressbar__text shadow-ts">Research</span>
		</div>

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-node shadow-node"> </circle>
			</svg>
			<span class="progressbar__text shadow-node">Faculties</span>
		</div>
	</div>

</div>

<!-- My social networks (imported from another pen)-->
<div id="main-container-social" class="main-container-social"></div>
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
        </div>
        <div class="col-sm-10 col-md-3 block6">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/WpgJX8sk/thought-catalog-o0-Qqw21-0-NI-unsplash.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/WpgJX8sk/thought-catalog-o0-Qqw21-0-NI-unsplash.jpg" class="d-block w-100" alt="responsive carou">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/NMVF0qsM/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg" class="d-block w-100" alt="responsive carou">
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
  <div>
    <select name="" id="" class="my-1">
      <option value="" disabled hidden selected>Books</option>
      <option value="bio"><a href="https://supersport.com/football/premier-league/logs/"></a>Biographies</option>
      <option value="all">All Books</option>
      <option value="none">None</option>

  </select>
    <select name="" id="" aria-placeholder="search by category">
      <option value="" disabled hidden selected>Categories</option>
      <option value="love">Love stories</option>
      <option value="children<">Children's books</option>
      <option value="Trues">True Story</option>
      <option value="Bio">Biographies</option>
      <option value="Fntsy">Fantasy</option>
  </select>
  </div>
  <h4 class="text-black">Our core values</h4>
  <ul class="w-100  list-unstyled folder">
  <li><button class="w-100 list-unstyled text-black fw-bold">Love</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Caring</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Innovation</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Communication</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Support</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Honesty</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Respect</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Diversity</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Social Justice</button></li>
  <li><button class="w-100 list-unstyled text-black fw-bold">Community Development</button></li>
  </ul>
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


</script>

<style lang="scss" scoped>

  .input{
    align-content: center;
    margin: auto;
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
background-image: url(https://i.postimg.cc/DzXnj0kZ/markus-spiske-f-Ynyfx3-UBxk-unsplash.jpg) !important;
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

$color-black: hsl(0, 0%, 5%);
$color-color: hsl(0, 0%, 100%);

$color-html: hsl(15, 100%, 60%);
$color-css: hsl(200, 100%, 60%);
$color-scss: hsl(300, 100%, 60%);
$color-js: hsl(60, 100%, 60%);
$color-ts: hsl(220, 100%, 60%);
$color-node: hsl(110, 100%, 60%);


$porcent-html: 100;
$porcent-css: 100;
$porcent-scss: 100;
$porcent-js: 100;
$porcent-ts: 100;
$porcent-node: 100;

@function strokeDashoffset($num) {
	@return 440 - (440 * $num) / 100;
}

* {
	box-sizing: border-box;
}


.container__progressbars {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	min-width: 270px;
	width: 100%;
}

.progressbar {
	position: relative;
	width: 170px;
	height: 170px;
	margin: 1em;
	transform: rotate(-90deg);
}

.progressbar__svg {
	position: relative;
	width: 100%;
	height: 100%;
}

.progressbar__svg-circle {
	width: 100%;
	height: 100%;
	fill: none;
	stroke-width: 10;
	stroke-dasharray: 440;
	stroke-dashoffset: 440;
	stroke: hsl(0, 0%, 100%);
	stroke-linecap: round;
	transform: translate(5px, 5px); // stroke-width / 2
}

.shadow {
	&-html {
		filter: drop-shadow(0 0 5px $color-html);
	}
	&-css {
		filter: drop-shadow(0 0 5px $color-css);
	}
	&-scss {
		filter: drop-shadow(0 0 5px $color-scss);
	}
	&-js {
		filter: drop-shadow(0 0 5px $color-js);
	}
	&-ts {
		filter: drop-shadow(0 0 5px $color-ts);
	}
	&-node {
		filter: drop-shadow(0 0 5px $color-node);
	}
}

.circle {
	&-html {
		animation: anim_circle-html 1s ease-in-out forwards;
	}
	&-css {
		animation: anim_circle-css 1s ease-in-out forwards;
	}
	&-scss {
		animation: anim_circle-scss 1s ease-in-out forwards;
	}
	&-js {
		animation: anim_circle-js 1s ease-in-out forwards;
	}
	&-ts {
		animation: anim_circle-ts 1s ease-in-out forwards;
	}
	&-node {
		animation: anim_circle-node 1s ease-in-out forwards;
	}
	
}

.progressbar__text {
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 0.25em 0.5em;
	color: hsl(0, 0%, 100%);
	font-family: Arial, Helvetica, sans-serif;
	border-radius: 0.25em;
	transform: translate(-50%, -50%) rotate(90deg);
}

//  @keyframes

@keyframes anim_circle-html {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-html);
	}
}

@keyframes anim_circle-css {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-css);
	}
}

@keyframes anim_circle-scss {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-scss);
	}
}

@keyframes anim_circle-js {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-js);
	}
}

@keyframes anim_circle-ts {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-ts);
	}
}

@keyframes anim_circle-node {
	to {
		stroke-dashoffset: strokeDashoffset($porcent-node);
	}

}


</style>

