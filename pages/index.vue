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
      <!-- <NuxtLink to="/repositories">repositories</NuxtLink>
      <NuxtLink to="/readms">readms</NuxtLink> -->
      <span :class="{ selected: selectedTab === 'repositories' }" @click="selectedTab = 'repositories'">repositories</span>
      <span :class="{ selected: selectedTab === 'readms' }" @click="selectedTab = 'readms'">readms</span>

      <div v-if="selectedTab === 'repositories'">
      
      <p>conteúdo repositories</p>
      <p>conteúdo repositories</p>
      <p>conteúdo repositories</p>
      
      </div>

      <div v-if="selectedTab === 'readms'">
      
        <p>nav-links-menu</p>
        <p>nav-links-menu</p>
        <p>nav-links-menu</p>
      
      </div>
      <!-- <NuxtPage /> -->
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref('repositories');
</script>

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
.selected {
  font-weight: bold;
}
</style>