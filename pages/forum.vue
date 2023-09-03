<script setup lang="ts">
const { $client } = useNuxtApp()
const posts = await $client.forum.getPosts.query()
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Forum
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-3 mt-4 gap-6 overflow-y-auto>
      <ForumCard
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :user-name="post.user.name || 'Anonymous'"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
