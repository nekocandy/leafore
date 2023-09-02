<script setup lang="ts">
const { signOut } = useAuth()
</script>

<template>
  <div flex items-center gap-4>
    <div class="bg-[#D0BCBC] text-[#432C2C]" flex items-center gap-1 rounded-md px-6 py-2 font-imprima>
      <div class="text-[#432C2C]" i-tabler-plant-2 />
      Leafore
    </div>

    <div flex-1 rounded-md class="bg-[#BFCDC0]" px-12 py-2>
      .
    </div>

    <button class="bg-[#D0BCBC]" rounded-md px-6 py-2 text-sm @click="signOut()">
      Logout
    </button>
  </div>
</template>

<style scoped>

</style>
