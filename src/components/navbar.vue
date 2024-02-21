<template>
  <nav
    class="flex bg-white pt-5 items-center"
    :class="{ 'fixed-navbar': isFixed }"
  >
    <router-link to="/">
      <img
        class="w-[215px] h-[66px] mr-20"
        src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/logo.png"
        alt=""
      />
    </router-link>
    <div class="w-[80%] mx-auto">
      <div class="flex justify-around text-text font-semibold">
        <div>
          <router-link
            to="/about"
            class="color"
          >
            {{ t('appbar.about') }}</router-link
          >
        </div>
        <div
          @mouseenter="showPage = true"
          @mouseleave="showPage = false"
          class="color cursor-pointer"
        >
          {{ t('appbar.page') }}
        </div>
        <div>
          <router-link
            to="/contact"
            class="color"
          >
            {{ t('appbar.contact') }}</router-link
          >
        </div>
        <div>
          <router-link
            to="/wishlist"
            class="color"
          >
            {{ t('appbar.wishlist') }}</router-link
          >
        </div>
      </div>

      <div
        v-show="showPage"
        class="flex"
        @mouseenter="showPage = true"
        @mouseleave="showPage = !true"
      >
        <div
          class="bg-white font-semibold px-4 py-5 rounded-lg fixed text-gray right-0 smoothShow"
          :class="{
            flex: isLarge,
            '!w-[80%]': isLarge,
            'max-h-[250px]': isLarge
          }"
        >
          <div>
            <div>
              <router-link
                to="/about"
                class="color"
                >About</router-link
              >
            </div>
            <div>
              <router-link
                to="/contact"
                class="color"
                >Contact</router-link
              >
            </div>
            <div>
              <router-link
                to="/account"
                class="color"
                >My Account</router-link
              >
            </div>
            <div>
              <router-link
                to="/checkout"
                class="color"
                >Checkout</router-link
              >
            </div>
            <div>
              <router-link
                to="/wishlist"
                class="color"
                >Shop Wishlist</router-link
              >
            </div>
            <div>
              <router-link
                to="/cart"
                class="color"
                >Cart</router-link
              >
            </div>
            <div>
              <router-link
                to="/"
                class="color"
                >My Orders</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="items-center">
      <div class="flex items-center">
        <img
          class="w-8 h-[60%]"
          src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/hot.png"
          alt=""
        />
        <div class="ml-4">
          <a
            class="block text-primary text-xl font-semibold hover:text-red-500"
            href="tel:1900888123"
            >1900888123</a
          >
          <span class="text-gray">24/7 {{ t('appbar.support') }}</span>
        </div>
      </div>
    </div>
    <div>
      <lang-switcher />
    </div>
  </nav>
</template>

<script setup lang="ts">
import langSwitcher from '@/components/langSwitcher.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const isFixed = ref(false);

const isLarge = ref<boolean>(true);
const showPage = ref<boolean>(false);

const handleScroll = () => {
  isFixed.value = window.scrollY > 300; // Adjust the scroll threshold as needed
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.smoothShow {
  transition: all 0.3s ease-in-out;
  animation: fadeIn forwards ease-in-out 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
