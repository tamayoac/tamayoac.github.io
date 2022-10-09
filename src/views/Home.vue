<template>
  <div class="home">
    <information></information>
    <!-- <about></about>
    <work></work>
    <contact></contact> -->
  </div>
</template>

<script>
import Information from "../components/Information.vue";
// import About from "../components/About.vue";
// import Work from "../components/Work.vue";
// import Contact from "../components/Contact.vue";
export default {
  name: "Home",
  components: {
    information: Information,
    // about: About,
    // work: Work,
    // contact: Contact,
  },
};
</script>
