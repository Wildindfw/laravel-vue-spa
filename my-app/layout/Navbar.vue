<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          to="/"
        >
          <img src="@/assets/img/logo.png" alt="" class="w-8" />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <mega-menu />
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/landing"
              ><i
                class="lg:text-gray-300 text-gray-500 fas fa-object-group text-lg leading-lg mr-2"
              ></i>
              <dropdown-menu
                title="Landing"
                :dropdown-items-login="dropdownItemsLanding"
              />
            </router-link>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/test"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Test</router-link
            >
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/vue-tailwind"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Vue Tailwind</router-link
            >
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/profile"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Profile</router-link
            >
          </li>
          <li class="flex items-center">
            <div
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            >
              <i class="fas fa-user-plus"></i>
              <dropdown-menu
                title="Login"
                :dropdown-items-login="dropdownItemsLogin"
              />
            </div>
          </li>
          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/dashboard"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Dashboard</router-link
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
          <li class="flex items-center">
            <button
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import MegaMenu from "@/components/MegaMenu.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";

export default {
  name: "Navber",
  components: {
    MegaMenu,
    DropdownMenu
  },
  data() {
    return {
      showMenu: false,
      dropdownItemsLogin: [
        {
          link: "/login",
          icon: "fas fa-sign-in-alt",
          title: "Login Tailwind"
        },
        {
          link: "/login2",
          icon: "fas fa-sign-in-alt",
          title: "Login Dynamic"
        }
      ],
      dropdownItemsLanding: [
        {
          link: "/landing",
          icon: "fas fa-sign-in-alt",
          title: "Landing Creative Tim"
        },
        {
          link: "/solar",
          icon: "fas fa-sign-in-alt",
          title: "Solar"
        },
        {
          link: "/components",
          icon: "fas fa-sign-in-alt",
          title: "Components"
        }
      ]
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
