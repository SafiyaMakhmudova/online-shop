<template>
    <p class="font-[500] text-md text-[#7E7E7E] border-[#7E7E7E] border-t border-b p-4"><i class='bx bx-home-alt text-[#3BB77E]' ></i><span class="text-[#3BB77E]">Home</span><span class="text-xs text-[#3BB77E] ml-2">></span> <span class="ml-2">Contact</span></p>
    <helpYou/>
    <location/>
    <endContact class="mb-16   "/>
      
</template>


<script setup lang="ts">
    import helpYou from "@/features/users/components/Contact/help.vue"
    import location from "@/features/users/components/Contact/location.vue"
    import endContact from "@/features/users/components/Contact/end-contact.vue"

</script>

<style>

</style>