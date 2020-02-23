<template>
  <div class="container m-auto">
    <div class="flex flex-col">
      <div class="p-4">
        <t-button class="mr-2" size="sm">Default button</t-button>
        <t-button class="mr-2" variant="primary" size="sm"
          >Primary button</t-button
        >
        <t-button class="mr-2" variant="secondary" size="sm"
          >Secondary button</t-button
        >
        <t-button class="mr-2" variant="success" size="sm"
          >Success button</t-button
        >
        <router-link to="/solar">
          <t-button class="mr-2" variant="warning" size="sm" to="/solar"
            >Warning button</t-button
          >
        </router-link>
        <t-button class="mr-2" variant="danger" size="sm"
          >Danger button</t-button
        >
        <t-button class="mr-2" variant="tertiary" size="sm"
          >Tertiary button</t-button
        >
      </div>
      <div class="p-4">
        <t-button class="mr-2">Default button</t-button>
        <t-button class="mr-2" variant="primary">Primary button</t-button>
        <t-button class="mr-2" variant="secondary">Secondary button</t-button>
        <t-button class="mr-2" variant="success">Success button</t-button>
        <t-button class="mr-2" variant="warning">Warning button</t-button>
        <t-button class="mr-2" variant="danger">Danger button</t-button>
        <t-button class="mr-2" variant="tertiary">Tertiary button</t-button>
      </div>
      <div class="p-4">
        <t-button class="mr-2" size="lg">Default button</t-button>
        <t-button class="mr-2" variant="primary" size="lg"
          >Primary button</t-button
        >
        <t-button class="mr-2" variant="secondary" size="lg"
          >Secondary button</t-button
        >
        <t-button class="mr-2" variant="success" size="lg"
          >Success button</t-button
        >
        <t-button class="mr-2" variant="warning" size="lg"
          >Warning button</t-button
        >
        <t-button class="mr-2" variant="danger" size="lg"
          >Danger button</t-button
        >
        <t-button class="mr-2" variant="tertiary" size="lg"
          >Tertiary button</t-button
        >
      </div>
      <t-dropdown text="Im a happy button">
        <ul>
          <li>
            <a
              href="#"
              class="block no-underline px-4 py-2 hover:bg-blue-500 hover:text-white"
              >My orders</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block no-underline px-4 py-2 hover:bg-blue-500 hover:text-white"
              >Account settings</a
            >
          </li>
          <li class="border-b"></li>
          <li>
            <a
              href="#"
              class="block no-underline px-4 py-2 hover:bg-blue-500 hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </t-dropdown>
      <div>
        <div class="flex flex-wrap -mx-3 overflow-hidden">
          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>

          <div
            class="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <t-card header="Card with a footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci ab vitae, facilis. Blanditiis fugiat ducimus,
                consectetur dolorum! Ea nisi, corporis laborum, numquam in,
                dolores maxime odio possimus similique voluptas officia?
              </p>
              <template v-slot:footer>
                <div class="flex justify-between">
                  <t-button variant="tertiary">Cancel</t-button>
                  <t-button variant="primary">Download</t-button>
                </div>
              </template>
            </t-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
