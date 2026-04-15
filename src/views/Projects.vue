<script setup>
import { Star, ExternalLink } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const projects = ref([
  {
    id: 1,
    name: '面试鸭 (mianshiya-next)',
    desc: '持续维护的企业面试题库网站，帮你拿到满意 offer！',
    lang: 'TypeScript',
    stars: '5.1k',
    url: 'https://github.com/liyupi/mianshiya-next'
  },
  {
    id: 2,
    name: '编程导航 (codefather-friend)',
    desc: '编程学习路线与资源，一站式编程学习平台。',
    lang: 'TypeScript',
    stars: '6.5k',
    url: 'https://github.com/liyupi/codefather-friend'
  },
  {
    id: 3,
    name: 'AI 资源大全 (yupi-ai)',
    desc: '程序员鱼皮的 AI 资源大全，分享大模型、Prompt 等。',
    lang: 'JavaScript',
    stars: '4k',
    url: 'https://github.com/liyupi/yupi-ai'
  },
  {
    id: 4,
    name: 'SQL 之父 (sql-father)',
    desc: '免费的闯关交互式 SQL 自学教程网站。',
    lang: 'TypeScript',
    stars: '3.9k',
    url: 'https://github.com/liyupi/sql-father'
  },
  {
    id: 5,
    name: 'YuIndex',
    desc: '极客范儿的浏览器主页，支持命令行操作。',
    lang: 'TypeScript',
    stars: '2.1k',
    url: 'https://github.com/liyupi/yuindex'
  }
])

// 星星闪烁效果
const starAnimation = (id) => {
  return `animate-flicker-${Math.floor(Math.random() * 3 + 1)}`
}

// 初始化动画
onMounted(() => {
  // 添加项目卡片动画
  setTimeout(() => {
    document.querySelectorAll('.project-card').forEach((card, index) => {
      card.classList.add('animate-fade-in-up')
      card.style.animationDelay = `${index * 0.1}s`
    })
  }, 100)
})
</script>

<template>
  <div class="space-y-8">
    <!-- 标题动画 -->
    <div class="relative overflow-hidden">
      <h2 class="text-3xl font-bold border-l-4 border-geek-green pl-4 glitch-text" data-text="开源项目">
        开源项目
      </h2>
      <!-- 装饰线条 -->
      <div class="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-geek-green to-transparent animate-neon-pulse"></div>
    </div>

    <!-- 项目网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card bg-zinc-900 border border-zinc-800 rounded-lg p-6 group flex flex-col relative overflow-hidden"
      >
        <!-- 背景装饰 -->
        <div class="absolute inset-0 bg-gradient-to-br from-geek-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <!-- 卡片悬浮效果 -->
        <div
          class="absolute inset-0 rounded-lg border border-transparent group-hover:border-geek-green/30 transition-all duration-300"
        ></div>

        <!-- 扫描线 -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-geek-green to-transparent opacity-30"
            :style="{ top: `${(project.id * 20) % 100}%` }"
          ></div>
        </div>

        <div class="flex justify-between items-start mb-4 relative z-10">
          <h3
            class="text-xl font-bold text-zinc-100 group-hover:text-geek-green transition-all duration-300 transform group-hover:translate-x-1"
          >
            {{ project.name }}
          </h3>
          <a
            :href="project.url"
            target="_blank"
            class="text-zinc-500 hover:text-white transition-all duration-300 transform hover:rotate-12"
          >
            <ExternalLink class="w-5 h-5" />
          </a>
        </div>

        <p class="text-zinc-400 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
          {{ project.desc }}
        </p>

        <!-- 技能标签 -->
        <div class="flex items-center gap-2 mb-4 relative z-10">
          <span
            class="px-2 py-1 text-xs rounded font-medium bg-zinc-800 text-zinc-300"
          >
            {{ project.lang }}
          </span>
        </div>

        <!-- 底部信息 -->
        <div class="flex items-center justify-between text-xs text-zinc-500 mt-auto relative z-10">
          <div class="flex items-center gap-2">
            <span class="flex items-center gap-1">
              <Star :class="starAnimation(project.id)" class="w-3 h-3 text-yellow-400" />
              {{ project.stars }}
            </span>
          </div>

          <!-- 进度条 -->
          <div class="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-geek-green to-emerald-400 rounded-full"
              :style="{ width: `${(parseInt(project.stars) / 100) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- 3D 卡片效果 -->
        <div class="card-3d absolute inset-0 rounded-lg"></div>
      </div>
    </div>

    <!-- 空状态提示 -->
    <div v-if="projects.length === 0" class="text-center py-12">
      <p class="text-zinc-500">暂无项目</p>
    </div>
  </div>
</template>
