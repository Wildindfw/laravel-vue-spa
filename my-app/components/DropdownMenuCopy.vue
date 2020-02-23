<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="/#features"
      class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <!-- {{ $t('nav.features') }} -->
      Login Dropdown
    </a>

    <div class="absolute w-full">&nbsp;</div>
    <transition name="menu-fade">
      <div v-show="isVisible" class="absolute bg-white rounded mt-4 w-auto">
        <div class="flex px-8 py-6 -mx-4">
          <ul>
            <li class="mb-4">
              <router-link to="/login" class="flex items-baseline group">
                <i
                  class="fas fa-sign-in-alt text-blue-500 group-hover:text-blue-800"
                ></i>
                <span
                  class="ml-2 block font-bold text-blue-800 group-hover:text-blue-800 whitespace-no-wrap"
                >
                  <!-- <span
                  class="block font-bold text-blue-800 group-hover:text-blue-800 flex items-center"
                >
                  <span> -->
                  Login Tailwind
                  <!-- </span>
                </span> -->
                </span>
              </router-link>
            </li>
            <li class="mb-4">
              <router-link to="/login2" class="flex items-baseline group">
                <i
                  class="fas fa-sign-in-alt text-blue-500 group-hover:text-blue-800"
                ></i>
                <span class="ml-2">
                  <span
                    class="block font-bold text-blue-800 group-hover:text-blue-800 whitespace-no-wrap"
                  >
                    <span>Login Dynamic</span>
                  </span>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      // this.focusedIndex = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
ul li:last-child {
  margin-bottom: 0;
}
</style>
