<template>
  <div class="pb-6">
    <div
      class="path flex justify-start items-center mt-3 gap-2 border-b-[2px] px-3"
    >
      <a href="# text-[#3BB77E] ">
        <div class="home flex gap-2 text-[#3BB77E]">
          <i class="bx bx-home w-[14px]"></i>
          <p class="font-semibold text-[14px]">Home</p>
          <i class="bx bx-chevron-right w-[12px]"></i>
        </div>
      </a>
      <div class="page flex items-center">
        <p class="font-semibold text-[14px]">Checkout</p>
      </div>
    </div>

    <div class="flex px-2 py-3">
      <div class="left w-[70%] px-2">
        <div
          class="check-cupon flex items-center bg-[#F4F6FA] border rounded py-1 px-3 gap-2"
        >
          <!-- <input type="checkbox" class="appearance-none checked:bg-blue-600" /> -->
          <input class="mb-2" type="checkbox" name="" id="" />
          <p class="mt-2 text-[14px] font-semibold">
            Have a coupon?
            <a class="text-[#3BB77E] hover:text-red-800" href="#"
              >Click here to enter your code</a
            >
          </p>
        </div>

        <div class="rows flex">
          <div class="left-column w-[50%]">
            <h1 class="text-[30px] text-[#263D4E] mt-4">Billing details</h1>
            <div class="max-w-md flex items-center space-y-4">
              <div class="w-[1/2]">
                <label for="ism" class="text-sm mt-3 font-medium text-gray-600"
                  >First name:</label
                >
                <input
                  type="text"
                  id="ism"
                  name="ism"
                  class="mt-1 py-3 px-2 border rounded-md"
                />
              </div>

              <div class="mb-3 w-[1/2]">
                <label
                  for="familiya"
                  class="text-sm mt-3 font-medium text-gray-600"
                  >Last name:</label
                >
                <input
                  type="text"
                  id="familiya"
                  name="familiya"
                  class="mt-1 py-3 px-2 border rounded-md"
                />
              </div>
            </div>

            <!-- Company name (optional) -->
            <div class="flex flex-col">
              <label
                for="company"
                class="text-sm mt-3 font-medium text-gray-600"
                >Company name (optional):</label
              >
              <input
                type="text"
                id="company"
                name="company"
                class="mt-1 py-3 px-2 border rounded-md"
              />
            </div>

            <!-- Country / Region -->
            <div class="flex flex-col">
              <label
                for="country"
                class="text-sm mt-3 font-medium text-gray-600"
                >Country / Region:</label
              >
              <select
                id="country"
                name="country"
                class="mt-1 py-3 px-2 border rounded-md"
              >
                <!-- Tanlash uchun optionlar shu yerga yoziladi -->
                <option value="US">United States (US)</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <!-- Boshqa davlatlar shu yerga qo'shing -->
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
              </select>
            </div>

            <!-- Street address -->
            <div class="flex flex-col">
              <label for="street" class="text-sm mt-3 font-medium text-gray-600"
                >Street address:</label
              >
              <input
                type="text"
                id="street"
                name="street"
                class="mt-1 py-3 px-2 border rounded-md"
                placeholder="House number and Street name"
              />
              <input
                type="text"
                id="street"
                name="street"
                class="mt-1 py-3 px-2 border rounded-md"
                placeholder="Apartment, suite, unit, etc.(optional)"
              />
            </div>

            <!-- Town / City -->
            <div class="flex flex-col">
              <label for="town" class="text-sm mt-3 font-medium text-gray-600"
                >Town / City:</label
              >
              <input
                type="text"
                id="town"
                name="town"
                class="mt-1 py-3 px-2 border rounded-md"
              />
            </div>

            <!-- State -->
            <div class="flex flex-col">
              <label for="state" class="text-sm mt-3 font-medium text-gray-600"
                >State:</label
              >
              <select
                id="state"
                name="state"
                class="mt-1 py-3 px-2 border rounded-md"
              >
                <!-- Tanlash uchun optionlar shu yerga yoziladi -->
                <option value=""></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <!-- Qo'shimcha shtatlar -->
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
              </select>
            </div>

            <!-- ZIP Code -->
            <div class="flex flex-col">
              <label for="zip" class="text-sm mt-3 font-medium text-gray-600"
                >ZIP Code:</label
              >
              <input
                type="text"
                id="zip"
                name="zip"
                class="mt-1 py-3 px-2 border rounded-md"
              />
            </div>

            <!-- Phone -->
            <div class="flex flex-col">
              <label for="phone" class="text-sm mt-3 font-medium text-gray-600"
                >Phone:</label
              >
              <input
                type="tel"
                id="phone"
                name="phone"
                class="mt-1 py-3 px-2 border rounded-md"
              />
            </div>

            <!-- Email address -->
            <div class="flex flex-col">
              <label for="email" class="text-sm mt-3 font-medium text-gray-600"
                >Email address:</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 py-3 px-2 border rounded-md"
              />
            </div>
          </div>

          <div class="right-column w-[50%] px-3 pt-3">
            <h1 class="text-[30px] text-[#263D4E] mt-4">
              Additional information
            </h1>

            <div class="flex flex-col pt-4">
              <label for="message" class="text-sm font-medium text-gray-600"
                >Order notes (optional)</label
              >
              <textarea
                id="message"
                name="message"
                rows="8 "
                class="mt-1 p-2 border rounded-md"
                placeholder="Notes about your order, e.g. special notes for delivery. "
              ></textarea>
            </div>

            <div class="order border rounded p-4 mt-5">
              <h1 class="text-[24px] text-[#263D4E] py-4 border-b-[2px]">
                Your order
              </h1>
              <div
                class="flex justify-between items-center px-2 py-3 mt-3 rounded-xl bg-[#F4F6FA]"
              >
                <p class="text-[15px] font-semibold my-auto text-[#263D4E]">
                  Product
                </p>
                <p class="text-[15px] font-semibold my-auto text-[#263D4E]">
                  Subtotal
                </p>
              </div>

              <div class="border-b-[2px] py-3" v-for="product in products">
                <div
                  class="product flex justify-around gap-3 mt-2 items-center"
                >
                  <div class="img w-[20%] border rounded">
                    <img :src="product.img" alt="" />
                  </div>
                  <div class="info w-[40%]">
                    <p class="text-[15px] font-semibold text-[#263D4E]">
                      {{ product.name }}
                    </p>
                    <p class="text-[15px] text-[#7E7E7E]">x2</p>
                  </div>
                  <div class="price">
                    <p class="text-[15px] text-[#7E7E7E]">
                      {{ product.price }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center py-3">
                <p class="text-[15px] font-semibold my-auto text-[#263D4E]">
                  Subtotal
                </p>
                <p class="text-[15px] my-auto text-[#263D4E]">$101.00</p>
              </div>

              <div class="flex justify-between items-center py-3">
                <p class="text-[15px] font-semibold my-auto text-[#263D4E]">
                  Total
                </p>
                <p class="text-[15px] my-auto text-[#263D4E]">$101.00</p>
              </div>
            </div>

            <div class="div bg-[#253D4E] px-3 py-3 mt-4 rounded">
              <form class="py-4 border-b-[2px]">
                <input type="radio" id="" name="fav_language" value="" />
                <label class="text-[18px] ml-2 font-bold text-[#FFFF]" for=""
                  >Direct bank transfer</label
                ><br />
                <input type="radio" id="" name="fav_language" value="" />
                <label class="text-[18px] ml-2 font-bold text-[#FFFF]" for="">
                  Check payments</label
                ><br />
                <input type="radio" id="" name="fav_language" value="" />
                <label class="text-[18px] ml-2 font-bold text-[#FFFF]" for="">
                  Cash on delivery</label
                >
              </form>
              <p class="text-[15px] text-white mt-3">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <button
                class="bg-[#3BB77E] text-[#FFFF] font-semibold px-3 py-2 rounded"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="right w-[30%]">
        <div class="archives border rounded-xl px-4 py-3 shadow-md">
          <h2 class="text-[24px] text-[#253D4E] border-b-[2px] py-4">
            Archives
          </h2>
          <p class="text-[15px] text-[#7E7E7E] py-3">February 2022</p>
        </div>

        <div
          class="categories border rounded-xl px-4 py-3 shadow-md mt-[100px]"
        >
          <h2 class="text-[24px] text-[#253D4E] border-b-[2px] py-4">
            Categories
          </h2>
          <div class="mt-3">
            <div class="" v-for="category in categories">
              <p class="text-[15px] text-[#7E7E7E]">{{ category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-[90%] mt-10 lg:mt-[100px] mx-auto py-7 px-4 resently-view border rounded border-dotted"
    >
      <h2 class="text-[15px] lg:text-[22px] text-[#253D4E]">
        Recently Viewd Products
      </h2>
      <div
        class="flex justify-start items-center gap-2 lg:gap-5 flex-wrap py-8"
      >
        <div v-for="product in products">
          <div
            class="border text-slate-300 rounded flex w-[300px] gap-3 py-3 px-6"
          >
            <div class="w-[30%] flex justify-center items-center">
              <img class="w-[100%]" :src="product.img" alt="" />
            </div>
            <div class="w-[60%]">
              <div>
                <h2 class="font-bold text-[16px] text-slate-800">
                  {{ product.name }}
                </h2>
              </div>
              <div class="text-slate-400 text-sm mb-2">
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <span class="ml-2">0</span>
              </div>
              <div class="flex text-primary font-bold gap-2 items-baseline">
                <span class="text-[15px]">{{ product.price }}</span>
                <s class="text-slate-400"
                  >$<s class="text-[13px] text-slate-400">{{
                    product.old_price
                  }}</s></s
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let products = ref([
  {
    name: "Nikky Regular Men Light Blue Jeans",
    old_price: "$150.00",
    price: "$101.00",
    date: "February 4, 2024",
    stock: "409 in stock",
    img: "https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/pro-dress-1-8-300x300.jpg",
  },
]);

let categories = ref([
  "Breakfast",
  "Dairy Free",
  "Dessert",
  "Gluten Free",
  "Salad",
  "Uncategorized",
]);
</script>

<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
</style>
