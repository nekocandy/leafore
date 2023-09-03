<script setup lang="ts">
const { $client } = useNuxtApp()
const userInfo = await $client.user.getUser.query({})
const deeds = await $client.deeds.getDeeds.query()
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Chatbot <span text-sm>~ Chat with your OpenAI bot using our custom prompts to gain in depth insights on sustainability</span>
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div class="bg-lime/50 text-lime-800" rounded-full px-4 py-2 text-center>
      You need to enter your own openAI token, we provide the prompts related to sustainability
    </div>

    <div flex items-center justify-center gap-2 py-6>
      <input border-2 border-black rounded-full text-center class="w-1/2 px-4 py-2 focus:outline-none" placeholder="Enter your openAI token to continue" type="password">
    </div>
  </div>
</template>

<style scoped>

</style>
