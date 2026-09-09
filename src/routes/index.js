import enfermeria from "../views/enfermeria.vue"
import bienestar from "../views/bienestar.vue"
import biblioteca from "../views/biblioteca.vue"
import cafeteria from "../views/cafeteria.vue"
import coordinacion from "../views/coordinacion.vue"
import acercade from "../views/acercade.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/enfermeria", component:enfermeria},
    {path:"/bienestar", component:bienestar},
    {path:"/biblioteca", component:biblioteca},
    {path:"/cafeteria", component:cafeteria},
    {path:"/coordinacion", component:coordinacion},
    {path:"/acercade", component:acercade}
]

export const router = createRouter({
    routes,
    history:createWebHashHistory()
})