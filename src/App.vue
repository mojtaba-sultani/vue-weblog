<template>
  <div class="container mx-auto md:w-2/3 app">
      <AppHeader />
        <router-view></router-view>
    </div>
    <AppFooter />
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

</script>
<style>
</style>