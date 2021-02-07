<template>
  <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
      >
        <svg
            class="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
        >НВД</span
        >
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >Product</a
          >
        </li>

      </ul>

      <div class="lg:hidden">

        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
          <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
          ></path>
          <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
          ></path>
          <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
          ></path>
        </svg>

      </div>
    </div>
  </div>
</template>
<script>
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class Navbar extends Vue {

}
</script>

<style>

</style>