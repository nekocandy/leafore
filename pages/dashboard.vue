<script setup lang="ts">
const time = ref('')

function setTime() {
  const currentTime = dayjs()

  time.value = currentTime.format('DD/MM/YY, HH:mm:ss A')
}

onMounted(() => {
  setTime()

  setInterval(setTime, 1000)
})
</script>

<template>
  <div grid grid-cols-12 h-full w-full gap-4>
    <div col-span-3 w-full>
      <DashboardProfile />
    </div>

    <div col-span-9 h-full w-full flex flex-col gap-4>
      <div class="bg-[#CDA2B1] text-[#533E45]" col-span-2 h-fit rounded-md py-4 text-center text-3xl font-k2d>
        “Waste isn’t waste until we waste it”
      </div>
      <div grid grid-cols-2 h-full w-full gap-4>
        <div h-full w-full flex flex-col gap-4>
          <div class="bg-[#DCD7AB]" rounded-md flex="~ col">
            <div class="bg-[#989362]" rounded-t-md py-3 text-center text-white>
              A sustainable step taken today?
            </div>

            <div grid grid-cols-3 gap-4 px-4 py-4 font-imprima>
              <div class="bg-[#DA9393]" rounded-xl px-2 py-8 text-center>
                Not Yet
              </div>

              <div class="bg-[#B3A642]" rounded-xl px-2 py-8 text-center>
                In Progress
              </div>

              <div class="bg-[#95BF99]" rounded-xl px-2 py-8 text-center>
                Done
              </div>
            </div>

            <div class="bg-[#989362]" rounded-b-md py-3 text-center text-white>
              {{ time }}
            </div>
          </div>
        </div>

        <div bg-pink />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
