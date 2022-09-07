<template>
    <div>
<h2>User Profile</h2>
<div v-if="user">Welcome {{ user.f }}</div>
    </div>

    <div v-if="user" class="container">
			<div class="profile">
				<div class="pic">
					<div class="img"><img src=""/> </div>
					<i class="icon-plus"></i>
					<i class="icon-ok"></i>
				</div>
				<p>{{user.firstName}}</p>
                <p>{{user.lastName}}</p>
				<p>{{user.email}}</p>

			</div> </div>
</template>

<script>
import UserView from '@/views/UserView'

export default {
    components: {
        UserView
    },
    // mounted(){
    //     this.$store.dispatch('getUsers')
    // },
    computed: {
        users(){
            return this.$store.state.user
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