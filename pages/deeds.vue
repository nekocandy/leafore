<script setup lang="ts">
const { $client } = useNuxtApp()
const userInfo = await $client.user.getUser.query({})
const deeds = await $client.deeds.getDeeds.query()
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Deeds
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-3 mt-4 gap-6 overflow-y-auto>
      <DeedsCard
        v-for="deed in deeds"
        :id="deed.id"
        :key="deed.id"
        :image="deed.image"
        :title="deed.name"
        :points-required="deed.points"
        :completed="userInfo.DeedsCompleted.filter((d) => d.deedId === deed.id).length > 0"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
