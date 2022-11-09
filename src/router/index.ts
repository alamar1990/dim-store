import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import CounterPage from "@/components/CounterPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/counter',
        name: 'counter',
        component: CounterPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router