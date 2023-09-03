<script setup lang="ts">
const { $client } = useNuxtApp()
const deeds = await $client.deeds.getDeeds.query()
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Deeds
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-3 mt-4 gap-6>
      <DeedsCard
        v-for="deed in deeds"
        :id="deed.id"
        :key="deed.id"
        :image="deed.image"
        :title="deed.title"
        :points-required="deed.pointsRequired"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
