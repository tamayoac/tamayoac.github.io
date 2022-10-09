<template>
  <div id="contact" class="max-w-5xl mx-auto my-20">
    <div
      class="
        text-graphite
        font-bold
        text-2xl
        uppercase
        w-full
        text-left
        px-6
        mb-4
      "
    >
      Contact Me
    </div>

    <div class="lg:px-44 px-4">
      <div
        v-if="isSuccess"
        class="
          my-4
          bg-green-100
          border border-green-400
          text-graphite
          px-4
          py-3
          rounded
          relative
        "
        role="alert"
      >
        <strong class="font-bold">Successfully Sent</strong>
        <span
          @click="isSuccess = !isSuccess"
          class="absolute top-0 bottom-0 right-0 px-4 py-3"
        >
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
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
      isSuccess: false,
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
            if (result.status === 200) {
              this.isSuccess = true;

              console.log("SUCCESS!", result.text);
            }
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