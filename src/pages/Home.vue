<template>
  <div>
        <!------------------------------- components image-link-card-----------------------  ---------------->
        <section>
      <image-link-card></image-link-card>
    </section>
    <!------------------------------- components image-link-card-----------------------  ---------------->
    <!-----------------------------------------components Highlight Tours --------------------- -->
    <section>
      <h1>Highlight Tours</h1>
      <highlight-tours></highlight-tours>
    </section>
    <!-----------------------------------------  components Highlight Tours --------------------- -->
   <!------------------------------------------  components LatestPosts  --------------------> 
   <section>
  <LatestPosts></LatestPosts>
    </section>  
   <!------------------------------------------  components LatestPosts  --------------------> 
  </div>
</template>

<script setup>
import HighlightTours from "@/components/HighlightTours.vue";
import ImageLinkCard from "@/components/ImageLinkCard.vue";
import LatestPosts from "@/components/LatestPosts.vue";
</script>

<style scoped>
h1 ,h4{
  @apply font-semibold text-xl text-gray-500 mt-10 px-3 md:px-0
}
</style>