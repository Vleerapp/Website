<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Navbar/>
  <div class="center">
    <h2>{{ error.statusCode }}</h2>
    <h3>{{ error.statusMessage }}</h3>
    <button class="back" @click="handleError">Home</button>
  </div>
</template>

<style scoped>
.center {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  font-size: 300px;
  line-height: 240px;
  font-style: bold;
}

@media (max-width: 625px){
  h2{
    font-size: 50vw;
    line-height: 40vw;
  }
}

h3{
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 24px;
}

.back {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  background-color: #E6E6E6;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-inline: 14px;
  color: #2F3031;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  height: 36px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  width: min-content;
}
</style>
