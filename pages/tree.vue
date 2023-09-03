<script setup lang="ts">
import treeOne from '~/assets/tree/1.png'
import treeTwo from '~/assets/tree/2.png'
import treeThree from '~/assets/tree/3.png'
import treeFour from '~/assets/tree/4.png'
import treeFive from '~/assets/tree/5.png'
import treeSix from '~/assets/tree/6.png'

const trees = [
  treeOne,
  treeTwo,
  treeThree,
  treeFour,
  treeFive,
  treeSix,
]
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Plant a tree <span text-sm>~ The leaderboard has granted you a reward, select a plant from below, it will pe planted in your name</span>
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-4 mt-4 gap-6 overflow-y-auto>
      <div v-for="tree in trees" :key="tree">
        <img :src="tree" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
