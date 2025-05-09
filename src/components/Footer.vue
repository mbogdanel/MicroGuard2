<template>
  <footer class="bg-gray-900 text-white py-12 px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div class="md:col-span-2 space-y-4">
        <img
          src="/src/assets/images/microguardLogo.png"
          alt="Logo"
          class="h-8 p-1"
        />
        <p class="text-gray-300">{{ companyInfo.description }}</p>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-semibold">Contact Us</h3>
        <div class="space-y-2">
          <p class="flex items-center gap-2">
            <span class="text-xl">📞</span>
            {{ companyInfo.contact.phone }}
          </p>
          <a
            :href="companyInfo.contact.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <span class="text-xl">👥</span>
            Facebook
          </a>
          <p class="flex items-center gap-2">
            <span class="text-xl">📍</span>
            {{ companyInfo.contact.address }}
          </p>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://www.mariusbogdanel.com/">mBogdanel</a>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { companyInfo } from '../data/services'
</script>
