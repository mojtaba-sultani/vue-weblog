<template>
  <div>
    <header>
      <div class="header-layout">
        <img src="/images/logo.webp" alt="" width="120" height="62">
        <img src="/icons/search.svg" alt="" width="20" height="20">
      </div>
      <nav>
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/tours">TOURS</router-link>
        <router-link to="/blogs">BLOGS</router-link>
      </nav>
    </header>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header-layout{
  @apply flex justify-between items-center p-4
}
nav{
  @apply flex justify-center gap-8 mt-3
}
router-link{
  @apply flex justify-between items-center
}
.router-link-active{
  @apply font-bold
}
</style>