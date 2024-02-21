<template>
  <div
    class="h-[70px] bg- w-full border-b-[1px] flex flex-row justify-between lg:justify-end"
  >
    <button
      class="p-[10px] h-[40px] lg:hidden my-[12px] ml-[15px] pb-[30px]"
      @click="isOpen = true"
      :class="isOpen ? 'text-white' : ''"
    >
      <SvgIcon type="mdi" :path="mdiMenu" />
    </button>

    <div class="flex items-center gap-5">
      <!-- Language -->
      <div class="flex justify-center items-center relative" id="">
        <div
          class="flex items-center flex-row cursor-pointer"
          v-if="lang == 'ru'"
          @click="openDropdown"
          id="ru"
        >
          <img
            :src="options.ru.image"
            alt="ru"
            class="w-5 h-5 mr-2 rounded-full"
            id=""
          /><button id="" class="text-sm">{{ options.ru.label }}</button>
        </div>
        <div
          class="flex items-center flex-row cursor-pointer"
          v-if="lang == 'uz'"
          @click="openDropdown"
          id="uz"
        >
          <img
            :src="options.uz.image"
            alt="ru"
            class="w-5 h-5 mr-2 rounded-full"
            id=""
          /><button id="" class="text-sm">{{ options.uz.label }}</button>
        </div>
      </div>

      <div
        v-show="isDropdown"
        class="flex pl-2 items-center flex-row hover:bg-gray-100 w-[110px] py-2 absolute top-12 right-[90px] bg-white cursor-pointer divide-gray-100 rounded-lg"
        id="lang"
        v-if="lang == 'ru'"
        @click="changeLang('uz')"
      >
        <img
          :src="options.uz.image"
          alt="ru"
          class="w-5 h-5 mr-2 rounded-full"
        /><button class="text-sm">{{ options.uz.label }}</button>
      </div>
      <div
        v-show="isDropdown"
        class="flex pl-3 items-center flex-row hover:bg-gray-100 w-[110px] py-2 absolute top-12 right-[95px] bg-white cursor-pointer divide-gray-100 rounded-lg"
        id="lang"
        v-if="lang == 'uz'"
        @click="changeLang('ru')"
      >
        <img
          :src="options.ru.image"
          alt="ru"
          class="w-5 h-5 mr-2 rounded-full"
        /><button class="text-sm">{{ options.ru.label }}</button>
      </div>

      <!-- <Account /> -->
      <div class="account flex items-center cursor-pointer mr-10">
        <div class="w-[40px]">
          <SvgIcon
            type="mdi"
            :path="mdiAccountCircleOutline"
            :size="icon_size"
          />
        </div>
        <!-- sub-menu -->
        <div
          class="sub_menu bg-white w-[120px] rounded-lg shadow-lg overflow-hidden max-sm:right-[10px] absolute top-[55px] right-[40px]"
        >
          <div
            class="py-3 px-4 hover:bg-black hover:text-white duration-200"
            @click="goToProfile"
          >
            Profil
          </div>
          <div
            class="py-3 px-4 hover:bg-black hover:text-white duration-200"
            @click="logout"
          >
            Chiqish
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarjs } from "../../hooks/UseSidebar";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu, mdiAccountCircleOutline } from "@mdi/js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const isOpen = useSidebarjs();
const image = ref("");
const payload = ref({ phone: "" });
const icon_size = ref(40);
const isSmallScreen = ref(false);
let lang = localStorage.getItem("lang");
const isDropdown = ref(false);

window.addEventListener("click", (e) => {
  if (!e.target.attributes["id"]) {
    isDropdown.value = false;
  }
});

const openDropdown = () => {
  isDropdown.value = !isDropdown.value;
};

const options = ref({
  ru: {
    label: "Русский",
    image: "http://localhost:5173/src/assets/lang-icons/ru.png",
  },
  uz: {
    label: "O'zbekcha",
    image: "http://localhost:5173/src/assets/lang-icons/uz.png",
  },
});

const changeLang = (languge) => {
  lang = languge;
  localStorage.setItem("lang", lang);
  location.reload();
};

const chooseMenu = () => {
  const role = localStorage.getItem("role");
  if (role === "admin") {
    return "admin";
  } else if (role === "teacher") {
    return "teacher";
  }
};
const menu = ref(chooseMenu());

const goToProfile = () => {
  router.push(`/${menu.value}/profile`);
};

const logout = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("token");
  router.push("/login");
};

const handleChange = async () => {
  if (payload.value.phone.length > 3) {
    await search_store.search(payload.value);
  } else if (payload.value.phone.length == 0) {
    search_store.result = [];
  }
};
</script>

<style lang="scss" scoped>
.sub_menu {
  opacity: 0;
  visibility: hidden;
}
.account:hover .sub_menu {
  opacity: 1;
  visibility: visible;
}
</style>
