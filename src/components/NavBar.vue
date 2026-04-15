<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Terminal, Menu, X } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const isOpen = ref(false)
const route = useRoute()

// 当前激活的链接
const activeLink = computed(() => route.path)

// 菜单项
const menuItems = [
  { name: '首页', path: '/' },
  { name: '项目', path: '/projects' },
  { name: '关于', path: '/about' }
]
</script>

<template>
  <nav class="bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50 transition-all duration-300">
    <!-- 扫描线效果 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-geek-green to-transparent opacity-20 animate-neon-glow"></div>
    </div>

    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center space-x-2 text-geek-green font-bold text-xl tracking-tighter relative group"
        >
          <!-- 外发光效果 -->
          <div class="absolute -inset-1 bg-geek-green/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <Terminal class="w-6 h-6 relative z-10 animate-pulse" />
          <span class="relative z-10">陌殇</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 relative">
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="nav-link relative px-2 py-1"
          >
            {{ item.name }}
            <!-- 激活状态指示器 -->
            <div
              v-if="activeLink === item.path"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-geek-green transform scale-x-100 transition-transform duration-300"
            ></div>
            <!-- 悬浮状态指示器 -->
            <div
              v-else
              class="absolute bottom-0 left-0 w-full h-0.5 bg-geek-green/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></div>
          </RouterLink>
        </div>

        <!-- Mobile Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-zinc-400 hover:text-white relative p-2"
        >
          <!-- 背景发光效果 -->
          <div class="absolute inset-0 bg-geek-green/20 rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

          <Menu v-if="!isOpen" class="w-6 h-6 relative z-10" />
          <X v-else class="w-6 h-6 relative z-10" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden bg-zinc-900 border-b border-zinc-800">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="block py-3 px-4 nav-link rounded-lg hover:bg-zinc-800 transition-all duration-200"
            @click="isOpen = false"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-zinc-400 hover:text-geek-green transition-colors duration-200 font-medium;
}
</style>