<template>
    <div>
<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="/products/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Cart</span>
      </div>
    </li>
  </ol>
</nav>

<body>
  <div class="h-screen bg-gray-100 pt-20 bg-indigo-500">
    <h1 class="mb-10 text-center text-2xl font-bold text-white" >Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div v-for="cart in getCart" :key="cart.cart_id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src="https://s3.bukalapak.com/img/32307737692/s-330-330/data.jpeg.webp" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ cart.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                @click="change_qty({cart_id: cart.cart_id, type: 'minus'})"
                > - </span>
                <input
                :value="cart.qty"
                 class="h-8 w-8 border bg-white text-center text-xs outline-none" readonly/>
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                @click="change_qty({cart_id: cart.cart_id, type: 'plus'})"
                > + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">Rp. {{ cart.regular_price * cart.qty }}</p>
                <button type="button" @click="deleteCart(cart.cart_id)" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" >
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700"></p>
          <p class="text-gray-700"></p>
        </div>
        <div class="flex justify-between" v-for="alamat in getAddress">
          <p class="text-gray-700">Alamat : {{ alamat.address}} , {{ alamat.country }} , {{ alamat.city }} , {{ alamat.postal_code }}</p>
          <p class="text-gray-700"></p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">Rp.{{ totalHarga() }}</p>
            <p class="text-sm text-gray-700">* Sudah Termasuk Pajak</p>
          </div>
        </div>
        <router-link to="/checkout">
                                <button type="button"
                                    class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                    Checkout
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </router-link>
      </div>
    </div>
  </div>
</body>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'cartBadge' ,
    data () {
        return {
            total: 0
        }
    },
    computed: {
        ...mapGetters('cart', ['getCart', 'getAddress']),
    },
    methods: {
        ...mapActions('cart', ['fetchCart', 'deleteCart', 'change_qty', 'fetchAddress']),
        totalHarga() {
            this.total = this.getCart.reduce((acc, product) => {
                return acc + parseFloat(product.regular_price * product.qty);
            }, 0);
            return this.total.toFixed(2);
        },
    },
    beforeMount() {
        this.fetchAddress()
    },
    mounted() {
      
    },
    created() {
      this.fetchCart()
    }
}
</script>