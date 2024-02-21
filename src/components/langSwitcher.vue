<template>
  <nav
    class="flex text-white h-[80px] px-[50px] border-b-2 border-gray-900"
  >
    <div class="flex pt-[25px]">

      <n-dropdown
        trigger="click"
        :options="options"
        @select="handleSelect"
      >
        <n-button>{{ locale.toUpperCase() }}</n-button>
      </n-dropdown>
    </div>
  </nav>
</template>

<script setup>
import { NDropdown, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const options = [
  {
    label: "English",
    key: "en",
  },
  {
    label: "Russian",
    key: "ru",
  },
  {
    label: "O'zbek",
    key: "uz",
  },
];

function handleSelect(key) {
  locale.value = key;
  document.getElementsByClassName("n-button")[document.getElementsByClassName("n-button").length-1].textContent =
    key.toUpperCase();
  localStorage.setItem("lang", key);
}
</script>
