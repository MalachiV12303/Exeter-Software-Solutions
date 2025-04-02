import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MembersView from '../views/MembersView.vue'
import CompanyView from '../views/CompanyView.vue'
import IdealogyView from '../views/IdealogyView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/company',
        name: 'company',
        component: CompanyView
    },
    {
        path: '/members',
        name: 'members',
        component: MembersView
    },
    {
        path: '/idealogy',
        name: 'idealogy',
        component: IdealogyView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router