import { adminRoute } from "@/constants/routes/admin";
import {Layouts} from "@/constants/layouts";

export default [
    {
      path: "/admin/home",
      name: adminRoute.RT_DASHBOARD,
      component: () => import("@/features/admin/pages/homes.vue"),
      meta: {
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_DAHBOARD,
      }
    },
    {
      path: "/admin/product",
      name: adminRoute.RT_PRODUCTS,
      component: () => import("@/features/admin/pages/products.vue"),
      meta: {
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_PRODUCTS,
      }
    },
    {
      path: "/admin/order",
      name: adminRoute.RT_ORDER,
      component: () => import("@/features/admin/pages/order.vue"),
      meta: {
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_ORDER,
      }
    },
    {
      path: "/admin/category",
      name: adminRoute.RT_CATEGORY,
      component: () => import("@/features/admin/pages/category.vue"),
      meta: {
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_CATEGORY,
      }
    },
    {
      path: "/admins",
      name: adminRoute.RT_ADMINS,
      component: () => import("@/features/admin/pages/admins.vue"),
      meta: {
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_ADMINS,
      }
    },
    {
      path:"/admin/product/:id",
      name:adminRoute.RT_SINGLE_PRODUCT,
      component: () => import("@/features/admin/pages/Product/singleProduct.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_SINGLE_PRODUCT
      }
    },
    {
      path:"/admin/category/:id",
      name:adminRoute.RT_SINGLE_CATEGORY,
      component: () => import("@/features/admin/pages/Category/singleCategory.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_SINGLE_CATEGORY
      }
    },
    {
      path:"/admin/:id",
      name:adminRoute.RT_SINGLE_ADMIN,
      component: () => import("@/features/admin/pages/oneAdmin.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_SINGLE_ADMIN
      }
    },
    {
      path:"/admin/addProduct",
      name:adminRoute.RT_ADD_PRODUCT,
      component: () => import("@/features/admin/pages/addProduct.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_ADD_PRODUCT
      }
    },
    {
      path:"/admin/addImage",
      name:adminRoute.RT_ADD_MEDIA,
      component: () => import("@/features/admin/pages/addMedia.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_ADD_MEDIA
      }
    },
    {
      path:"/admin/addCategory",
      name:adminRoute.RT_ADD_CATEGORY,
      component:()=>import("@/features/admin/pages/Category/add-category.vue"),
      meta:{
        requiresAuth:true,
        layout:Layouts.ADMIN,
        title:adminRoute.MT_ADD_CATEGORY
      }
    }
  ];
