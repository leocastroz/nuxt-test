
<template>
  <div class="container">
    <!-- <button @click="fetchUserData">Fetch GitHub User Data</button> -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="userData">
      <div style="display:flex;align-items:center;">
        <img :src="userData.avatar_url" alt="Avatar" width="150" style="margin:0 15px;"/>
        <div style="background:red;">
          <h2>{{ userData.name }}</h2>
          <p>{{ userData.bio }}</p>
        </div>
      </div>
    </div>
    <nav>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/user/123">User 123</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
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
  margin: -80px auto 0 auto;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
</style>
