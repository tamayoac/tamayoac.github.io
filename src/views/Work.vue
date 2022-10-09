<template>
  <div id="work" class="flex flex-wrap w-full py-10 max-w-5xl mx-auto">
    <div
      class="
        text-graphite
        font-bold
        text-2xl
        uppercase
        w-full
        pb-12
        text-left
        px-6
      "
    >
      Where I've Worked
    </div>

    <div
      v-for="data in mywork"
      :key="data.company"
      class="flex flex-wrap text-default w-full"
    >
      <div
        class="
          lg:text-right
          text-left
          lg:w-1/4
          w-full
          border-graphite border-r-4
          pr-5
          pt-4
          pl-10
          lg:pl-0
        "
      >
        <a
          :href="data.site"
          target="_blank"
          :class="data.isPresent ? 'text-pink font-bold' : 'text-graphite'"
          >{{ data.company }}</a
        >
        <div class="text-xs">{{ data.date }}</div>
      </div>
      <div class="text-left px-10 lg:w-3/4 w-full pt-4">
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