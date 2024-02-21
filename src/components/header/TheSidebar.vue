<template>
  <div class="flex">
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity opacity-50 lg:hidden"
    ></div>
  </div>
  <div
    v-if="!dialog"
    class="w-[250px] max-md:w-[250px] max-lg:w-[250px] max-xl:w-[250px] overflow-auto bg-white border-r-[1px] h-screen fixed inset-y-0 left-0 z-20 transition duration-300 transform lg:translate-x-0 lg:static"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div
      class="flex flex-row-reverse max-sm:border-b-[1px] max-md:border-b-[1px] max-sm:pb-[17.5px] max-md:pb-[17.5px] max-lg:border-b-[1px] max-lg:pb-[17.5px]"
    >
      <button
        class="p-[10px] lg:hidden mt-2 mr-2 max-sm:pl-5"
        @click="isOpen = false"
      >
        <SvgIcon type="mdi" :path="mdiClose" />
      </button>
    </div>
    <div
      class="h-[70px] max-sm:hidden max-md:hidden max-lg:hidden border-b-[1px] flex justify-center items-center"
      :class="isOpen ? 'h-[18px]' : ''"
    >
      <h1 v-if="!isOpen" class="text-[22px]">E-Book</h1>
    </div>
    <div>
      <ul v-for="(item, id) in menu" :key="id">
        <li v-if="!item?.submenu?.length" class="">
          <router-link
            :key="id"
            :to="item.path"
            @click.prevent
            class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 dark:text-gray-200 dark:hover:bg-gray-700"
            :class="{
              'bg-gray-100 dark:bg-gray-700': $route.meta.child === item.keys,
            }"
          >
            <div class="text-[20px] mr-3">
              <SvgIcon type="mdi" :path="item.icon" />
            </div>
            {{ $t(item.label) }}
          </router-link>
        </li>
        <li v-else>
          <div
            class="flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            @click="toggleDropdown"
          >
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <div class="text-[20px]">
                <SvgIcon type="mdi" :path="item.icon" />
              </div>
              <span class="flex-1 ml-3 text-left whitespace-nowrap">{{
                $t(item.label)
              }}</span>
            </button>
            <div :class="{ 'rotate-180': isDropdownVisible }">
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <ul
            v-show="isDropdownVisible"
            id="dropdown-crud"
            class="space-y-2"
            v-for="(mn, id) in item.submenu"
            :key="id"
          >
            <li>
              <router-link
                :key="id"
                :to="mn.path"
                @click.prevent
                class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700"
                :class="{
                  'bg-gray-100 dark:bg-gray-700': $route.meta.child === mn.key,
                }"
              >
                {{ $t(mn.label) }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div
    v-else
    class="w-[210px] max-md:w-[200px] max-lg:w-[200px] max-xl:w-[200px] overflow-auto bg-white border-r-[1px] h-screen fixed inset-y-0 left-0 z-20 transition duration-300 transform lg:translate-x-0 lg:static"
    :class="dialog ? '  max-sm:hidden max-md:hidden max-lg:hidden' : ''"
  >
    <div
      class="flex flex-row-reverse max-sm:border-b-[1px] max-md:border-b-[1px] max-sm:pb-[17.5px] max-md:pb-[17.5px] max-lg:border-b-[1px] max-lg:pb-[17.5px]"
    >
      <button
        class="p-[10px] lg:hidden mt-2 mr-2 max-sm:pl-5"
        @click="isOpen = false"
      >
        <SvgIcon type="mdi" :path="mdiClose" />
      </button>
    </div>
    <div
      class="h-[70px] max-sm:hidden max-md:hidden max-lg:hidden border-b-[1px] flex justify-center items-center"
      :class="isOpen ? 'h-[18px]' : ''"
    >
      <h1 v-if="!isOpen" class="text-[22px]">E-Book</h1>
    </div>
    <div>
      <router-link
        v-for="(item, id) in menu"
        :key="id"
        :to="item.path"
        class="flex mt-1 py-[10px] px-5 gap-[15px] hover:bg-gray-100 max-sm:px-5 max-xl:px-2 max-2xl:px-2"
        :class="{
          active_class: $route.meta.child == item.keys,
        }"
        ><div class="text-[20px]">
          <SvgIcon type="mdi" :path="item.icon" />
        </div>
        <span class="">{{ item.label }}</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
//@ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose } from "@mdi/js";
import { useSidebarjs } from "../../hooks/UseSidebar";
import { AdminMenu } from "../menu/AdminMenu";
import { useDeleteModal } from "../../hooks/UseSidebar";
import { SuperdminMenu } from "../menu/SuperadminMenu";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });
const lang = ref("");
const local = localStorage.getItem("lang");
lang.value = local || "uz";

watch(lang, (val) => {
  localStorage.setItem("lang", val);
  locale.value = val;
  location.reload();
});

const dialog = ref();
watch(useDeleteModal(), (value) => {
  dialog.value = value;
});

const chooseMenu = () => {
  const role = localStorage.getItem("role");
 
  if (role === "superadmin") {
    return SuperdminMenu;
  }
};
const menu = ref(chooseMenu());

const isOpen = useSidebarjs();

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style>
.active_class {
  background-color: #152540;
  color: white;
}

.el-collapse-item__header {
  background-color: #152540;
}
</style>
