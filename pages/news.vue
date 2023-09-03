<script setup lang="ts">
const NEWS = [
  {
    name: 'Hitachi - Reducing the burden on the environment by using the Chatbot Service',
    link: 'https://www.hitachi.com/products/it/sustainability/environment/co2-reduction/chatbot.html',
  },
  {
    name: 'Chatbots for Learning: Can AI-Powered Chatbots Drive a More Sustainable Society?',
    link: 'https://articles.noodlefactory.ai/chatbots-for-learning-can-ai-chatbots-drive-more-sustainable-society',
  },
]
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      News about Sustainability
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-2 h-full flex-1 gap-4 py-4>
      <div v-for="news in NEWS" :key="news.name" class="flex items-center gap-3" h-fit rounded-md bg-white px-4 py-4>
        <div i-tabler-link h-8 w-8 />
        <a :href="news.link" hover:underline target="_blank" class="text-lg font-imprima text-[#645956]">
          {{ news.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
