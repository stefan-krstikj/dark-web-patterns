<template>
  <div class="wrapper">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="mb-10 border-t border-b divide-y">
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                 aria-label="Category">Po Tebe</a>
              <img :src="require('../assets/tose.jpg')" alt="" class="w-32 m-auto">
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <p class="text-gray-700">
              Po tebe (in Macedonian Cyrillic: По тебе) is the fifth studio album by the Macedonian singer Toše Proeski.
              The album was released in Macedonia and subsequently in Serbia, Montenegro, Bosnia and Herzegovina,
              Croatia and Slovenia under the Serbian title Pratim te
            </p>
          </div>
        </div>
      </div>
      <div class="grid py-8 sm:grid-cols-4">
        <div class="mb-4 sm:mb-0">
          <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category">CD Player</a>
            <img :src="require('../assets/cdplayer.png')" alt="" class="w-32 m-auto">
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-2">
          <p class="text-gray-700">
            Не можете да слушате музика без CD Player. Во вашата кошница ви го додадовме светски најпознатиот Sony
            ZS-PS55B за само <strike>17,999</strike> 16,999 ден.
          </p>
        </div>
      </div>
      <div class="grid py-8 sm:grid-cols-4">
        <div class="mb-4 sm:mb-0">
          <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category">Цена за процесирање на нарачката</a>
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-2">
          <p class="text-gray-700">
            499 ден.
          </p>
        </div>
      </div>

      <div class="grid py-8 sm:grid-cols-4">
        <div class="mb-4 sm:mb-0">
          <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
               aria-label="Category">Total: </a>
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-2">
          <p class="text-gray-700 float-right">
            <b>17,999 ден.</b>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class HiddenCosts extends Vue {

}
</script>