<script setup>
import { Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-zinc-900 border-t border-zinc-800 py-8 mt-12">
    <div class="container mx-auto px-4 text-center">
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Mo-shangY" target="_blank" class="text-zinc-400 hover:text-white transition-colors">
          <Github class="w-5 h-5" />
        </a>
      </div>
      <p class="text-zinc-500 text-sm">
        &copy; {{ new Date().getFullYear() }} 哈哈哈. All rights reserved.
      </p>
      <p class="text-zinc-600 text-xs mt-2">
        Powered by Vue 3 & Tailwind CSS
      </p>
    </div>
  </footer>
</template>
