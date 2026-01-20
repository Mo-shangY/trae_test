<script setup>
import { ArrowRight, Github } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-fade-in">
    <div class="relative">
      <div class="absolute -inset-1 bg-gradient-to-r from-geek-green to-blue-600 rounded-full blur opacity-25 animate-pulse"></div>
      <img src="/avatar.jpg" alt="Profile" class="relative w-32 h-32 rounded-full border-4 border-zinc-900 shadow-xl object-cover" />
    </div>
    
    <div class="space-y-4 max-w-2xl">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
        你好，我是 <span class="text-transparent bg-clip-text bg-gradient-to-r from-geek-green to-emerald-400">陌殇</span>
      </h1>
      <p class="text-xl text-zinc-400">
        全栈工程师 / 知识博主 / 创业者
      </p>
      <p class="text-zinc-400 leading-relaxed">
        专注于分享编程知识，帮助大家拿到满意 Offer。<br>
        编程导航、面试鸭创始人。
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 pt-4">
      <RouterLink to="/projects" class="px-8 py-3 bg-geek-green text-black font-bold rounded hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
        查看项目 <ArrowRight class="w-4 h-4" />
      </RouterLink>
      <a href="https://github.com/Mo-shangY" target="_blank" class="px-8 py-3 border border-zinc-700 text-white rounded hover:border-zinc-500 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
        <Github class="w-4 h-4" /> GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
