<script setup>
import { ref, onMounted } from 'vue'

const skills = ref([
  { name: 'Java / Spring Boot', level: 90 },
  { name: 'Vue / React', level: 85 },
  { name: 'MySQL / Redis', level: 80 },
  { name: 'System Design', level: 75 }
])

const animateSkills = () => {
  skills.value.forEach((skill, index) => {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-bar')
      if (skillBars[index]) {
        skillBars[index].style.width = skill.level + '%'
      }
    }, index * 200)
  })
}

onMounted(() => {
  // 延迟启动技能条动画
  setTimeout(animateSkills, 500)
})
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-12 relative">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-geek-green/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse" style="animation-delay: '1s'"></div>
    </div>

    <!-- 关于我 -->
    <section class="space-y-6 relative">
      <h2 class="text-3xl font-bold text-geek-glitch relative overflow-hidden">
        <span class="relative z-10">关于我</span>
        <div class="absolute inset-0 bg-gradient-to-r from-geek-green to-emerald-400 opacity-20 -skew-y-12 transform scale-x-110"></div>
      </h2>

      <div class="prose prose-invert prose-lg text-zinc-400 space-y-4 relative">
        <p class="animate-fade-in-up">
          你好，我是程序员鱼皮。我是一名全栈工程师，同时也是一名热爱分享的技术博主。
        </p>

        <p class="animate-fade-in-up animate-delay-100">
          我致力于降低编程学习的门槛，帮助更多人进入 IT 行业并获得更好的职业发展。为此，我创建了
          <span class="text-white font-bold bg-gradient-to-r from-geek-green to-emerald-400 bg-clip-text text-transparent">编程导航</span> 和
          <span class="text-white font-bold bg-gradient-to-r from-geek-green to-emerald-400 bg-clip-text text-transparent">面试鸭</span> 等知名学习平台。
        </p>

        <p class="animate-fade-in-up animate-delay-200">
          我的 GitHub 上有许多开源项目，涵盖了 Java 后端、前端开发、AI 应用等多个领域。我希望通过代码和内容，连接每一位开发者。
        </p>
      </div>
    </section>

    <!-- 技能栈 -->
    <section class="space-y-6 relative">
      <h2 class="text-2xl font-bold text-white relative overflow-hidden">
        <span class="relative z-10">技能栈</span>
        <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-geek-green opacity-50"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group relative p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-geek-green/50 transition-all duration-300 overflow-hidden"
        >
          <!-- 背景渐变 -->
          <div class="absolute inset-0 bg-gradient-to-br from-geek-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- 技能名称 -->
          <h3 class="text-lg font-semibold text-white mb-3 relative z-10">{{ skill.name }}</h3>

          <!-- 技能条容器 -->
          <div class="relative z-10">
            <!-- 背景条 -->
            <div class="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <!-- 动态进度条 -->
              <div
                class="skill-bar h-full bg-gradient-to-r from-geek-green to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: '0%' }"
              ></div>
            </div>
            <!-- 百分比文字 -->
            <div class="text-xs text-zinc-500 mt-1 text-right">{{ skill.level }}%</div>
          </div>

          <!-- 装饰元素 -->
          <div class="absolute -top-2 -right-2 w-4 h-4 border border-geek-green/30 rounded animate-rotate-slow"></div>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section class="space-y-6 relative">
      <h2 class="text-2xl font-bold text-white flex items-center gap-2 relative">
        <span>联系我</span>
        <div class="flex-1 h-px bg-gradient-to-r from-geek-green to-transparent"></div>
      </h2>

      <p class="text-zinc-400 animate-fade-in-up">
        你可以通过 GitHub 或者我的社交媒体账号联系我。
      </p>

      <div class="flex flex-wrap gap-4 animate-fade-in-up animate-delay-100">
        <a
          href="https://github.com/liyupi"
          target="_blank"
          class="group px-6 py-3 border border-geek-green/50 text-geek-green rounded-lg hover:bg-geek-green hover:text-black transition-all duration-300 relative overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            <Github class="w-4 h-4" />
            GitHub @liyupi
          </span>
          <!-- 发光效果 -->
          <div class="absolute inset-0 bg-geek-green opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </a>

        <!-- 更多链接占位 -->
        <button
          class="px-6 py-3 border border-zinc-700 text-zinc-400 rounded-lg hover:border-zinc-500 hover:text-zinc-300 transition-all duration-300"
          disabled
        >
          敬请期待
        </button>
      </div>
    </section>

    <!-- 底部装饰 -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-geek-green to-transparent opacity-50"></div>
  </div>
</template>
