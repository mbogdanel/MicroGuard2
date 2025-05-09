<template>
  <RouterLink
    :to="`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`"
    class="block group"
  >
    <div
      class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2"
    >
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          {{ service.title }}
        </h3>
        <p class="text-gray-600">{{ service.subtitle }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
interface Service {
  title: string
  image: string
  description: string
}

defineProps<{
  service: Service
}>()
</script>
