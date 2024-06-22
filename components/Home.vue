
<template>
  <div class="container">
    <!-- <button @click="fetchUserData">Fetch GitHub User Data</button> -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="userData">
      <div style="display:flex;align-items:center;">
        <img :src="userData.avatar_url" alt="Avatar" width="150" style="margin:0 15px;border-radius:50%;"/>
        <div style="background:re;">
          <h2 class="text-gradient">{{ userData.name }}</h2>
          <p style="font-size:14px;font-weight:200;color: #878787;">{{ userData.bio }}</p>
          <p style="font-size:14px;font-weight:200;color: #878787;">{{ userData.location }}</p>
        </div>
      </div>
    </div>
    
    <nav style="background:red;">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <!-- <NuxtLink to="/user/123">User 123</NuxtLink> -->
      <!-- <NuxtLink to="/profile">profile</NuxtLink> -->
    </nav>
  </div>
</template>

<script setup>
import { onMounted, watchEffect, toRefs } from 'vue'
import { useGithubStore } from '~/stores/githubStore'

const githubStore = useGithubStore();
const { userData, loading, error } = toRefs(githubStore);

const fetchUserData = () => {
  githubStore.fetchGithubUser();
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
}

.text-gradient {
  background: linear-gradient(to right, #d3d3d3, #222222);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:18px;
  font-weight:700;
  padding:10px 0;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
</style>
