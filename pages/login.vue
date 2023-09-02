<script setup lang="ts">
definePageMeta({
  auth: false,
})

const { signIn, status } = useAuth()

if (status.value === 'authenticated')
  navigateTo('/dashboard')

watch(status, (value) => {
  if (value === 'authenticated')
    navigateTo('/dashboard')
})
</script>

<template>
  <div class="pl-1/8" h-full w-full flex flex-col items-start justify-center bg-cover bg-bottom bg-no-repeat px-12 style="background-image: url(/login-bg.png);">
    <div class="bg-[#D4C3A0]" rounded-md px-8 py-8>
      <div flex="~ col" items-center gap-4 rounded-md bg-white px-6 py-6>
        <h1 class="text-[#545F71]" text-2xl font-semibold font-imprima>
          Leafore
        </h1>

        <div class="text-[#545F71] -mt-4">
          Your step towards a sustainable future!
        </div>

        <button w-full class="bg-[#D0AA98] text-[#141E06]" rounded-md py-2 font-semibold @click="signIn('discord')">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
