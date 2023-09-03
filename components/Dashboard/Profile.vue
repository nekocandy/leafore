<script setup lang="ts">
const { data } = useAuth()
const { $client } = useNuxtApp()

const userData = await $client.user.getUser.query({})
</script>

<template>
  <div class="bg-[#D0AA98]" flex="~ col" rounded-md>
    <div class="bg-[#B5C4B2] text-[#2B423D]" flex flex-col items-center gap-4 rounded-t-md px-8 py-4>
      <span font-imprima underline>Hi, {{ data?.user?.name }}</span>

      <div>
        <img class="ring-[#B5C4B2] -mb-3/4" h-24 rounded-full ring-10 :src="data?.user?.image || ''" alt="">
      </div>
    </div>
    <div mt-18 flex flex-col gap-4 px-4 py-4>
      <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

      <div flex flex-col rounded-md bg-white>
        <div class="bg-[#D0D7DD]" rounded-t-md py-2 text-center text-sm>
          Redeemable Points
        </div>

        <div class="text-[#6F6F6F]" rounded-b-md py-2 text-center text-4xl font-k2d>
          {{ numberpad(userData.points, 4) }}
        </div>
      </div>

      <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

      <div flex items-center text-xs font-imprima>
        <span>Total deeds completed</span>
        <div ml-auto rounded bg-white px-2 py-1>
          {{ numberpad(userData.DeedsCompleted.length, 2) }}
        </div>
      </div>

      <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

      <div flex items-center text-xs font-imprima>
        <span>Total rewards earned</span>
        <div ml-auto rounded bg-white px-2 py-1>
          {{ numberpad(userData.DeedRewardsClaimed.length, 2) }}
        </div>
      </div>

      <!-- <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

      <div flex items-center text-xs font-imprima>
        <span>Total deeds completed</span>
        <div ml-auto rounded bg-white px-2 py-1>
          {{ userData.points }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>

</style>
