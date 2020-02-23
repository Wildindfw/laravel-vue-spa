<template>
  <div class="md:w-1/2 lg:w-1/3 py-4 px-4">
    <div class=" ">
      <a href="/donee/donee-2">
        <div
          class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg"
        >
          <div
            class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500"
          >
            {{ followers }}
          </div>
          <img :src="imgUrl" class="h-32 rounded-lg w-full object-cover" />
          <div class="flex justify-center">
            <img
              :src="iconUrl"
              class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
            />
          </div>
          <div class="py-2 px-2">
            <div class=" font-bold font-title text-center">{{ title }}</div>

            <div class="text-sm font-light text-center my-2">
              {{ text }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundedCard",
  props: ["imgUrl", "iconUrl", "title", "text", "followers"]
};
</script>

<style lang="scss" scoped></style>
