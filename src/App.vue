<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>