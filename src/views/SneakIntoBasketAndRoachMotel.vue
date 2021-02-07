<template>
  <div class="wrapper">
    <navbar/>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img class=" w-full h-56 rounded shadow-lg md:h-64 lg:h-80" src="@/assets/cdplayer.png" alt=""/>
      </div>
      <div class="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Ви додадовме CD-Player
        </h2>
        <p class="mb-5 text-base text-gray-700 md:text-lg">
          Не можете да слушате музика без CD Player. Во вашата кошница ви го додадовме светски најпознатиот Sony
          ZS-PS55B за само <strike>17,999</strike> 16,999 ден.
        </p>
        <form>
          <input type="radio" id="subscribe">
          <label class="ml-2 mb-1" for="subscribe"><small>Преплати ме на Spotify за само 99ден / месечно првите 3 месеци</small></label>
        </form>
        <div class="flex items-center md:justify-center">
          <button
              class="mt-3 py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-rose-700 focus:outline-none">
            <router-link to="/hiddencosts">
              Продолжи
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Navbar from "@/components/Navbar.vue";
import ProductItem from "@/components/ProductItemComponent.vue";

@Component({
  components: {
    Navbar,
    ProductItem
  },
})
export default class SneakIntoBasket extends Vue {

}
</script>