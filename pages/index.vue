<template>
  <div class="container" style="color:red;">
    <div style="display:grid;width:100%;gap:20px;">
      <div style="background-color:#0d1320;border: 1px solid #ffffff33;padding: 10px;border-radius: 5px;color: #777777;">
        Engenheiro de Software e "Desenvolvedor Front-end", apaixonado por tecnologia, atuando na área do desenvolvimento web front-end. Utilizando o framework do "Vue.Js". Atualmente estou cursando Engenharia De Software, estou no 6º semestre.
      </div>
      <div style="background-color:#0d1320;border: 1px solid #ffffff33;padding: 10px;border-radius: 5px;color:#fff;display:flex;">
        <span class="html">HTML</span>
        <span class="css">CSS</span>
        <span class="php">PHP</span>
        <span class="js">JavaScript</span>
        <span class="bootstrap">Bootstrap</span>
        <span class="vuejs">Vue.js</span>
        <span class="quasarjs">Quasar.js</span>
        <span class="nuxtjs">Nuxt.js</span>
        <span class="laravel">Laravel</span>
        <span class="nodejs">Node.js</span>
        <span class="docker">Docker</span>
        <span class="tailwindcss">Tailwind CSS</span>
        <span class="pinia">Pinia</span>

      </div>
    </div>
    <nav class="nav-de-items">
      <!-- <NuxtLink to="/repositories">repositories</NuxtLink>
      <NuxtLink to="/readms">readms</NuxtLink> -->
      <div style="display:flex;justify-content:center;gap:20px;margin-top: -20px;">
        <span :class="{ selected: selectedTab === 'repositories' }" @click="selectedTab = 'repositories'">repositories</span>
        <span :class="{ selected: selectedTab === 'readms' }" @click="selectedTab = 'readms'">readms</span>
      </div>


      

      <div v-if="selectedTab === 'repositories'" style="padding:20px;text-align:center;">
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
        <p>conteúdo repositories</p>
      </div>

      <div v-if="selectedTab === 'readms'">
      
        <p>nav-links-menu</p>
        <p>nav-links-menu</p>
        <p>nav-links-menu</p>
      
      </div>
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
  /*background:#fff000;*/
  display:flex;
  gap:20px;
}

.nav-de-items {
  background-color: #161a23;
  width:400px;
  border: 1px solid #ffffff33;
  padding: 10px 0;
  border-radius: 5px;
  color: #fff;
}

.nav-de-items div span {
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: #444444;
}

.selected {
  background-image: linear-gradient(147deg, #36e4da, #0047e1 74%);
  box-shadow: 0 0px 30px 1px #79a3ff70;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
}

.html {
  background: #ff6a4066;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ff6a40;
  height: fit-content;
}

.css {
  background: #2368ff70;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #91b3ff;
  height: fit-content;
}

.php {
  background: #727eff9c;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #aecfff;
  height: fit-content;
}

.js {
  background: #ffca4066;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ffe440;
  height: fit-content;
}

.bootstrap {
  background: #563d7c7a;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ac75ff;
  height: fit-content;
}

.vuejs {
  background: #41b88396;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #5effb7;
  height: fit-content;
}

.quasarjs {
  background: #1976d2;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #64b5f6;
  height: fit-content;
}

.nuxtjs {
  background: #00c568ab;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #42ffca;
  height: fit-content;
}

.laravel {
  background: #ff685f85;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ff5221;
  height: fit-content;
}

.nodejs {
  background: #8cc84b;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #5effb7;
  height: fit-content;
}

.docker {
  background: #0db7ed96;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #00c2ff;
  height: fit-content;
}

.tailwindcss {
  background: #2ae0ff8f;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #93c5fd;
  height: fit-content;
}

.pinia {
  background: #2affe28f;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #63eab7;
  height: fit-content;
}

@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
}

</style>