import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../pages/HomeComponent";
import ProductComponent from "../pages/ProductComponent";
import CartComponent from "../pages/CartComponent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent,
    },
    {
        path: '/product',
        name: 'product',
        component: ProductComponent,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartComponent,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router