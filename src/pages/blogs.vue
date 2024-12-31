<template>
    <h1>TFH - News & Blogs</h1>
    <p>Stay in touch for our News and latest Blog posts</p>
    <latest-posts></latest-posts>
</template>

<script setup>
import LatestPosts from '@/components/LatestPosts.vue';
</script>

<style scoped>
h1{
    @apply font-bold text-4xl my-10
}
</style>