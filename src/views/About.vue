<script setup>
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-12">
    <section class="space-y-6">
      <h2 class="text-3xl font-bold text-geek-green">关于我</h2>
      <div class="prose prose-invert prose-lg text-zinc-400">
        <p>
          你好，我是程序员鱼皮。我是一名全栈工程师，同时也是一名热爱分享的技术博主。
        </p>
        <p>
          我致力于降低编程学习的门槛，帮助更多人进入 IT 行业并获得更好的职业发展。为此，我创建了
          <span class="text-white font-bold">编程导航</span> 和 <span class="text-white font-bold">面试鸭</span> 等知名学习平台。
        </p>
        <p>
          我的 GitHub 上有许多开源项目，涵盖了 Java 后端、前端开发、AI 应用等多个领域。我希望通过代码和内容，连接每一位开发者。
        </p>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold text-white">技能栈</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-zinc-900 rounded border border-zinc-800 text-center hover:border-geek-green transition-colors">Java / Spring Boot</div>
        <div class="p-4 bg-zinc-900 rounded border border-zinc-800 text-center hover:border-geek-green transition-colors">Vue / React</div>
        <div class="p-4 bg-zinc-900 rounded border border-zinc-800 text-center hover:border-geek-green transition-colors">MySQL / Redis</div>
        <div class="p-4 bg-zinc-900 rounded border border-zinc-800 text-center hover:border-geek-green transition-colors">System Design</div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-bold text-white">联系我</h2>
      <p class="text-zinc-400">
        你可以通过 GitHub 或者我的社交媒体账号联系我。
      </p>
      <div class="flex gap-4">
        <a href="https://github.com/liyupi" class="text-geek-green hover:underline">GitHub @liyupi</a>
      </div>
    </section>
  </div>
</template>
