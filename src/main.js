// 使用vue

import Vue from "vue/dist/vue.js"
// import Vue from "vue"
// import VueRouter from "vue-router"
// Vue.use(VueRouter)

import login from "./login.vue"
// 使用MUI 
import  "./lib/mui/css/mui.css"

// 引入mint-ui
// import Mint-UI from "mint-ui"

import { Header, Swipe, SwipeItem,Toast } from 'mint-ui';
// 导入MintUI的样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入vue-resource 
import VueResource from "vue-resource"
Vue.use(VueResource)
// 导入路由
import router from "./Router.js"



new Vue({
    el: "#app",
    data: {},
    methods: { },   
    render: c => c(login),
    router
})