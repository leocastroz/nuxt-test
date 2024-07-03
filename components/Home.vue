
<template>
  <div class="container">
    <!-- <button @click="fetchUserData">Fetch GitHub User Data</button> -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="userData">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;width:100%;">
          <img :src="userData.avatar_url" alt="Avatar" width="150" style="margin:0 15px;border-radius:50%;"/>
          <div style="background:re;">
            <h2 class="text-gradient">{{ userData.name }}</h2>
            <p style="font-size:14px;font-weight:200;color: #878787;">{{ userData.bio }}</p>
            <p style="font-size:14px;font-weight:200;color: #878787;">{{ userData.location }}</p>
          </div>
        </div>
        <TrackMusic class="card-yt" />
      </div>
    </div>
    
    <nav class="nav-links-menu">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <!-- <NuxtLink to="/user/123">User 123</NuxtLink> -->
      <!-- <NuxtLink to="/profile">profile</NuxtLink> -->
    </nav>
  </div>
</template>

<script setup>
import TrackMusic from '~/components/TrackMusic.vue'
import { onMounted, watchEffect, toRefs } from 'vue'
import { useGithubStore } from '~/stores/githubStore'

const githubStore = useGithubStore();
const { userData, loading, error } = toRefs(githubStore);

const fetchUserData = () => {
  console.log('fetchUserData');
  githubStore.fetchGithubUser();
}

const BuscaEbve = () => {
  console.log('testeeee')
}


onMounted(() => {
  fetchUserData();
})

watchEffect(() => {
  userData.value = githubStore.userData;
  loading.value = githubStore.loading;
  error.value = githubStore.error;
})
</script>
<style scoped>
.container {
  width:1200px;
  margin: -120px auto 0 auto;
  z-index: 99999 !important;
  position: relative;
}

.text-gradient {
  background: linear-gradient(to right, #d3d3d3, #222222);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:18px;
  font-weight:700;
  padding:10px 0;
}

a {
  background-color: #444444;
  background-image: linear-gradient(147deg, #444444, #0a0c11 74%);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  color: #ffffff4d;
  text-decoration: none;
  transition: background-image 1s ease, box-shadow 1s ease, color 1s ease, .5s ease-out;
}

a:hover {
  border-radius: 50%;
  box-shadow: 0 0 30px 1px #ffffff21;
}

.router-link-active {
  background-image: linear-gradient(147deg, #36e4da, #0047e1 74%);
  box-shadow: 0 0px 30px 1px #79a3ff70;
  border-radius: 50%;
  color: #fff;
}

/*.router-link-active:hover {
  @apply bg-green-200 font-medium;
}*/

.nav-links-menu {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  /*background-color: #161a23;
  border: 1px solid #ffffff33;*/
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  margin: 15px;
}

.card-yt {
  background-image: linear-gradient(147deg, #161a23, #05050f 74%);
  width:400px;
  border: 1px solid #ffffff33;
  padding: 10px 0;
  border-radius: 5px;
  color: #fff;height:100px;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
</style>
