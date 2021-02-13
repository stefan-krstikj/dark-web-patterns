<template>
  <div class="flex flex-col justify-between p-5 border rounded shadow-sm" style="height: 43em">
    <div>
      <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
        <p class="font-semibold">{{ item.price }}</p>
      </div>
      <img alt="Something" :src="require(`../assets/${item.img}`)">
      <h6 class="mb-2 font-semibold leading-5 mt-3">{{ item.name }}</h6>
      <p class="mb-3 text-sm text-gray-900">
        {{ item.description }}
      </p>
    </div>
    <button type="button"
            class="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-rose-700 focus:outline-none"
            v-on:click="addToCart(item)">
      <router-link to="/sneakintobasket">
        Додади во кошница
      </router-link>

    </button>
  </div>
</template>
<script>
import {Component, Vue} from "vue-property-decorator";
import {CartItem} from "@/domain/CartItem";

@Component({
  components: {},
  props: {
    item: CartItem,
  },
  methods: {
    addToCart(item) {
      console.log("Adding to cart", item)
    }
  }
})
export default class ProductItem extends Vue {
}
</script>