<template>
    <div>
        <h1 class="text-center text-2xl font-[700] mt-14">What We Provide ?</h1>

        <div class="flex justify-center items-center flex-wrap mt-1">
            <div v-for="one in allname" class="w-[360px] h-[360px] border border-[#ECECEC] justify-center items-center rounded-xl ml-2.5 mr-2.5 mt-5 hover:shadow-md">
                <div class="justify-center items-center flex mt-10">
                    <div class=" bg-cover w-[100px]">
                        <img :src="one.img" alt="">
                    </div>
                </div>
                <div>
                    <h1 class="text-center text-xl font-[700] mt-5">{{ one.name }}</h1>
                    <p class="text-center mt-5 text-[#7E7E7E] text-md">
                        There are many variations of passages of Lorem <br> 
                        Ipsum available, but the majority have suffered <br>
                        alteration in some form
                    </p>
                    <p class="text-[#3BB77E] hover:text-[#CB2356] text-center mt-5 mb-5">Read More</p>
                </div>
            </div>

        </div>
    </div>
</template>



<script setup lang="ts">

    const allname = [
        {
            name:"Best Prices & Offers",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png"
        },
        {
            name:"Wide Assortiment",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png"
        },
        {
            name:"Free Delivery",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png"
        },
        {
            name:"Easy Returns",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png"
        },
        {
            name:"100% Satisfaction",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png"
        },
        {
            name:"Great Daily Deal",
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-6.png"
        }
    ]

</script>

<style scoped>

</style>
