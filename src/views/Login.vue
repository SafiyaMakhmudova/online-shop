<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div
      v-if="display == true"
      class="w-4/5 md:w-4/6 p-6 px-6 m-auto bg-white border-t border-[rgb(55,179,122)] rounded shadow-lg shadow-purple-800/50 lg:max-w-md"
    >
      <div class="logo flex justify-center">
        <img
          src="../assets/images/icon-1.png "
          class="w-[40%]"
          alt=""
          srcset=""
        />
      </div>

      <form
        :validation-schema="schema"
        @submit.prevent="send"
        class="mt-6"
      >
        <div class="leading-6 my-10">
          <p class="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
            {{ t('login.phone') }}
          </p>
          <p class="text-[16px] sm:text-[20px] md:text-[17px] font-normal text-gray-400">
            {{ t('login.sms') }}
          </p>
        </div>

        <div class="">
          <input
            type="tel"
            name="phone"
            v-model="phone"
            placeholder="+998 ()"
            class="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div class="mt-6">
            <button
              type="submit"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[rgb(55,179,122)] rounded-md hover:bg-[rgb(55,179,122)]-600 focus:outline-none focus:bg-purple-600"
            >
              {{ t('login.signin') }}
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        {{ t('login.account') }}
        <a
          href="#"
          class="font-medium text-[rgb(55,179,122)] hover:underline"
          >{{ t('login.signup') }}</a
        >
      </p>
    </div>
    <!-- ------------------------------------------------------------------------------------- -->
    <div
      v-if="display == false"
      class="w-4/5 md:w-4/6 p-6 px-6 m-auto bg-white border-t border-[rgb(55,179,122)] rounded shadow-lg shadow-purple-800/50 lg:max-w-md"
    >
      <div class="logo flex justify-center">
        <img
          src="../assets/images/icon-1.png"
          class="w-[40%]"
          alt=""
          srcset=""
        />
      </div>

      <form
        class="mt-6"
        @submit.prevent="verify"
      >
        <div class="leading-6 my-10">
          <p class="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
            {{ t('login.verifycode') }}
          </p>
        </div>

        <div class="">
          <input
            type="tel"
            v-model="vfy.otp"
            class="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div class="mt-6">
            <button
              type="submit"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[rgb(55,179,122)] rounded-md hover:bg-[rgb(55,179,122)]-600 focus:outline-none focus:bg-purple-600"
            >
              {{ t('login.send') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/features/users/store/index';
const auth = useAuthStore();
const { t } = useI18n();

const schema = ref<any>()
const display = ref(true);
const phone = ref();
const forConfirm = ref();
const vfy = {
  phone: forConfirm.value,
  verification_key: auth.codesss,
  otp: ''
};

const send = async () => {
  if (display.value == true) {
    display.value = false;
    let payload = { phone: phone.value };
    forConfirm.value = phone.value;
    await auth.otp(payload);
    vfy.verification_key = auth.codesss;
  } else {
    display.value = true;
  }
};

const verify = async () => {
  await auth.verifyOtp({ ...vfy, phone: forConfirm.value });
};
</script>

<style scoped></style>
