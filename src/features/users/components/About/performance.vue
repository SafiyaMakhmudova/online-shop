<template>
    <div class="flex justify-center items-center ml-16 mt-14">
        <div class="w-[42%]">
            <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-5.png" alt="">
        </div>
        <div class="justify-start items-center ml-10 w-[50%]">
            <p class="text-lg text-[#3BB77E] font-[600]">Our performance</p>
            <p class="text-2xl font-[700] mt-5">
                Your Partner for <br>
                e-commerce grocery solution
            </p>
            <p class="text-[#7E7E7E] text-xs mt-5">
                Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br> 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br> 
                architecto
            </p>
            <p class="text-[#7E7E7E] text-md mt-5">
                Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam <br>
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
        </div>
    </div>


    <div class="flex justify-stretch items-center ml-10">
        <div v-for="item in minifor" class="mt-14 ml-14">
            <p class="text-2xl font-[700]">
                {{ item.name }}
            </p>
            <p class="text-md text-[#7E7E7E] mt-5">
                Volutpat diam ut venenatis tellus in metus. Nec dui nunc <br>
                mattis enim ut tellus eros donec ac odio orci ultrices in. <br>
                ellus eros donec ac odio orci ultrices in.
            </p>
        </div>
    </div>
</template>



<script setup lang="ts">

    const minifor = [
        {
            name:"Who we are",
        },
        {
            name:"Our history",
        },
        {
            name:"Our mission"
        }
    ]
   

</script>

<style scoped>

</style>
