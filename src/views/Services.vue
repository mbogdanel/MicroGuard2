<template>
  <div class="bg-gray-50">
    <div class="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-8 mt-16">
      <h1 class="text-5xl font-bold text-center mb-4">Our Services</h1>
      <p class="text-2xl text-center opacity-90">Comprehensive Security Solutions</p>
    </div>

    <div class="max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/ServiceCard.vue'
import Footer from '../components/Footer.vue'
import { services } from '../data/services'
</script>