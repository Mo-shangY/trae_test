<script setup>
import { ArrowRight, Github } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// 鼠标跟随光标
const cursorPosition = ref({ x: 0, y: 0 })
const isMoving = ref(false)
const mouseTrail = ref([])
const trailLength = 20

const handleMouseMove = (e) => {
  cursorPosition.value = { x: e.clientX, y: e.clientY }
  isMoving.value = true

  // 添加到轨迹
  mouseTrail.value.unshift({ x: e.clientX, y: e.clientY })
  if (mouseTrail.value.length > trailLength) {
    mouseTrail.value.pop()
  }

  // 停止移动后隐藏光标
  clearTimeout(window.mouseTimeout)
  window.mouseTimeout = setTimeout(() => {
    isMoving.value = false
  }, 100)
}

// 标题打字机效果
const typedTitle = ref('')
const fullTitle = '你好，我是 <span class="text-transparent bg-clip-text bg-gradient-to-r from-geek-green to-emerald-400">哈哈哈</span>'
const displayTitle = '你好，我是 哈哈哈'
let charIndex = 0

const typeWriter = () => {
  if (charIndex < displayTitle.length) {
    typedTitle.value = displayTitle.substring(0, charIndex + 1)
    charIndex++
    setTimeout(typeWriter, 100)
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  typeWriter()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  clearTimeout(window.mouseTimeout)
})
</script>

<template>
  <!-- 鼠标跟随光标 -->
  <div class="fixed inset-0 pointer-events-none z-50" v-if="isMoving">
    <div
      class="fixed w-8 h-8 bg-geek-green/20 rounded-full blur-xl animate-pulse-ring"
      :style="{ left: cursorPosition.x - 16 + 'px', top: cursorPosition.y - 16 + 'px' }"
    ></div>

    <!-- 鼠标轨迹 -->
    <div
      v-for="(pos, index) in mouseTrail"
      :key="index"
      class="fixed w-2 h-2 bg-geek-green/60 rounded-full animate-flicker"
      :style="{
        left: pos.x - 4 + 'px',
        top: pos.y - 4 + 'px',
        opacity: (trailLength - index) / trailLength,
        animationDelay: (index * 0.05) + 's'
      }"
    ></div>
  </div>

  <!-- 背景粒子效果 -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute inset-0">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-geek-green/20 rounded-full animate-float"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: (i * 0.2) + 's',
          animationDuration: (3 + Math.random() * 2) + 's'
        }"
      ></div>
    </div>
  </div>

  <!-- 扫描线效果 -->
  <div class="fixed inset-0 pointer-events-none z-40">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-geek-green to-transparent animate-neon-glow"
        style="top: 0;"
      ></div>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 relative">
    <!-- 头像区域 -->
    <div class="relative group cursor-pointer">
      <!-- 外发光动画 -->
      <div class="absolute -inset-1 bg-gradient-to-r from-geek-green to-emerald-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>

      <!-- 扫描线 -->
      <div class="absolute inset-0 overflow-hidden rounded-full">
        <div class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-geek-green to-transparent animate-neon-glow"
             style="animation-delay: '1s'"></div>
      </div>

      <!-- 头像 -->
      <img
        src="../assets/avatar.jpg"
        alt="Profile"
        class="relative w-32 h-32 rounded-full border-4 border-zinc-900 shadow-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
      />

      <!-- 装饰图标 -->
      <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-geek-green text-black rounded-full flex items-center justify-center animate-float">
        <Github class="w-4 h-4" />
      </div>
    </div>

    <!-- 文字内容 -->
    <div class="space-y-4 max-w-2xl relative">
      <h1
        v-html="typedTitle || fullTitle"
        class="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up glitch-text"
        data-text="你好，我是 哈哈哈"
      ></h1>

      <p class="text-xl text-zinc-400 animate-fade-in-up animate-delay-100">
        全栈工程师 / 知识博主 / 创业者
      </p>

      <p class="text-zinc-400 leading-relaxed animate-fade-in-up animate-delay-200">
        专注于分享编程知识，帮助大家拿到满意 Offer。<br>
        编程导航、面试鸭创始人。
      </p>
    </div>

    <!-- 按钮组 -->
    <div class="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-delay-300">
      <RouterLink
        to="/projects"
        class="px-8 py-3 bg-geek-green text-black font-bold rounded-lg relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-geek-green/30"
      >
        <span class="relative z-10 flex items-center gap-2">
          查看项目 <ArrowRight class="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
        </span>
        <!-- 波纹效果 -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-400 to-blue-600 transition-opacity duration-300"></div>
        <!-- 发光边框 -->
        <div class="absolute inset-0 rounded-lg border-2 border-geek-green/50 opacity-0 group-hover:opacity-100 animate-neon-pulse"></div>
      </RouterLink>

      <a
        href="https://github.com/Mo-shangY"
        target="_blank"
        class="px-8 py-3 border border-zinc-700 text-white rounded-lg flex items-center justify-center gap-2 relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zinc-700/30"
      >
        <Github class="w-4 h-4" />
        <span class="relative z-10">GitHub</span>
        <!-- 波纹效果 -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-zinc-800 transition-opacity duration-300"></div>
      </a>
    </div>

    <!-- 装饰元素 -->
    <div class="absolute -top-4 -left-4 w-8 h-8 border border-geek-green/30 rounded animate-rotate-slow"></div>
    <div class="absolute -bottom-4 -right-4 w-6 h-6 border border-geek-green/30 rounded animate-rotate-slow" style="animation-delay: '1s'"></div>
  </div>
</template>

<style scoped>
</style>
