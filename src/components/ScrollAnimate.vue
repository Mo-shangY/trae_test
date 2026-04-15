<template>
  <div
    ref="scrollElement"
    class="scroll-animate"
    :class="[
      animationClass,
      {
        'opacity-hidden': !isVisible,
        'opacity-visible': isVisible
      }
    ]"
    :style="animationStyle"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  // 动画类型
  animation: {
    type: String,
    default: 'fade-in-up',
    validator: (value) => [
      'fade-in-up',
      'fade-in-scale',
      'fade-in-left',
      'fade-in-right',
      'slide-in-up',
      'slide-in-down',
      'slide-in-left',
      'slide-in-right',
      'zoom-in',
      'rotate-in',
      'bounce-in'
    ].includes(value)
  },
  // 延迟触发（毫秒）
  delay: {
    type: Number,
    default: 0
  },
  // 触发位置（相对于视口顶部）
  triggerOnce: {
    type: Boolean,
    default: true
  },
  // 距离视口多少像素时触发
  offset: {
    type: Number,
    default: 100
  }
})

const scrollElement = ref(null)
const isVisible = ref(false)
const hasTriggered = ref(false)

// 动画样式类
const animationClass = computed(() => {
  if (!isVisible.value || props.delay > 0) return ''
  return `animate-${props.animation}`
})

// 动画内联样式
const animationStyle = computed(() => {
  if (props.delay > 0 && isVisible.value) {
    return { animationDelay: `${props.delay}ms` }
  }
  return {}
})

// 检查元素是否在视口内
const checkVisibility = () => {
  if (!scrollElement.value) return

  const rect = scrollElement.value.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  const elementTop = rect.top
  const elementBottom = rect.bottom

  // 元素在视口内或即将进入视口
  const isInViewport = elementTop <= windowHeight - props.offset && elementBottom >= props.offset

  if (isInViewport && (!props.triggerOnce || !hasTriggered.value)) {
    isVisible.value = true
    hasTriggered.value = true
  }

  // 如果不是一次性触发，离开视口后可以再次触发
  if (!props.triggerOnce && !isInViewport && isVisible.value) {
    isVisible.value = false
  }
}

// 监听滚动事件
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkVisibility()
      ticking = false
    })
    ticking = true
  }
}

// 初始化
onMounted(() => {
  // 立即检查一次
  checkVisibility()

  // 添加滚动监听
  window.addEventListener('scroll', handleScroll, { passive: true })

  // 如果元素在视口外，添加观察器
  if (!isVisible.value && window.IntersectionObserver) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            hasTriggered.value = true
            if (props.triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!props.triggerOnce && isVisible.value) {
            isVisible.value = false
          }
        })
      },
      {
        root: null,
        rootMargin: `-${props.offset}px 0px`,
        threshold: 0
      }
    )

    observer.observe(scrollElement.value)

    // 清理函数
    onUnmounted(() => {
      observer.unobserve(scrollElement.value)
    })
  }
})

// 清理
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-animate {
  transition: opacity 0.6s ease;
}

.opacity-hidden {
  opacity: 0;
  will-change: transform, opacity;
}

/* 基础动画类 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotate-in {
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 动画类 */
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.4s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 0.6s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.6s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.6s ease-out forwards;
}

.animate-slide-in-down {
  animation: slide-in-down 0.6s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.6s ease-out forwards;
}

.animate-zoom-in {
  animation: zoom-in 0.6s ease-out forwards;
}

.animate-rotate-in {
  animation: rotate-in 0.8s ease-out forwards;
}

.animate-bounce-in {
  animation: bounce-in 0.8s ease-out forwards;
}
</style>