<template>
  <div class="wrapper">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="p-8 rounded shadow-xl sm:p-16">
        <div class="flex flex-col lg:flex-row">
          <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 class="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {{ item.title }}
            </h2>
            <div v-if="item.imgUrl">
              <img :src="item.imgUrl">
            </div>
          </div>
          <div class="lg:w-1/2">
            <p class="mb-4 text-base text-gray-700 text-left item-text">
              {{ item.text }}
            </p>

            <a aria-label=""
               class="inline-flex items-center font-bold text-purple-400"
               v-if="item.demoUrl">
              <router-link :to="item.demoUrl">Live Example
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Component, Vue} from "vue-property-decorator";
import {DarkPattern} from "@/domain/DarkPattern";

@Component({
  components: {},
  props: {
    item: DarkPattern,
  },
})
export default class DarkPatternDescriptionComponent extends Vue {

}
</script>

<style>
.item-text {
  white-space: pre-line;
}
</style>