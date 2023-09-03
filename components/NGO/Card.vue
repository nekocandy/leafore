<script setup lang="ts">
defineProps({
  name: String,
  location: String,
  type: String,
  contact: String,
})
</script>

<template>
  <div flex flex-col gap-2 rounded-md bg-white px-4 py-2 font-sans class="text-[#545F71]">
    <h1 font-extrabold>
      {{ name }}
    </h1>
    <div flex items-center gap-1 text-xs>
      <div i-tabler-location />
      {{ location }}
    </div>

    <div flex items-center gap-1 text-xs>
      <div i-tabler-info-circle />
      {{ type }}
    </div>

    <div w-full px-2>
      <button class="bg-[#718B86]" w-full flex items-center justify-center gap-2 rounded-md py-2 font-bold text-white>
        <div i-tabler-phone />
        <div>
          Contact:
        </div>
        {{ contact }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
