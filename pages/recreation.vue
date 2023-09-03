<script setup lang="ts">
import paper from '~/assets/recreation/paper.png'
import doodle from '~/assets/recreation/doodle.png'
import pot from '~/assets/recreation/pot.png'
import clothes from '~/assets/recreation/clothes.png'

const DATA = [
  {
    image: paper,
    title: 'Recycle Paper',
    description: 'Recycle paper to save trees',
  },
  {
    image: doodle,
    title: 'Doodle',
    description: 'Doodle to express your creativity',
  },
  {
    image: pot,
    title: 'Pot a Plant',
    description: 'Pot a plant to make your home greener',
  },
  {
    image: clothes,
    title: 'Donate Clothes',
    description: 'Donate clothes to the needy',
  },
]
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Recreational Activity
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-2 mt-4 gap-6 overflow-y-auto>
      <RecreationCard
        v-for="data in DATA"
        :key="data.title"
        :image="data.image"
        :title="data.title"
        :description="data.description"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
