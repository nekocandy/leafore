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
  completed: {
    type: Boolean,
    required: true,
  },
})

const { $client } = useNuxtApp()
const push = usePush()

const completed = ref(props.completed)

const mutation = $client.deeds.completeDeed

async function completeDeed() {
  const promise = push.promise('Marking deed as complete...')
  await mutation.mutate({
    id: props.id,
    points: props.pointsRequired,
  })

  completed.value = true

  promise.resolve(
    'Deed marked as complete! Points have been credited.',
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
        {{ numberpad(pointsRequired, 2) }} Points
      </p>

      <h1
        font-imprima class="text-md text-[#425551]" :class="{
          'line-through': completed,
        }"
      >
        {{ title }}
      </h1>
    </div>

    <button :disabled="completed" class="bg-[#94BAB2] disabled:cursor-not-allowed" justify-self-end rounded-md py-2 font-imprima text-white @click="completeDeed">
      Do the deedful
    </button>
  </div>
</template>

<style scoped>

</style>
