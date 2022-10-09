<template>
  <div id="work" class="flex flex-wrap w-full pt-10 max-w-5xl mx-auto">
    <div
      class="text-graphite font-bold text-2xl uppercase w-full pb-12 text-left"
    >
      Where I've Worked
    </div>

    <div
      v-for="data in mywork"
      :key="data.company"
      class="flex flex-wrap text-default w-full"
    >
      <div class="text-right lg:w-1/4 border-graphite border-r-4 pr-5 pt-4">
        <div class="text-graphite">{{ data.company }}</div>
        <div class="text-xs">{{ data.date }}</div>
      </div>
      <div class="text-left px-10 lg:w-3/4 pt-4">
        <div class="pb-4 font-bold uppercase text-graphite">
          {{ data.position }}
        </div>
        <div v-for="sub in data.task" :key="sub.description">
          <div v-if="sub.description">
            <ul class="list-disc">
              <li>{{ sub.description }}</li>
            </ul>
          </div>
          <div v-else>
            <div>N/A</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { work } from "../constant/work";
export default {
  data() {
    return {
      mywork: work,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>