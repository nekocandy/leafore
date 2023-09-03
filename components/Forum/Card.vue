<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div flex flex-col justify-between gap-4 rounded-md bg-white px-4 py-4 font-imprima>
    <div flex items-center gap-1 text-xs font-mono class="-mb-2">
      <div>
        Post ID:
      </div>
      <div class="text-[#645956]" underline>
        {{ id }}
      </div>
    </div>
    <h1 font-imprima class="text-[#645956]">
      {{ title }}
    </h1>

    <div flex items-center gap-1 text-sm>
      <span class="text-[#645956]">Post By</span>
      <span class="font-bold text-[#645956]">{{ userName }}</span>
    </div>

    <button class="bg-[#718B86]" w-full flex items-center justify-center gap-1 rounded-md px-8 py-2 text-white>
      <div i-tabler-heart />
      <div>
        Contribute
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>
