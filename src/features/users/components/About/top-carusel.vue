<template>
    <div class="flex justify-between mt-10">
        <div class="w-[50%] ml-14 mr-5">
            <img class="ml-10 rounded-xl" width="700px" height="100px" :src=image alt="">
        </div>
        <div class="w-[50%] flex-wrap ml-10 ">
            <p class="text-3xl text-[#253D4F] font-[700] mt-10">Welcome to Nest</p><br>
            <p class="mt-2 text-md text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br> 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br> 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br> 
                reprehenderit in voluptate id est laborum.
            </p>

            <p class="mt-5 text-md text-[#7E7E7E]">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos <br>
                interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet <br>
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare <br>
                lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor <br>
                in reprehenderit in voluptate id est laborum.
            </p>
            <n-carousel style="width: 80%; margin-top: 40px;" show-arrow  :slides-per-view="3" :space-between="20" :loop="false" draggable>
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
            </n-carousel>
        </div>
    </div>
</template>



<script setup lang="ts">
    const image = 'https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-1.png'
    import {NCarousel} from "naive-ui"
</script>

<style scoped>
.carousel-img {
  width: 170px;
  height: 200px;
  object-fit: cover;
}

</style>
