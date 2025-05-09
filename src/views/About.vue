<template>
  <div class="bg-gray-50">
    <div class="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-8 mt-16">
      <h1 class="text-5xl font-bold text-center mb-4">About Us</h1>
      <p class="text-2xl text-center opacity-90">Protecting What Matters Most Since 1995</p>
    </div>
    
    <div class="max-w-7xl mx-auto px-8 py-16">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p class="text-xl text-gray-600">To provide unparalleled security solutions that ensure peace of mind for our clients through innovative technology and exceptional service.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-4xl font-bold text-blue-600 mb-2">25+</h3>
          <p class="text-gray-600">Years Experience</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-4xl font-bold text-blue-600 mb-2">10k+</h3>
          <p class="text-gray-600">Clients Protected</p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 class="text-4xl font-bold text-blue-600 mb-2">99.9%</h3>
          <p class="text-gray-600">Success Rate</p>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-blue-900 text-center mb-8">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
            <p class="text-gray-600">We maintain the highest standards of professional ethics and transparency.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
            <p class="text-gray-600">We strive for excellence in every aspect of our security services.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
            <p class="text-gray-600">We continuously adapt and improve our security solutions.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>