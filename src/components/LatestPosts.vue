<template>
  <section class="mt-10 px-5 w-full">
    <h4>Latest posts</h4>
    <div class="grid grid-cols-2 gap-10">
      <router-link :to="{ path: ':id', name: 'CardPost', params: { id: post.id } }" v-for="post in posts" :key="post.id"
        class=" card">
        <img :src="post.image" alt="" class="post-images">
        <div class="card-text">
          <h1 class="post-title">{{ post.title }}</h1>
          <p class="post-description">{{ post.description }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const posts = ref([]);
const fetchPosts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products?limit=4");
    posts.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

fetchPosts();
</script>

<style>
.post-images {
  @apply w-1/4 order-2 rounded-lg
}

.card {
  @apply flex justify-between items-center gap-10 col-span-2;
}

.card-text {
  @apply flex flex-col;
}

.post-title {
  @apply font-bold
}

.post-description {
  @apply text-gray-400 text-justify leading-7
}
</style>