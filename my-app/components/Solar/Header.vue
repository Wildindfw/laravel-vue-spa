<template>
  <!-- class="absolute top-0 w-full z-50 px-2 py-3 bg-black opacity-75 navbar-expand-lg" -->
  <nav class="absolute top-0 w-full z-50 px-2 py-3 navbar-expand-lg">
    <div class="container flex border-b">
      <div
        class="w-full flex items-center justify-between lg:w-auto lg:justify-start"
      >
        <!-- <a href="">
          <img src="@/assets/img/logo.png" alt="" class="w-8" />
        </a> -->
        <span class="text-3xl text-blue-500">УкрСпецТехніка</span>
        <button
          class="cursor-pointer text-lg lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="w-full lg:flex lg:bg-transpatrent lg:justify-between"
        :class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row">
          <li class="flex items-center ml-6 mr-3">
            <i class="fas fa-phone-alt p-4 text-2xl text-gray-500"></i>
            <div>
              <span class="block text-sm text-gray-500">Зателефонуйте нам</span>
              <a href="tel:+380670000000" class="text-blue-500 hover:text-white"
                >+38 067 000 00 00</a
              >
            </div>
          </li>
          <li class="flex items-center mx-3">
            <i class="fas fa-envelope p-4 text-2xl text-gray-500"></i>
            <div class="block w-full">
              <span class="block text-sm text-gray-500">Напишіть нам</span>
              <a
                href="mailto:brand@gmail.com"
                class="text-blue-500 hover:text-white"
                >brand@gmail.com</a
              >
            </div>
          </li>
          <li class="flex items-center mx-3">
            <i class="fas fa-map-marker-alt p-4 text-2xl text-gray-500"></i>
            <div>
              <span class="block text-sm text-gray-500">Завітайте до нас</span>
              <a href="tel:+380670000000" class="text-blue-500 hover:text-white"
                >м.Хмельницький вул Проскурівська</a
              >
            </div>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row">
          <li class="m-2">
            <a href="" class="text-4xl text-blue-500 hover:text-white"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="m-2">
            <a href="" class="text-4xl text-blue-500 hover:text-white"
              ><i class="fab fa-facebook-square"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container flex justify-center text-white uppercase">
      <ul class="flex">
        <li class="m-3">
          <a href="">Головна</a>
        </li>
        <li class="m-3">
          <a href="">Послуги</a>
        </li>
        <li class="m-3">
          <a href="">Каталог</a>
        </li>
        <li class="m-3">
          <a href="">Проекти</a>
        </li>
        <li class="m-3">
          <a href="">Про компанію</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped></style>
