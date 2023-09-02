<script setup lang="ts">
import suppliesImage from '~/assets/dashboard/supplies.png'
import pencilImage from '~/assets/dashboard/pencil.png'

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
              <div class="bg-[#DA9393]" rounded-xl px-2 py-4 text-center>
                Not Yet
              </div>

              <div class="bg-[#B3A642]" rounded-xl px-2 py-4 text-center>
                In Progress
              </div>

              <div class="bg-[#95BF99]" rounded-xl px-2 py-4 text-center>
                Done
              </div>
            </div>

            <div class="bg-[#989362]" rounded-b-md py-3 text-center text-white>
              {{ time }}
            </div>
          </div>

          <div class="bg-[#94BAB2]" flex flex-1 flex-col gap-2 rounded-md px-4 py-4>
            <div
              flex-1 rounded-md bg-cover bg-center bg-no-repeat
              :style="{
                backgroundImage: `url(${suppliesImage})`,
              }"
            />

            <div px-4 text-center text-sm font-imprima>
              Discuss your ideas with your friends, share and get more views on best sustainability practices!
            </div>
          </div>
        </div>

        <div h-full w-full flex flex-col gap-4>
          <div flex flex-1 flex-col gap-2 rounded-md bg-white px-4 py-4>
            <div
              flex-1 rounded-md bg-cover bg-center bg-no-repeat
              :style="{
                backgroundImage: `url(${pencilImage})`,
              }"
            />

            <div px-4 text-center text-sm font-imprima class="text-[#545F71]">
              Educate yourself for the future generations to come, take your daily quiz!
            </div>
          </div>

          <div class="bg-[#87728F]" rounded-md flex="~ col">
            <div class="bg-[#493F4D]" rounded-t-md py-3 text-center text-white>
              NGO Quick Links
            </div>

            <div flex flex-col gap-4 px-4 py-4 font-imprima>
              ~ Link
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
