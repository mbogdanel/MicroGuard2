<template>
  <section class="bg-gray-800 text-white py-16 px-8">
    <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <div v-for="testimonial in testimonials" :key="testimonial.author" 
        class="bg-gray-700/50 p-8 rounded-lg">
        <p class="text-lg italic mb-4">"{{ testimonial.text }}"</p>
        <p class="font-bold mb-2">{{ testimonial.author }}</p>
        <p class="text-gray-300">{{ testimonial.company }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    text: "The security solutions provided have given us complete peace of mind.",
    author: "John Smith",
    company: "Tech Solutions Inc."
  },
  {
    text: "Professional team and outstanding service. Highly recommended!",
    author: "Sarah Johnson",
    company: "Retail Chain Corp."
  }
]
</script>