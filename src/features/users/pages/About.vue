<template>
    <p class="font-[500] text-md text-[#7E7E7E] border-[#7E7E7E] border-t border-b p-4"><i class='bx bx-home-alt text-[#3BB77E]' ></i><span class="text-[#3BB77E]">Home</span><span class="text-xs text-[#3BB77E] ml-2">></span> <span class="ml-2">About</span></p>
    <top_carusel/>
    <card/>
    <performance/>
    <ourTeam/>
    <emailSubcribe/>
    
</template>



<script setup lang="ts">
    import top_carusel from "@/features/users/components/About/top-carusel.vue"
    import card from "@/features/users/components/About/six-card.vue"
    import performance from "@/features/users/components/About/performance.vue"
    import ourTeam from "@/features/users/components/About/ourTeam.vue"
    import emailSubcribe from "@/features/products/components/subcribe/subcribe-about.vue"

</script>

<style scoped>

</style>
