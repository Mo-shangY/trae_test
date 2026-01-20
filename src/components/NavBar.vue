<script setup>
import { RouterLink } from 'vue-router'
import { Terminal, Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/" class="flex items-center space-x-2 text-geek-green font-bold text-xl tracking-tighter">
          <Terminal class="w-6 h-6" />
          <span>陌殇</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
          <RouterLink to="/projects" class="nav-link">项目</RouterLink>
          <RouterLink to="/about" class="nav-link">关于</RouterLink>
        </div>

        <!-- Mobile Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-zinc-400 hover:text-white">
          <Menu v-if="!isOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-zinc-900 border-b border-zinc-800">
      <div class="px-4 pt-2 pb-4 space-y-2">
        <RouterLink to="/" class="block py-2 nav-link" @click="isOpen = false">首页</RouterLink>
        <RouterLink to="/projects" class="block py-2 nav-link" @click="isOpen = false">项目</RouterLink>
        <RouterLink to="/about" class="block py-2 nav-link" @click="isOpen = false">关于</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-zinc-400 hover:text-geek-green transition-colors duration-200 font-medium;
}
.router-link-active {
  @apply text-geek-green;
}
</style>
