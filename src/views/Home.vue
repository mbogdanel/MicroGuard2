<template>
  <div class="min-h-screen">
    <section class="relative h-screen">
      <div class="absolute inset-0 z-0">
        <iframe
          class="w-full h-full object-cover"
          src="/src/assets/videos/frontVideo4.mp4"
          title="Security Camera Footage"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        class="relative h-full flex flex-col justify-center items-center text-white text-center px-8 bg-black/40"
      >
        <h1 class="text-6xl font-bold mb-4 drop-shadow-lg">
          Servicii Complete de Securitate
        </h1>

        <div class="flex gap-4">
          <RouterLink
            to="/services"
            class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-md font-bold transition-colors"
          >
            Servicii
          </RouterLink>
          <RouterLink
            to="/contact"
            class="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-md font-bold transition-colors"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </section>

    <WhyChooseUs />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import WhyChooseUs from '../components/WhyChooseUs.vue'
import Testimonials from '../components/Testimonials.vue'
import Footer from '../components/Footer.vue'
import { companyInfo } from '../data/services'

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/src/assets/images/placeholder.jpg'
}
</script>
