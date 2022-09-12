<template>
<div class="container min-vh-100 p-5">

<div><input type="text" id="" v-model="search" placeholder="Search" class="w-100 my-5 justify-content-center"></div>
<div class=" row d-flex justify-content-center justify-content-between">
<div  class="table-responsive">
  <table class="table  table-striped">
    <thead>
        <tr>
            <th class="col">#</th>
            <th class="col">User_firstname</th>
            <th class="col">User_lastName</th>
            <th class="col">User_email</th>
            <th class="col">Add</th>
            <th class="col">delete</th>
            <th class="col">adit</th>
        </tr>
    </thead>
  <tbody>
    <tr  v-for="user in users" :key="user.user_id">
      <th scope="row">{{user.user_id}}</th>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.email}}</td>
      <td> <button class=" btn btn-success">add</button></td>
      <td> <button class=" btn btn-danger" @click="deleteUser(user.user_Id)">delete</button></td>
      <td> <button class=" btn btn-primary">edit</button></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</template>

<script>
import UserView from '@/views/UserView'

export default {
  name: '',
  components: {
    UserView
  },
    data() {
    return {
      search:'',
    }
    },
       users() {
      return this.$store.state.users?.filter(users =>{
          let isMatch = true;
          if (!users.firstName.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        },
   computed:{
        users(){
        return this.$store.state.users;
        },
        user(){
        return this.$store.state.user;
        }
    },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    addToCart() {
      const item = {
        title: '',
        category: '',
        book_description: '',
        img: '',
          }
      },
    deleteUser(Id) {
      return this.$store.dispatch("deleteUser", Id);
    },
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
