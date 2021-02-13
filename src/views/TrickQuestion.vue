<template>
  <div class="hello">
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Направете нов профил
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="first-name" class="sr-only">Име</label>
              <input id="first-name" name="first-name" type="text" required
                     class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Име">
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px">

            <div>
              <label for="last-name" class="sr-only">Презиме</label>
              <input id="last-name" name="last-name" type="text" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Презиме">
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px">

            <div>
              <label for="email-address" class="sr-only">Email адреса</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email адреса">
            </div>
          </div>
          <div class="rounded-md shadow-sm -space-y-px">

            <div>
              <label for="password" class="sr-only">Лозинка</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Лозинка">
            </div>
          </div>

          <div class="items-center">
            <div class="flex items-center">
              <input id="vouchers" name="vouchers" type="checkbox"
                     class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="vouchers" class="ml-2 block text-sm text-gray-900">
                Сакам да бидам информиран на e-mail за ваучери, специјални понуди и слично!
              </label>
            </div>
          </div>

          <div class="">
            <div class="flex ">
              <input id="third-party" name="third-party" type="checkbox"
                     class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="third-party" class="ml-2 block text-sm text-gray-900">
                Ве молам не ја споделувајте мојата e-mail адреса со останати компании
              </label>
            </div>
          </div>

          <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class TrickQuestion extends Vue {}
</script>
