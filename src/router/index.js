import { createRouter, createWebHistory } from 'vue-router'

import CreationView from "@/views/creationView.vue";
import ProjectsView from "@/views/projectsView.vue";
import usersView from "@/views/usersView.vue";
import loginView from "@/views/loginView.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: loginView
    },
    {
        path: '/users',
        name: 'users',
        component: usersView,
        meta: { requiresAuth: true }
    },
    {
        path: '/creation',
        name: 'creation',
        component: CreationView,
        meta: { requiresAuth: true }
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    // 🔐 Si la route nécessite l'auth mais pas de token → redirection login
    if (to.meta.requiresAuth && !token) {
        next({ name: 'Login' })
    }

    // 🚫 Si l'utilisateur est déjà connecté et essaie d'aller sur /login → redirection
    else if (to.firstName === 'Login' && token) {
        next({ name: 'Users' }) // ou autre page principale
    }

    // ✅ Sinon, on laisse passer
    else {
        next()
    }
})



export default router