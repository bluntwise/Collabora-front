import { createRouter, createWebHistory } from 'vue-router'

import UsersView from "../views/usersView.vue";
import creationView from "../views/creationView.vue";
import projectsView from "@/views/projectsView.vue";
import usersView from "@/views/usersView.vue";
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: usersView,
        },
        {
            path: '/creation',
            name: 'creation',
            component: creationView
        },
        {
            path: '/projects',
            name: 'projects',
            component: projectsView
        }
    ],
})
