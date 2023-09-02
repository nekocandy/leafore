<script setup lang="ts">
definePageMeta({
  auth: false,
})

const { status, signIn, signOut } = useAuth()

async function auth() {
  if (status.value === 'authenticated')
    signOut()

  else
    await signIn('discord')
}
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-zinc-900 font-mono text-white">
    Hello, Pizza!

    <button bg-pink px-4 py-2 text-white @click="auth()">
      {{ status === 'authenticated' ? 'Sign Out' : 'Sign In' }}
    </button>
  </div>
</template>

<style scoped>

</style>
