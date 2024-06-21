<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
    <!-- <p @mouseover="isHovered = true" @mouseleave="isHovered = false" style="color: #fff;">teste hover</p>
    <div :class="{ 'hovered': isHovered }">
      
      <br><br><br>
      <b class="color-on-hover">teste 1</b>
      <br><br><br>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const isHovered = ref(false)
</script>

<style scoped>
.color-on-hover {
  transition: background-color 0.5s ease;
  background-color: #0d0526;
  box-shadow: 0 0 400px 100px #5100ff26;
  position: fixed;
  bottom: -100px;
  right: -230px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
}

.hovered .color-on-hover {
  background-color: #0d0526;
  box-shadow: 0 0 400px 100px #0d0526;
}
</style>