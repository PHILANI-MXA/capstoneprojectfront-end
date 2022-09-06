<template >
<div>
<h2>User Profile</h2>
<div v-if="user">Welcome {{ user.full_name }}</div>
</div>
<div v-if="user" class="container">
<div class="profile">
<div class="pic">
<div class="img"> <img src="" alt="img" > </div>
</div>
<p>{{user.email}}</p>
</div> </div>
</template>