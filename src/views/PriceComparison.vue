<template>
  <div class="wrapper">
    <Navbar/>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor"
               class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
          </svg>
          <span class="relative">Одберете</span>
        </span>
          нешто нешто нешто тука
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Тука некој смешен сабтајтл
        </p>
      </div>
      <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in productItems" v-bind:key="item.name">
          <product-item v-bind:item="item"/>
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
export default class PriceComparison extends Vue {
  productItems = [
    {
      name: "Product 1",
      description: "This is a description for product 1",
      price: "199ден / парче",
      img: "radiohead.jpg"
    },
    {
      "name": "Product 2",
      "description": "This is a description for product 2",
      "price": "299ден / парче",
      img: "rhcp.jpg"
    },
    {
      "name": "Product 3",
      "description": "This is a description for product 3",
      "price": "5ден / минута",
      img: "tose.jpg"
    },
    {
      "name": "Product 4",
      "description": "This is a description for product 4",
      "price": "9ден / песна",
      img: "radiohead.jpg"
    }
  ]
}
</script>