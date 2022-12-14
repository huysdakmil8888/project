import {createRouter,createWebHistory} from 'vue-router'
import CoachesList from "@/pages/coaches/CoachesList";
import Notfound from "@/pages/Notfound";
const router= createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/coaches'},
        {path:'/coaches',component:CoachesList},
        {path:'/coaches/:id',component:null,children:[
                {path:'/contact',component:null} //coaches/1/contact
        ]},
        {path:'/register',component:null},
        {path:'/contact',component:null},
        {path:'/requests',component:null},
        {path:'/:notFound(.*)',component:Notfound},
    ]
})
export default router
