<script setup lang="ts">
import { faker } from '@faker-js/faker'

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div w-full flex gap-4 rounded-lg bg-white px-4 py-4>
    <div
      :style="{
        backgroundImage: `url(${image})`,
      }" class="h-full w-48 rounded-md bg-cover bg-center bg-no-repeat"
    />

    <div flex="~ col" w-full justify-between gap-4 pt-2>
      <div>
        <h1 font-imprima class="text-[#645956]">
          {{ title }}
        </h1>

        <div flex items-center gap-2 text-xs class="text-[#B2B9C0]">
          <span font-bold>Date: </span>
          <span>{{ dayjs(faker.date.future()).format("DD/MM/YY") }}</span>
        </div>

        <div flex items-center gap-2 text-xs class="text-[#B2B9C0]">
          <span font-bold>Time: </span>
          <span>{{ dayjs(faker.date.future()).format("DD/MM/YY HH:MM") }}</span>
        </div>

        <div pt-2 text-xs>
          {{ description }}
        </div>
      </div>

      <div
        self-end
      >
        <button
          font-imprima
          class="w-full rounded-md bg-[#DDD] px-12 py-2 font-imprima text-black"
        >
          Join
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
