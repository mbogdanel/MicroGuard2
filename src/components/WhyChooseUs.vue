<template>
  <section class="bg-gray-100 py-16 px-8">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
      De ce sa ne alegeti pe noi?
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div
        v-for="reason in reasons"
        :key="reason.title"
        class="bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <div class="text-5xl mb-4">{{ reason.icon }}</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">
          {{ reason.title }}
        </h3>
        <p class="text-gray-600">{{ reason.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reasons = [
  {
    icon: '🔒',
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance and immediate response',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    description: 'Highly trained security professionals',
  },
  {
    icon: '🛡️',
    title: 'Advanced Technology',
    description: 'State-of-the-art security systems and equipment',
  },
]
</script>
