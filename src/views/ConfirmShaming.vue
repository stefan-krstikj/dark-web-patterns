<template>
  <div class="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
    <div class="flex flex-col items-center max-w-2xl md:px-8">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor"
                 class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="192913ce-1f29-4abd-b545-0fbccfd2b0ec" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)" width="52" height="24"></rect>
            </svg>
            <span class="relative">I</span>
          </span>
          💖 ФИНКИ
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Приклучи се на нашата мејлинг листа и покажи ја твојата поддршка за иградбата на новата зграда на Факултетот
          за Информатички Науки и Компјутерско Инженерство
        </p>
      </div>
      <form class="flex flex-col items-center w-full mb-4 md:flex-row">
        <input
            placeholder="Name"
            required=""
            type="text"
            class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />

        <input
            placeholder="Email"
            required=""
            type="text"
            class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <button type="button" class="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none" tabindex="-1">
          Subscribe
        </button>
      </form>
      <a href="#" class="max-w-md mb-10 text-xs text-purple-400 sm:text-sm md:text-center">
        Не фала, не сакам студентите на ФИНКИ да студираат во нова и модерна зграда и мислам дека треба да користат
        училници од други факултети
      </a>
    </div>

  </div>
</template>