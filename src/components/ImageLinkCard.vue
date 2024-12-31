<template>
    <div class="relative border-b pb-10 px-5">
        <img src="/images/Banner_demo.webp" alt="" class="img-banner">
        <div class="absolute bottom-12 right-[10%] md:right-[6%] flex">
            <div class="about-link-button">
                <img src="/icons/about-icon.svg" alt="">
                <router-link to="/about" class="">ABOUT PAGE</router-link>
            </div>
            <div class="tours-link-button">
                <img src="/icons/tours-icon.svg" alt="">
                <router-link to="/tours">TOURS PAGE</router-link>
        </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.img-banner{
    @apply w-full h-[619px] mt-5 rounded-md 
}
.about-link-button{
    @apply   px-1 py-3 md:px-5  rounded-md bg-white flex items-center font-bold
}
.tours-link-button{
    @apply  px-1 py-3 md:px-5 bg-red-700 text-white font-bold  ms-3 rounded-md flex items-center
}
.tours-link-button img{
   @apply w-[20px] h-[20px] me-1 
}
.about-link-button img{
    @apply w-[20px] h-[20px] me-1
}

</style>