<template>
  <div id="info" class="flex flex-wrap justify-center max-w-5xl mx-auto">
    <div class="lg:w-4/5 w-full px-4 lg:py-52 py-32 text-left">
      <div class="text-lg font-semibold text-graphite">Hi, my name is</div>
      <div class="lg:text-6xl text-3xl font-bold mt-5 text-graphite">
        Alfred Tamayo.
      </div>
      <div class="lg:text-6xl text-3xl font-bold mt-5 text-graphite">
        I Build things for the web.
      </div>
      <div class="lg:text-md mt-5 text-default text-md leading-loose">
        Hi! I'm Alfred Christopher Tamayo III, a software engineer based in
        Davao, Philippines. with 6 years of experience in the field of software
        engineering, particularly in web development; both in front-end and
        back-end development. Also knowledgable in mobile development;
        specifically on cross-platform mobile app development. Good management
        skills for both team and project. At the same time, can work with
        minimal supervision.
      </div>
      <div class="flex items-center mt-5">
        <router-link
          class="
            btn3
            px-4
            py-3
            bg-graphite
            border
            rounded-md
            text-white
            shadow-md
          "
          to="/contact"
        >
          Get In Touch
        </router-link>
        <a href="https://github.com/tamayoac" target="_blank" class="ml-3"
          ><font-awesome-icon
            icon="fa-brands fa-github-square"
            size="2xl"
            :style="{ color: '#171515' }"
        /></a>
        <a
          href="https://www.linkedin.com/in/alfred-christopher-tamayo-iii-53522a166"
          target="_blank"
          class="ml-3"
          ><font-awesome-icon
            icon="fa-brands fa-linkedin"
            size="2xl"
            :style="{ color: '#0072b1' }"
        /></a>
      </div>
    </div>
    <div class="lg:w-1/5 w-full"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>