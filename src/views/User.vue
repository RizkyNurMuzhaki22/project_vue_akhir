<template>
  <div>
    <div class="p-16">
      <div class="p-8 bg-white shadow mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div
            class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"
          >
            <div>
              <p class="font-bold text-gray-700 text-xl">22</p>
              <p class="text-gray-400">Friends</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">10</p>
              <p class="text-gray-400">Photos</p>
            </div>
            <div>
              <p class="font-bold text-gray-700 text-xl">89</p>
              <p class="text-gray-400">Comments</p>
            </div>
          </div>
          <div class="relative">
            <div
              class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
            >
            <img alt="..." src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
            </div>
          </div>
          <div
            class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"
          >
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect</button>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Message</button>
          </div>
        </div>
        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">
            {{ getUser.user.name }}, <span class="font-light text-gray-500">18</span>
          </h1>
          <p class="font-light text-gray-600 mt-3">Kosambi, Kota Bandung</p>
          <p class="mt-8 text-gray-500">
            {{ getUser.user.email }}
          </p>
          <p class="mt-2 text-gray-500">Student of Assalaam Vocational High School </p>
        </div>
        <div class="mt-12 flex flex-col justify-center">
          <p class="text-gray-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <button class="text-indigo-500 py-2 px-4 font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["getUser"]),
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
  },
  created() {
    this.fetchUser();
  },
};
</script>
