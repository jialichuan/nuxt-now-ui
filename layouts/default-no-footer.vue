<template>
  <div>
    <main-navbar :color-on-scroll="450"></main-navbar>
    <nuxt />
  </div>
</template>
<script>
  import MainNavbar from "@/components/layout/MainNavbar.vue";
  export default {
    components: {
      MainNavbar
    }
  }
</script>
<style>
</style>
