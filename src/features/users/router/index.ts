import {Layouts} from '@/constants/layouts';
import { userRoute } from '@/constants/routes/user';

export default [
  {
    path: "/",
    name: userRoute.RT_HOME,
    component: () => import("@/features/users/pages/Home.vue"),
    meta: {
      layout:Layouts.USER,
      title: userRoute.MT_HOME
    }
  },
  {
    path:'/about',
    name:userRoute.RT_ABOUT,
    component: () => import("@/features/users/pages/About.vue"),
    meta:{
      layout:Layouts.USER,
      title:userRoute.MT_ABOUT
    }
  },
  {
    path:"/contact",
    name:userRoute.RT_CONTACT,
    component: () => import("@/features/users/pages/contact.vue"),
    meta:{
      layout:Layouts.USER,
      title:userRoute.MT_CONTACT
    }
  },
  {
    path:"/wishlist",
    name:userRoute.RT_WISHLIST,
    component: () => import("@/features/users/pages/wishlist.vue"),
    meta:{
      requiresAuth:false,
      layout:Layouts.USER,
      title:userRoute.MT_WISHLIST
    }
  },
  {
    path:"/checkout",
    name:userRoute.RT_CHECKOUT,
    component: () => import("@/features/users/pages/checkout.vue"),
    meta:{
      requiresAuth:true,
      layout:Layouts.USER,
      title:userRoute.MT_CHECKOUT
    }
  },
  {
    path:"/account",
    name:userRoute.RT_ACCOUNT,
    component: () => import("@/features/users/pages/account.vue"),
    meta:{
      requiresAuth:true,
      layout:Layouts.USER,
      title:userRoute.MT_ACCOUNT
    }
  }
];
