import Vue from 'vue'
import VueRouter from 'vue-router'
import CitizensView from '../views/CitizensView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'citizens',
        component: CitizensView
    },
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
