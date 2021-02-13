<template>
  <div class="wrapper">
    <Navbar/>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
          Додадете некој албум во кошничка... Ајде...
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
      name: "OK Computer",
      description: "OK Computer is the third studio album by English rock band Radiohead, released on 21 May 1997 on EMI subsidiaries Parlophone and Capitol Records. The members of Radiohead self-produced the album with Nigel Godrich, an arrangement they have used for their subsequent albums.",
      price: "199ден / парче",
      img: "radiohead.jpg"
    },
    {
      "name": "Californication",
      "description": "Californication is the seventh studio album by American rock band Red Hot Chili Peppers. It was released on June 8, 1999, on Warner Bros. Records and was produced by Rick Rubin",
      "price": "299ден / парче",
      img: "rhcp.jpg"
    },
    {
      "name": "Po Tebe",
      "description": "Po tebe (in Macedonian Cyrillic: По тебе) is the fifth studio album by the Macedonian singer Toše Proeski. The album was released in Macedonia and subsequently in Serbia, Montenegro, Bosnia and Herzegovina, Croatia and Slovenia under the Serbian title Pratim te",
      "price": "5ден / минута",
      img: "tose.jpg"
    },
    {
      "name": "Sgt Pepper's Lonely Hearts Club Band",
      "description": "Sgt. Pepper's Lonely Hearts Club Band is the eighth studio album by the English rock band the Beatles. Released on 26 May 1967, it spent 27 weeks at number one on the Record Retailer chart in the United Kingdom and 15 weeks at number one on the Billboard Top LPs chart in the United States.",
      "price": "9ден / песна",
      img: "beatles.jpg"
    }
  ]
}
</script>