import { productRoute } from "@/constants/routes/product";
import {Layouts} from "@/constants/layouts";

export default [
  {
    path: '/product/:id',
    name: productRoute.RT_SINGLE_PRODUCT,
    component: () => import('@/features/products/pages/SingleProduct.vue'),
    meta: {
      requiresAuth: false,
      layout: Layouts.USER,
      title: productRoute.MT_SINGLE_PRODUCT
    }
  },

  {
    path: '/product/cart',
    name: productRoute.RT_PRODUCT_CART,
    component: () => import('@/features/products/pages/Cart.vue'),
    meta: {
      layout: Layouts.USER,
      title: productRoute.MT_PRODUCT_CART
    }
  },
];
