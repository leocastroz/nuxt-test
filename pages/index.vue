<!-- <template>
  <div>
    <nav>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/user/123">User 123</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
    </nav>
  </div>
</template> -->
<!-- 
<template>
  <div class="container">
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
</style> -->
<template>
  <div class="container" style="color:red;">
    <div style="display:grid;width:100%;gap:20px">
      <div style="background:green;width:100%;border-radius:5px;">
      summary
      </div>
      <div style="background:green;width:100%;border-radius:5px;">
        summary
      </div>
    </div>
    <nav style="background:blue;width:400px;border-radius:5px;">
      <NuxtLink to="/repositories">repositories</NuxtLink>
      <NuxtLink to="/readms">readms</NuxtLink>
      CONTEÚDO NAVBAR-RIGHT
      <NuxtPage />
    </nav>
  </div>
</template>

<style scoped>
.container {
  width:1200px;
  margin: 30px auto 0 auto;
  background:#fff000;
  display:flex;
  gap:20px;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}
</style>