<template>
  <div
    class="
      sticky
      z-20
      flex
      justify-between
      items-center
      w-full
      lg:px-64
      px-6
      py-2
      shadow-sm
      top-0
      left-0
      right-0
      bg-white
    "
  >
    <div class="text-lightBlue font-bold text-xl">
      <router-link to="/" class="text-graphite">ATIII</router-link>
    </div>
    <div class="items-center text-default lg:flex hidden">
      <!-- <a class="mx-4" href="#about" v-smooth-scroll>About</a> -->
      <!-- <a class="mx-4" href="#work" v-smooth-scroll>Work</a> -->
      <router-link
        class="mx-4"
        to="/about"
        :class="
          $route.path === '/about'
            ? 'border-b-2 border-graphite text-graphite'
            : ''
        "
      >
        About
      </router-link>
      <router-link
        class="mx-4"
        to="/work"
        :class="
          $route.path === '/work'
            ? 'border-b-2 border-graphite text-graphite'
            : ''
        "
        >Work</router-link
      >
    </div>
    <div class="block lg:hidden">
      <button @click="isToggled" class="text-lightBlue focus:outline-none">
        <font-awesome-icon
          icon="fa-bars"
          size="lg "
          :style="{ color: '#52514f' }"
        />
      </button>
    </div>
  </div>
  <MobileMenu v-if="toggleMenu" :toogleMenu="toggleMenu" />
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";
export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    isToggled() {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>
