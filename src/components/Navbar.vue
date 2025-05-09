<template>
  <nav
    class="fixed top-0 left-0 right-0 h-16 bg-blue-900/90 flex items-center justify-between px-8 shadow-md z-50"
  >
    <div class="flex items-center">
      <RouterLink to="/">
        <img
          src="/src/assets/images/microguardLogo.png"
          alt="Logo"
          class="h-8 p-1"
        />
      </RouterLink>
    </div>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex gap-8 items-center">
      <li v-for="item in navItems" :key="item.name">
        <RouterLink
          :to="item.path"
          class="text-white font-medium hover:text-blue-300 transition-colors"
          :class="{ 'text-blue-300': $route.path === item.path }"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden text-white p-2"
      aria-label="Toggle menu"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          v-if="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      class="absolute top-16 left-0 right-0 bg-blue-900/95 md:hidden"
    >
      <ul class="flex flex-col py-4">
        <li v-for="item in navItems" :key="item.name">
          <RouterLink
            :to="item.path"
            class="block px-8 py-3 text-white font-medium hover:bg-blue-800 transition-colors"
            :class="{ 'bg-blue-800': $route.path === item.path }"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Acasa', path: '/' },
  { name: 'Servicii', path: '/services' },
  { name: 'Despre noi', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>
