<template>
    <section class="p-5 md:p-0">
        <h1>Tours</h1>
        <p>We offer the following virtual tours to anyone who loves to travel but are concerned about health during
            PANDEMIC. Enjoy!</p>
        <highlight-tours></highlight-tours>
    </section>
</template>

<script setup>
import HighlightTours from '@/components/HighlightTours.vue';
</script>

<style scoped>
h1 {
    @apply font-bold text-4xl my-10
}
</style>