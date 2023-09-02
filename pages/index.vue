<script setup lang="ts">
definePageMeta({
  auth: false,
})

const { status } = useAuth()

if (status.value === 'authenticated')
  navigateTo('/dashboard')

else
  navigateTo('/login')
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-zinc-900 font-mono text-white">
    Hello, Pizza!
  </div>
</template>

<style scoped>

</style>
