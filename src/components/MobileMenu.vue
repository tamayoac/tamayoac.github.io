<template>
  <div
    class="
      flex flex-wrap
      absolute
      right-0
      top-0
      mt-16
      mr-4
      border border-lightBlue
      text-default
      w-48
      shadow-xl
      z-20
      bg-white
    "
  >
    <button
      @click="emitToggle('/work')"
      class="
        w-full
        text-left text-md
        py-3
        border-b border-lightBlue
        px-4
        bg-lightBlue
      "
      :class="$route.path === '/work' ? 'bg-graphite text-white' : ''"
    >
      Work
    </button>
    <button
      @click="emitToggle('/about')"
      class="
        w-full
        text-left text-md
        py-3
        px-4
        border-b border-lightBlue
        bg-lightBlue
      "
      :class="$route.path === '/about' ? 'bg-graphite text-white' : ''"
    >
      About
    </button>
  </div>
</template>

<script>
export default {
  props: {
    toogleMenu: Boolean,
  },
  methods: {
    emitToggle(url) {
      this.$router.push(url);
    },
  },
};
</script>