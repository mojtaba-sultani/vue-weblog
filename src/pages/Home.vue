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
      <h4>Latest posts</h4>
  <LatestPosts></LatestPosts>
    </section>  
   <!------------------------------------------  components LatestPosts  --------------------> 
  </div>
</template>

<script setup>
import HighlightTours from "@/components/HomeSection/HighlightTours.vue";
import ImageLinkCard from "@/components/HomeSection/ImageLinkCard.vue";
import LatestPosts from "@/components/HomeSection/LatestPosts.vue";
</script>

<style scoped>
h1 ,h4{
  @apply font-semibold text-xl text-gray-500 mt-10
}
</style>