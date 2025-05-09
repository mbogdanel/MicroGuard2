<template>
  <div class="bg-gray-50">
    <div class="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-8 mt-16">
      <h1 class="text-5xl font-bold text-center mb-4">Contact Us</h1>
      <p class="text-2xl text-center opacity-90">We're Here to Help 24/7</p>
    </div>

    <div class="max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-blue-900 mb-8">Send us a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-blue-900 mb-2">Name</label>
              <input type="text" id="name" v-model="form.name" required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-blue-900 mb-2">Email</label>
              <input type="email" id="email" v-model="form.email" required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-blue-900 mb-2">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-blue-900 mb-2">Message</label>
              <textarea id="message" v-model="form.message" rows="5" required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" 
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Emergency Contact</h3>
            <p class="text-gray-600">24/7 Hotline: (555) 123-4567</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Email Us</h3>
            <p class="text-gray-600">info@securitysolutions.com</p>
            <p class="text-gray-600">support@securitysolutions.com</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Visit Us</h3>
            <p class="text-gray-600">123 Security Avenue</p>
            <p class="text-gray-600">Safetown, ST 12345</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-4">Business Hours</h3>
            <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p class="text-gray-600">Emergency Support: 24/7</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Footer from '../components/Footer.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
</script>