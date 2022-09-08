<template>
 <div class="container  min-vh-100 p-2">
	<div class="screen">
		<h4>
			Please Register
		</h4>
		<div class="screen__content">
			<form class="register"  @submit.prevent="register">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
          <label for="firstName">First Name</label>
					<input type="text" class="login__input" placeholder="enter your firstname " v-model="firstName">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
          <label for="firstName">Last Name</label>
					<input type="text" class="login__input" placeholder="enter your surname" v-model="lastName">
				</div>
        		<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
          <label for="firstName">Email</label>
					<input type="text" class="login__input" placeholder="enter your email" v-model="email">
				</div>
        		<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
          <label for="firstName">Password</label>
					<input type="text" class="login__input" placeholder="enter your password" v-model="password">
				</div>
				<div>	<button class="button login__submit">
					<span class="button__lead text text-center">Register now</span>

					<i class="button__icon fas fa-chevron-right"></i>
				</button></div>
        <LoadingComponent v-show="isLoading"/>
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>
	</div>
</div>
<!-- <div id="signup" class="container min-h-100">
<h2 class="fw-bold p-2">Register</h2>
<div class="col-md-6 m-auto">
    <form class="container border border-black h-100" @submit.prevent="register">
    
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control pass m-auto" id="firstName" v-model="firstName">
  </div>
    <div class="form-group">
    <label for="lastName">Last tName</label>
    <input type="text" class="form-control pass m-auto" id="lastName" v-model="lastName">
  </div>
    <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control pass m-auto" id="email" v-model="email">
  </div>
   <div class="form-group">
    <label for="password">password</label>
    <input type="password" class="form-control pass m-auto" id="password" v-model="password">
  </div>
  <LoadingComponent v-show="isLoading"/>
    <div class="form-group">
    <label class="form-control" v-show="userMsg">{{userMsg}}</label>
  </div>
  
  <button class="btn btn-primary my-5" type="submit">Submit</button>
  
</form>
<div v-if="loader">

</div>
</div>

</div> -->



</template>

<script>
import router from '@/router';
import SignUpView from '@/views/SignUpView'
import LoadingComponentVue from '@/components/LoadingComponent.vue';

export default {
  name: '',
  components: {
    SignUpView,
    LoadingComponentVue
    },
    data() {
    return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
  },
  computed: {
    userMsg() {
      return this.$store.state.userMsg
    },
    isLoading() {
       return this.$store.state.isLoading;
     }
  },
    methods: {
        register() {
        this.$store.dispatch('register', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
      });
    }
  }

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
	font-family: Raleway, sans-serif;
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.screen {
	background: linear-gradient(90deg, #5D54A4, #7C78B8);
	position: relative;
	height: 650px;
	width: 360px;
	box-shadow: 0px 0px 24px #5C5696;
}

.screen__content {
	z-index: 1;
	position: relative;
	height: 100%;
}

.screen__background {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);
}


.screen__background__shape1 {
	height: 520px;
	width: 520px;
	background: #FFF;
	top: -50px;
	right: 120px;
	border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
	height: 220px;
	width: 220px;
	background: #6C63AC;
	top: -172px;
	right: 0;
	border-radius: 32px;
}

.screen__background__shape3 {
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #5D54A4, #6A679E);
	top: -24px;
	right: 0;
	border-radius: 32px;
}

.screen__background__shape4 {
	height: 400px;
	width: 200px;
	background: #7E7BB9;
	top: 420px;
	right: 50px;
	border-radius: 60px;
}

.login {
	width: 320px;
	padding: 30px;
	padding-top: 156px;
}

.login__field {
	padding: 20px 0px;
	position: relative;
}

.login__icon {
	position: absolute;
	top: 30px;
	color: #7875B5;
}

.login__input {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #6A679E;
}

.login__submit {
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
	border-color: #6A679E;
	outline: none;
}

.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #7875B5;
}

.social-login {
	position: absolute;
	height: 140px;
	width: 160px;
	text-align: center;
	bottom: 0px;
	right: 0px;
	color: #fff;
}

.social-icons {
	display: flex;
	align-items: center;
	justify-content: center;
}

.social-login__icon {
	padding: 20px 10px;
	color: #fff;
	text-decoration: none;	
	text-shadow: 0px 0px 8px #7875B5;
}

.social-login__icon:hover {
	transform: scale(1.5);	
}

/*.form{
    background-color: #fefefe;
}
.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
}

.pass::placeholder{
    padding-left: 20px;
    font-size: 15px;
}

.pass{
    background-color: white;
    border: 1px solid black;
    justify-self: center;
    height: 50px;
    width: 300px;
    font-size: 20px;
    transition: 0.5s ease;
}

.pass:hover{
    background-color: black;
    color: white;
}*/


</style>