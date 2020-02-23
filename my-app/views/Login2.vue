<template>
  <div class="absolute top-0 w-full h-full bg-gray-900">
    <div class="flex items-center h-full">
      <fade-transition :duration="250" origin="center" mode="out-in">
        <div :is="component" @changeComponent="changeComponent" />
      </fade-transition>
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/Login/SignIn.vue";
import Register from "@/components/Login/Register.vue";
import ForgotPassword from "@/components/Login/ForgotPassword.vue";

export default {
  name: "Login",
  data() {
    return {
      component: "sign-in"
    };
  },
  components: {
    SignIn,
    Register,
    ForgotPassword
  },
  methods: {
    changeComponent(value) {
      this.component = value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
