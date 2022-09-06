<template>
  <div class="container" id="Users">
    <table class="table">
        <thead>
            <tr>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
            <th>test</th>
        </tr>
        </thead>
        <tbody v-if="users">
            <tr v-for="user in users" :key="user">
                <td>{{user.user_id}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.laststName}}</td>
                <td><img id="" :scr="user.img" alt="user image"></td>
                <td>{{user.email}}</td>
                <td>{{user.Password}}</td>
                <td><button @click="this.$store.dispatch('deleteUser', user.user_id)"><i
                class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
    import UserView from '@/views/UserView'

export default {
    components: {
        UserView
    },
    mounted(){
        this.$store.dispatch('getUsers')
    },
    computed: {
        users(){
            return this.$store.state.users
        }
    }
}
</script>

<style scoped>
.table {
    border: 1px black;
    color: white;
    margin-top: 100px;
    left:50%;
}

#productimg {
    width: 100%;
    height: auto;
}
</style>