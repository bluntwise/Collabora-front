import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/homeView.vue";
import creationView from "../views/creationView.vue";
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/creation',
            name: 'creation',
            component: creationView
        }
    ],
})
