<template>
    <section class="mt-10 w-full">
        <div v-if="loading" class="loading">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-12 h-12 animate-spin"
                viewBox="0 0 16 16">
                <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                <path fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
            </svg>
        </div>
        <div v-else class="grid grid-cols-1 mt-5 gap-10">
            <div class="product">
                <img :src="product.image" alt="" />
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-description">{{ product.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const route=useRoute();
const loading = ref(true);
const product = ref([]);
const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
    product.value = response.data;
    loading.value = false;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
};
fetchProduct();
</script>

<style scoped>
h1 {
    @apply font-bold text-2xl;
}

h3.product-title {
    @apply font-bold;
}

.product {
    @apply col-span-1 flex flex-col rounded-md text-center justify-end;
}

p.product-description {
    @apply text-gray-600 line-clamp-3 leading-6;
}

.product img {
    @apply md:w-1/4 mx-auto rounded-lg mb-5;
}
.loading{
    @apply flex justify-center
}
</style>