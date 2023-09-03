<script setup lang="ts">
const { signOut } = useAuth()

interface Pages {
  name: string
  location: string
}
const PAGES: Pages[] = [
  {
    name: 'Deeds',
    location: '/deeds',
  },
  {
    name: 'Rewards',
    location: '/rewards',
  },
  {
    name: 'Forum',
    location: '/forum',
  },
  {
    name: 'Tree',
    location: '/tree',
  },
  {
    name: 'Recreation',
    location: '/recreation',
  },
  {
    name: 'Crossword',
    location: '/crossword',
  },
  {
    name: 'NGO',
    location: '/ngo',
  },
  {
    name: 'News',
    location: '/news',
  },
  {
    name: 'Chatbot',
    location: '/chatbot',
  },
]
</script>

<template>
  <div flex items-center gap-4>
    <NuxtLink to="/dashboard" class="bg-[#D0BCBC] text-[#432C2C]" flex items-center gap-1 rounded-md px-6 py-2 font-imprima>
      <div class="text-[#432C2C]" i-tabler-plant-2 />
      Leafore
    </NuxtLink>

    <div class="bg-[#BFCDC0]" flex flex-1 items-center justify-evenly rounded-md px-4 py-2>
      <NuxtLink
        v-for="page in PAGES" :key="page.location" class="text-[#6B8E6E]" :class="{
          'text-white bg-[#90AD92] rounded-full px-4 py-1': page.location.startsWith($route.path),
        }" :to="page.location"
      >
        {{ page.name }}
      </NuxtLink>
    </div>

    <button class="bg-[#D0BCBC]" rounded-md px-6 py-2 text-sm @click="signOut()">
      Logout
    </button>
  </div>
</template>

<style scoped>

</style>
