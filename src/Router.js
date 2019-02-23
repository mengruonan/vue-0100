
import Vue from "vue/dist/vue.js" 
import VueRouter from "vue-router"
Vue.use(VueRouter)
// 导入tabber部分的组件
import HomeContainer from "./components/tabber/HomeContainer.vue"
import MemberContainer from "./components/tabber/MemberContainer.vue"
import ShopcarContainer from "./components/tabber/ShopcarContainer.vue"
import SearchContainer from "./components/tabber/SearchContainer.vue"
import NewList from  "./components/News/NewList.vue"


let router= new VueRouter({
    routes:[
        {path:"/",redirect:'/home'},
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:ShopcarContainer},
        {path:"/search",component:SearchContainer},
        {path:"/home/newList",component:NewList}
    ],
    linkActiveClass:"mui-active"
})

export default router