<template>
  <div class="music-player">
    <img :src="currentTrack.capa" alt="Capa do Álbum" style="border-radius: 5px;">
    <div style="display: grid;">
      <h3>{{ currentTrack.title }}</h3>
      <audio ref="audio" @timeupdate="updateTime" :src="currentTrack.src" @loadedmetadata="loadedMetadata" @ended="nextTrack"></audio>
      <div v-if="!isPlaying" class="start-playback">
        <button @click="startPlayback">Iniciar Reprodução</button>
      </div>
      <div v-else>
       
        <div class="seekbar">
          <input type="range" id="range3" min="0" :max="duration" v-model="currentTime" @input="seek">
          <div style="background: red; display: flex;">
            <div style="width: 120px;">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
            <button @click="changeVolume">vol</button>
            <div v-if="mostrarVolume" class="volume">
              <label for="volume"></label>
              <input type="range" id="volume" min="0" max="1" step="0.01" v-model="volume" @input="setVolume">
            </div>
          </div>
        </div>
         <div class="controls">
          <button ref="prevButton" @click="prevTrack">&#8592;</button>
          <button ref="nextButton" @click="nextTrack">&#8594;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const tracks = ref([
  { title: 'Música 1', capa: 'capa/capa1.jpg', src: 'musics/funk1.mp3' },
  { title: 'Música 2', capa: 'capa/capa2.webp', src: 'musics/funk1.mp3' },
  { title: 'Música 3', capa: 'capa/capa3.png', src: 'musics/funk1.mp3' }
]);

const currentTrackIndex = ref(0);
const audio = ref(null);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(0.05);
const mostrarVolume = ref(false);
const isPlaying = ref(false);

const currentTrack = computed(() => tracks.value[currentTrackIndex.value]);

const prevTrack = () => {
  if (currentTrackIndex.value > 0) {
    currentTrackIndex.value--;
    playTrack();
  }
};

const nextTrack = () => {
  if (currentTrackIndex.value < tracks.value.length - 1) {
    currentTrackIndex.value++;
  } else {
    currentTrackIndex.value = 0;
  }
  playTrack();
};

const changeVolume = () => {
  mostrarVolume.value = !mostrarVolume.value;
};

const playTrack = () => {
  if (audio.value) {
    audio.value.load();
    audio.value.play().catch((error) => {
      console.error('Erro ao reproduzir a música:', error);
    });
  }
};

const seek = () => {
  if (audio.value) {
    audio.value.currentTime = currentTime.value;
  }
};

const updateTime = () => {
  if (audio.value) {
    currentTime.value = audio.value.currentTime;
  }
};

const loadedMetadata = () => {
  if (audio.value) {
    duration.value = audio.value.duration;
  }
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const setVolume = () => {
  if (audio.value) {
    audio.value.volume = volume.value;
  }
};

const startPlayback = () => {
  isPlaying.value = true;
  playTrack();
};

onMounted(() => {
  if (audio.value) {
    audio.value.volume = volume.value;
  }
});
</script>

<style scoped>
.music-player {
  display: flex;
  animation: fadeIn 2s;
}

.controls {
  margin: 10px;
}

.seekbar, .volume {
  width: 100%;
}

input[type="range"] {
  width: 100%;
}

input[type="range" i] {
  background:red !important;
}

.start-playback {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}


</style>