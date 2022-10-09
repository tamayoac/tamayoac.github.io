<template>
  <div id="about" class="max-w-5xl mx-auto">
    <div class="py-8 lg:px-0 px-4">
      <div class="flex flex-wrap items-center py-3">
        <div class="text-graphite font-bold text-2xl uppercase">About Me</div>
      </div>
      <div class="flex flex-wrap py-6">
        <div
          class="
            lg:w-3/5
            w-full
            text-default text-justify
            lg:text-xl
            text-md
            mt-12
            lg:mt-0
          "
        >
          Passionate Software Enginner with 6+ years of experience in web
          applications and software development, Experienced in working with
          teams in different software development stages, ensuring a
          high-quality and fulfillment of business market needs.
        </div>
        <div class="lg:w-2/5 w-full mt-4">
          <div class="flex items-center h-full justify-center">
            <div
              class="
                imagecontainer
                relative
                w-72
                h-72
                flex
                justify-center
                items-center
                shadow-xl
                z-10
              "
            >
              <img
                src="../assets/me.png"
                class="w-full h-full object-cover rounded-md"
              />
            </div>
            <div
              class="
                border-2
                absolute
                rounded-md
                border-graphite
                w-72
                h-72
                -mr-8
                -mb-8
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-full lg:py-10 py-2">
        <div
          class="
            text-right text-graphite
            font-bold
            text-2xl
            uppercase
            w-full
            pb-12
          "
        >
          My Tech Stack
        </div>
        <div
          class="
            grid
            xl:grid-cols-6
            lg:grid-cols-6
            md:grid-cols-3
            sm:grid-cols-3
            xs:grid-cols-2
            gap-4
            w-full
          "
        >
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/laravel.png" class="w-22 h-16" />
            <label class="font-bold mt-5 w-full text-center text-laravel"
              >Laravel</label
            >
          </div>
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/vuejs.png" class="w-16 h-14" />
            <label class="font-bold mt-1 text-vuejs w-full pt-6 text-center"
              >Vuejs</label
            >
          </div>
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/reactjs.png" class="w-16 h-14" />
            <label class="font-bold text-center text-reactjs w-full mt-8"
              >React</label
            >
          </div>
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/mysql.png" class="w-16 h-16" />
            <label class="font-bold text-center w-full mt-6">
              <span class="text-my">My</span><span class="text-sql">SQL</span>
            </label>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/trinity.png" class="w-28 h-16" />
            <label class="font-bold text-center w-full mt-6">
              <span class="text-html">HTML </span>
              <span class="text-javascript">JS </span>
              <span class="text-css">CSS</span></label
            >
          </div>
          <div class="flex flex-col justify-center items-center">
            <img src="../assets/jquery.png" class="w-16 h-16" />
            <label class="font-bold text-center text-jQuery w-full mt-6"
              >jQuery</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>