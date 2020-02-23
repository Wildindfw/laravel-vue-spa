<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          style="background-image: url('img/login-signin.jpeg')"
        ></div>
        <!-- Col -->
        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Увійти в аккаунт</h3>
          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="username"
              >
                Логін
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Введіть логін"
              />
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password"
              >
                Пароль
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Введіть пароль"
              />
              <p class="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>
            <div class="mb-4">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                id="checkbox_id"
              />
              <label class="text-sm" for="checkbox_id">
                Запам'ятати мене
              </label>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Увійти
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <span
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 cursor-pointer"
                @click="changeComponent('Register')"
              >
                Створити аккаунт!
              </span>
            </div>
            <div class="text-center">
              <span
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 cursor-pointer"
                @click="changeComponent('forgot-password')"
              >
                Забули пароль?
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  methods: {
    changeComponent(value) {
      this.$emit("changeComponent", value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
