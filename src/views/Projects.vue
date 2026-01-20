<script setup>
import { Star, ExternalLink } from 'lucide-vue-next'

const projects = [
  {
    name: '面试鸭 (mianshiya-next)',
    desc: '持续维护的企业面试题库网站，帮你拿到满意 offer！',
    lang: 'TypeScript',
    stars: '5.1k',
    url: 'https://github.com/liyupi/mianshiya-next'
  },
  {
    name: '编程导航 (codefather-friend)',
    desc: '编程学习路线与资源，一站式编程学习平台。',
    lang: 'TypeScript',
    stars: '6.5k',
    url: 'https://github.com/liyupi/codefather-friend'
  },
  {
    name: 'AI 资源大全 (yupi-ai)',
    desc: '程序员鱼皮的 AI 资源大全，分享大模型、Prompt 等。',
    lang: 'JavaScript',
    stars: '4k',
    url: 'https://github.com/liyupi/yupi-ai'
  },
  {
    name: 'SQL 之父 (sql-father)',
    desc: '免费的闯关交互式 SQL 自学教程网站。',
    lang: 'TypeScript',
    stars: '3.9k',
    url: 'https://github.com/liyupi/sql-father'
  },
  {
    name: 'YuIndex',
    desc: '极客范儿的浏览器主页，支持命令行操作。',
    lang: 'TypeScript',
    stars: '2.1k',
    url: 'https://github.com/liyupi/yuindex'
  }
]
</script>

<template>
  <div class="space-y-8">
    <h2 class="text-3xl font-bold border-l-4 border-geek-green pl-4">开源项目</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.name" 
           class="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-geek-green/50 transition-all hover:shadow-lg hover:shadow-geek-green/10 group flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-zinc-100 group-hover:text-geek-green transition-colors">{{ project.name }}</h3>
          <a :href="project.url" target="_blank" class="text-zinc-500 hover:text-white">
            <ExternalLink class="w-5 h-5" />
          </a>
        </div>
        
        <p class="text-zinc-400 text-sm mb-6 flex-grow">{{ project.desc }}</p>
        
        <div class="flex items-center justify-between text-xs text-zinc-500 mt-auto">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-yellow-400" v-if="project.lang === 'JavaScript'"></span>
            <span class="w-3 h-3 rounded-full bg-blue-500" v-else-if="project.lang === 'TypeScript'"></span>
            <span class="w-3 h-3 rounded-full bg-red-500" v-else-if="project.lang === 'Java'"></span>
            <span class="w-3 h-3 rounded-full bg-gray-500" v-else></span>
            {{ project.lang }}
          </div>
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1"><Star class="w-3 h-3" /> {{ project.stars }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
