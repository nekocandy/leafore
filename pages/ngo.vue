<script setup lang="ts">
import NGOImage from '~/assets/ngo/banner.png'

const NGOS = [
  {
    name: 'Adsons Foundation',
    location: 'India',
    type: 'Non-governmental organization',
    contact: '09922339768',
  },

  {
    name: 'Love Heals Foundation',
    location: 'India',
    type: 'Non-profit organization',
    contact: '09922339768',
  },
]
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Support a cause
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div

      :style="{
        backgroundImage: `url(${NGOImage})`,
      }"
      class="text-[#533E45]"
      h-48 flex items-center rounded-lg bg-cover bg-no-repeat px-8 text-center text-2xl font-imprima
    >
      NGO's <br>  Nearby
    </div>

    <div grid grid-cols-2 mt-4 gap-6 overflow-y-auto>
      <NGOCard
        v-for="ngo in NGOS"
        :key="ngo.name"
        :name="ngo.name"
        :location="ngo.location"
        :type="ngo.type"
        :contact="ngo.contact"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
