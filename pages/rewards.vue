<script setup lang="ts">
const { $client } = useNuxtApp()
const userInfo = await $client.user.getUser.query({})
const rewards = await $client.rewards.getRewards.query()
</script>

<template>
  <div h-full w-full flex flex-col gap-2>
    <h1 text-xl font-imprima class="text-[#645956]">
      Rewards
    </h1>

    <div h-0.5 w-full rounded-full class="bg-[#8F7264]" />

    <div grid grid-cols-3 mt-4 gap-6 overflow-y-auto>
      <RewardsCard
        v-for="reward in rewards"
        :id="reward.id"
        :key="reward.id"
        :title="reward.name"
        :description="reward.description"
        :semi-description="reward.semiDescription"
        :points-required="reward.pointsRequired"
        :current-points="userInfo.points"
        :image="reward.image"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
