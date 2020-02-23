<template>
  <div id="app" style="overflow-x:auto;">
    <table class="w-full shadow-lg rounded">
      <thead>
        <tr class="text-left bg-gray-300 border-b border-grey uppercase">
          <th class="px-2 py-6"></th>
          <th class="text-sm text-gray-700">Name</th>
          <th class="hidden md:table-cell  text-sm text-gray-700">Mobile</th>
          <th class="hidden md:table-cell text-sm text-gray-700">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr
          class="accordion border-b border-grey-light hover:bg-gray-100"
          @click="panel = true"
        >
          <td class="px-3 py-4">
            <span
              class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus-within:border-blue-500"
            >
              <input type="checkbox" class="opacity-0 absolute" />
              <svg
                class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </span>
          </td>
          <td class="flex inline-flex items-center">
            <span>
              <img
                class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                alt=""
              />
            </span>
            <span class="py-3 w-40">
              <p class="text-gray-800 text-sm">Bernard Owiredu {{ panel }}</p>
              <p class="md:hidden text-xs text-gray-600 font-medium">
                244224317
              </p>
              <p class="hidden md:table-cell text-xs text-gray-500 font-medium">
                Manager
              </p>
            </span>
          </td>
          <td class="hidden md:table-cell">
            <p class="text-sm text-gray-800 font-medium">244224317</p>
            <p class="text-xs text-gray-500 font-medium">
              bernardkissi18@gmail.com
            </p>
          </td>
          <td class="hidden md:table-cell">
            <p class="text-sm text-gray-700 font-medium">
              Bernardkissi18@gmail.com
            </p>
          </td>
          <td>
            <svg
              class="mr-3 md:mr-1 h-12 w-6 fill-current text-grey-dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </td>
        </tr>

        <tr
          @click="panel = false"
          :class="panel ? 'table-row bg-gray-100' : 'hidden'"
          class="border-b border-grey-light w-full"
        >
          <td class=" py-4 px-3 text-sm text-gray-800 font-medium">1</td>
          <td class="text-sm text-gray-800 font-medium">2</td>
          <td class="text-sm text-gray-800 font-medium">3</td>
        </tr>

        <tr class="accordion border-b border-grey-light items-center">
          <td class="px-3 py-4">
            <span
              class="bg-white border-2 ml-1 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 focus:border-blue-500"
            >
              <input type="checkbox" class="opacity-0 absolute" />
              <svg
                class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </span>
          </td>
          <td class="flex inline-flex items-center">
            <span>
              <img
                class="hidden mr-1 md:mr-2 md:inline-block h-8 w-8 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80"
                alt=""
              />
            </span>
            <span class="py-3">
              <p class="text-gray-800 text-sm">Molly Sanders</p>
              <p class="md:hidden text-xs text-gray-600 font-medium">
                244224317
              </p>
              <p class="hidden md:table-cell text-xs text-gray-500 font-medium">
                Manager
              </p>
            </span>
          </td>
          <td class="hidden md:table-cell">
            <p class="text-sm text-gray-800 font-medium">244224317</p>
            <p class="text-xs text-gray-500 font-medium">
              bernardkissi18@gmail.com
            </p>
          </td>
          <td class="hidden md:table-cell">
            <p class="text-sm text-gray-700 font-medium">
              Bernardkissi18@gmail.com
            </p>
          </td>
          <td>
            <svg
              class="h-12 w-6 fill-current text-grey-dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </td>
        </tr>
        <tr
          :class="panel ? 'panel-show' : 'hidden'"
          class="border-b border-grey-light"
        >
          <td class=" py-4 px-3 text-sm text-gray-800 font-medium">1</td>
          <td class="text-sm text-gray-800 font-medium">2</td>
          <td class="text-sm text-gray-800 font-medium">3</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
