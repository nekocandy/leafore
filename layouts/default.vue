<script setup lang="ts">

</script>

<template>
  <div class="bg-[#ECE9E3]" flex="~ col" bg-stretch h-screen gap-4 overflow-y-hidden bg-cover bg-no-repeat px-4 py-4 style="background-image: url(/bg.png);">
    <div>
      <Navbar />
    </div>
    <div flex-1>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
