<template>
  <div class="min-h-screen bg-gray-50">
    <div
      class="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-6"
    >
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ service?.title }}
        </h1>
        <p class="text-xl opacity-90">{{ service?.subtitle }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          :src="service?.image"
          :alt="service?.title"
          class="w-full h-96 object-cover"
          @error="handleImageError"
        />

        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            {{ service?.title }}
          </h2>

          <div class="space-y-4 text-lg text-gray-600 mb-8">
            <p v-for="(paragraph, index) in service?.description" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li v-for="feature in service?.keyFeatures" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>

          <div v-if="service?.images?.length" class="mt-12">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Gallery</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                v-for="(image, index) in service?.images"
                :key="index"
                :src="image"
                :alt="`${service?.title} - Image ${index + 1}`"
                class="w-full h-48 object-cover rounded-lg"
                @error="handleImageError"
              />
            </div>
          </div>

          <div class="mt-8">
            <RouterLink
              to="/contact"
              class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacteaza-ne!
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../data/services'
import Footer from '../components/Footer.vue'

const route = useRoute()
const service = computed(() => services.find((s) => s.id === route.params.slug))

console.log(service.value)

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/src/assets/images/placeholder.jpg'
}
</script>
