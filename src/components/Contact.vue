<template>
  <div id="contact" class="max-w-5xl mx-auto my-20">
    <div
      class="text-graphite font-bold text-2xl uppercase w-full pb-12 text-left"
    >
      Contact Me
    </div>
    <div class="px-44">
      <div class="border pb-20 pt-10 px-10 rounded-md">
        <form ref="form" @submit.prevent="sendEmail">
          <input
            type="text"
            placeholder="Subject"
            class="border w-full py-2 px-3 my-2 rounded-md"
            name="subject"
          />
          <input
            type="text"
            placeholder="Name"
            class="border w-full py-2 px-3 my-2 rounded-md"
            name="name"
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            class="border w-full my-2 py-2 px-3 rounded-md"
            name="message"
          ></textarea>
          <button
            class="
              w-full
              text-white
              px-4
              py-2
              bg-graphite
              rounded-md
              btn3
              float-right
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      service_id: "service_4n9l8dh",
      email_template: "template_dygjqeq",
      private_key: "KbAifISObseWcAOku",
    };
  },

  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          this.service_id,
          this.email_template,
          this.$refs.form,
          this.private_key
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>