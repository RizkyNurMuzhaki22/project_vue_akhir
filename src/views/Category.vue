<template>
  <center>
    <p class="text-4xl font-semibold text-gray-900 dark:text-white"> ~ 𝓐𝓵𝓵 𝓒𝓪𝓽𝓮𝓰𝓸𝓻𝓲𝓮𝓼 ~ </p>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
  </center>
   <div class="flex flex-wrap justify-center gap-2">
    <div v-for="categories in getCategories">
    
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ categories.name }}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </a>
       </div>
   </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("category", ["getCategories"]),
  },
  methods: {
    ...mapActions('category', ["fetchCategories"])
  },
  created() {
    this.fetchCategories()
  }
};
</script>