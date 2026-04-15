<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

// 全局错误处理
const handleError = (err) => {
  console.error('应用错误:', err)
}
</script>

<template>
  <div class="min-h-screen flex flex-col" @error="handleError">
    <NavBar />
    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <component :is="Component" class="min-h-full" />
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
/* 简单的淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 3D翻转动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: rotateY(-90deg) translateX(-50px);
}

.page-leave-to {
  opacity: 0;
  transform: rotateY(90deg) translateX(50px);
}

/* 滑动动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* 缩放动画 */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.8) rotateX(10deg);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(1.2) rotateX(-10deg);
}

/* 混合动画效果 */
.combined-enter-active,
.combined-leave-active {
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.combined-enter-from {
  opacity: 0;
  transform: translateY(-100px) rotateX(-45deg) scale(0.5);
}

.combined-leave-to {
  opacity: 0;
  transform: translateY(100px) rotateX(45deg) scale(1.5);
}
</style>
