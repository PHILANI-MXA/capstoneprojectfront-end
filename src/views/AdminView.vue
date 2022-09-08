<template >
<div>
<h2>User Profile</h2>
<div v-if="user">Welcome {{ user.firstName + user.lastName }}</div>
</div>
<div v-if="user" class="container">
<div class="profile">
<div class="pic">
<div class="icon"><i class="bi bi-person-circle"></i> </div>
</div>
<p>{{user.email}}</p>
</div> </div>
</template>

<script>
export default {
    name: '',
    components: {

    },
    mounted() {
        this.$store.dispatch('getUser');
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>