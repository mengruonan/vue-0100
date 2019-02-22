
import Vue from "vue/dist/vue.js"
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 导入tabber部分的组件
import HomeContainer from "./components/HomeContainer.vue"
import MemberContainer from "./components/MemberContainer.vue"
import ShopcarContainer from "./components/ShopcarContainer.vue"
import SearchContainer from "./components/SearchContainer.vue"

let router= new VueRouter({
    routes:[
        {path:"/",redirect:'/home'},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:ShopcarContainer},
        {path:"/search",component:SearchContainer}
    ],
    linkActiveClass:"mui-active"
})

export default router