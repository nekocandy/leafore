<script setup lang="ts">
const { data } = useAuth()
</script>

<template>
  <div class="bg-[#D0AA98]" flex="~ col" rounded-md>
    <div class="bg-[#B5C4B2] text-[#2B423D]" flex flex-col items-center gap-4 rounded-t-md px-8 py-4>
      <span font-imprima underline>Hi, {{ data?.user?.name }}</span>

      <div>
        <img class="ring-[#B5C4B2] -mb-3/4" h-24 rounded-full ring-10 :src="data?.user?.image || ''" alt="">
      </div>
    </div>
    <div mt-18 px-8 py-4>
      <div mb-14 h-1 w-full rounded-full class="bg-[#8F7264]" />
    </div>
  </div>
</template>

<style scoped>

</style>
