<script setup lang="ts">
import { usePush } from 'notivue'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  pointsRequired: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  semiDescription: {
    type: String,
    required: true,
  },
  currentPoints: {
    type: Number,
    required: true,
  },
})

const { $client } = useNuxtApp()
const push = usePush()

const mutation = $client.rewards.redeemReward
const userInfoQuery = $client.user.getUser

async function completeDeed() {
  const promise = push.promise('Redeeming reward...')
  const userInfo = await userInfoQuery.query({})

  if (userInfo.points < props.pointsRequired) {
    promise.reject('You do not have enough points to redeem this reward')
    return
  }

  await mutation.mutate({
    id: props.id,
    points: props.pointsRequired,
  })

  promise.resolve(
    'Reward redeemed, further information would be emailed to you shortly! Thank you for your helping us to maintain a sustainable environment',
  )
}
</script>

<template>
  <div flex flex-col gap-4 rounded-md bg-white px-4 py-4>
    <div
      h-40 rounded-md bg-cover bg-center bg-no-repeat
      :style="{
        backgroundImage: `url(${image})`,
      }"
    />

    <div>
      <p font-imprima class="text-xs text-[#94BAB8]" font-mono>
        {{ semiDescription }}
      </p>

      <h1
        font-imprima class="text-md text-[#425551]"
      >
        {{ title }}
      </h1>
    </div>

    <button :disabled="$props.currentPoints < $props.pointsRequired" class="bg-[#94BAB2] disabled:cursor-not-allowed" justify-self-end rounded-md py-2 font-imprima text-white @click="completeDeed">
      Redeem for {{ numberpad(pointsRequired, 2) }} Points
    </button>
  </div>
</template>

<style scoped>

</style>
