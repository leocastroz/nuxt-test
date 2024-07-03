
<template>
  <div class="container">
    <!-- <button @click="fetchUserData">Fetch GitHub User Data</button> -->
    <div v-if="hasta">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;align-items:center;width:100%;">
          <div class="loading-animation"></div>
          <div style="display: grid;gap: 10px;">
           <div class="loading-animation2"></div>
           <div class="loading-animation3"></div>
           <div class="loading-animation3"></div>
          </div>
        </div>
        <div class="loading-animation4"></div>
      </div>
    </div>
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
      <NuxtLink to="/">
        <img src="../src/images/home.png" alt="Avatar" width="30" style="margin:0 15px;border-radius:10%;"/>
      </NuxtLink>
      <NuxtLink to="/experience">
        <img src="../src/images/toolbox.png" alt="Avatar" width="30" style="margin:0 15px;border-radius:10%;"/>
      </NuxtLink>
      <NuxtLink to="/about">
        <img src="../src/images/profile.png" alt="Avatar" width="30" style="margin:0 15px;border-radius:10%;"/>
      </NuxtLink>
      <NuxtLink to="/contact">
        <img src="../src/images/contact.png" alt="Avatar" width="30" style="margin:0 15px;border-radius:10%;"/>
      </NuxtLink>
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
  console.log('fetchUserData ->>>>>>>>>>', githubStore );
  githubStore.fetchGithubUser();
}

const hasta = ref(true);

onMounted(() => {
  fetchUserData();
})

watchEffect(() => {
  userData.value = githubStore.userData;
  loading.value = githubStore.loading;
  if (loading.value === true) {
    hasta.value = false;
  }
  // console.log(loading.value, 'loading')
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

a img {
  filter: brightness(0.4);
}

a:hover {
  border-radius: 50%;
  box-shadow: 0 0 30px 1px #ffffff21;
  filter: brightness(1);
}

.router-link-active {
  background-image: linear-gradient(147deg, #36e4da, #0047e1 74%);
  box-shadow: 0 0px 30px 1px #79a3ff70;
  border-radius: 50%;
  color: #fff;
}

.router-link-active img {
  filter: brightness(1);
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
  border-radius: 5px;
  color: #fff;height:100px;
}

.loading-animation {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0px 15px;
  background-color: #ddd;
  animation: colorChange 2s infinite;
}

.loading-animation2 {
  width: 160px;
  height: 20px;
  border-radius: 10%;
  background-color: #ddd;
  animation: colorChange 2s infinite;
}

.loading-animation3 {
  width: 200px;
  height: 20px;
  border-radius: 10%;
  background-color: #ddd;
  animation: colorChange 2s infinite;
}

.loading-animation4 {
  width: 400px;
  height: 100px;
  border-radius: 5px;
  background-color: #ddd;
  animation: colorChange 2s infinite;
}

@keyframes colorChange {
  0% {
    background-color:#000614;
  }
  50% {
    background-color:#ffffff0a
  }
  100% {
    background-color:#000614;
  }
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
</style>
