<template>
  <div>
    <!-- <button @click="fetchUserData">Fetch GitHub User Data</button> -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="userData">
      <h2>{{ userData.name }}</h2>
      <p>{{ userData.bio }}</p>
      <img :src="userData.avatar_url" alt="Avatar" />
      <video width="320" height="240" controls>
        <source src="https://web.telegram.org/k/stream/%7B%22dcId%22%3A1%2C%22location%22%3A%7B%22_%22%3A%22inputDocumentFileLocation%22%2C%22id%22%3A%225163886029484065538%22%2C%22access_hash%22%3A%222192602540207853693%22%2C%22file_reference%22%3A%5B4%2C95%2C1%2C227%2C251%2C0%2C0%2C0%2C105%2C102%2C117%2C244%2C37%2C84%2C159%2C222%2C26%2C141%2C41%2C10%2C139%2C89%2C229%2C233%2C28%2C104%2C72%2C196%2C168%5D%7D%2C%22size%22%3A21087849%2C%22mimeType%22%3A%22video%2Fmp4%22%2C%22fileName%22%3A%22Snapinsta_app_video_10000000_1527799131290968_7495411507882477664.mp4%22%7D" type="video/mp4" />
      </video>
      <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        
      </video>
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
