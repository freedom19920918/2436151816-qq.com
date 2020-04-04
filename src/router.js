import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './pages/Login.vue';


Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/index',
            component: () => import(/*webpackChunkName:'index'*/'./pages/Index.vue'),
            children: [
                //后台首页
                {
                    path: '',
                    component: () => import(/*webpackChunkName:'home'*/'./pages/Home'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'}
                        ]
                    }
                },
                //订单管理
                {
                    path: 'orderManage',
                    component: () => import(/*webpackChunkName:'OrderManage'*/'./pages/OrderManage.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/orderManage',title:'订单管理'},
                        ]
                    }
                },
                //商品列表
                {
                    path: 'productsManage/list',
                    component: () => import(/*webpackChunkName:'ProductsList'*/'./pages/productsManage/ProductsList.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/productsManage/list',title:'商品列表'},
                        ]
                    }
                },
                //添加商品
                {
                    path: 'productsManage/add',
                    component: () => import(/*webpackChunkName:'AddProduct'*/'./pages/productsManage/AddProduct.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/productsManage/add',title:'添加商品'},
                        ]
                    }
                },
                //店铺管理
                {
                    path: 'shopManage',
                    component: () => import(/*webpackChunkName:'ShopManage'*/'./pages/ShopManage.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/shopManage',title:'店铺管理'},
                        ]
                    }
                },
                //账号管理
                {
                    path: 'accountManage/list',
                    component: () => import(/*webpackChunkName:'AccountsList'*/'./pages/accountsManage/AccountsList.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/accountManage/list',title:'账号管理'},
                        ]
                    }
                },
                {
                    path: 'accountManage/add',
                    component: () => import(/*webpackChunkName:'AddAccount'*/'./pages/accountsManage/AddAccount.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/accountManage/add',title:'添加账号'},
                        ]
                    }
                },
                {
                    path: 'accountManage/changePwd',
                    component: () => import(/*webpackChunkName:'ChangePwd'*/'./pages/accountsManage/ChangePwd.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/accountManage/changePwd',title:'修改密码'},
                        ]
                    }
                },

                //销售统计
                {
                    path: 'saleStatistics/productStatistics',
                    component: () => import(/*webpackChunkName:'ProductStatistics'*/'./pages/saleStatistics/ProductStatistics.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/saleStatistics/productStatistics',title:'商品统计'},
                        ]
                    }
                },
                {
                    path: 'saleStatistics/orderStatistics',
                    component: () => import(/*webpackChunkName:'ProductStatistics'*/'./pages/saleStatistics/OrderStatistics.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/saleStatistics/orderStatistics',title:'订单统计'},
                        ]
                    }
                },
                {
                    path:'personalCenter',
                    component:()=>import(/*webpackChunkName:'personalCenter' */'./pages/UserCenter.vue'),
                    meta:{
                        breadArr:[
                            {path:'/index',title:'首页'},
                            {path:'/index/personalCenter',title:'个人中心'},
                        ]
                    }
                },
                //404
                {
                    path: '*',
                    component: () => import(/*webpackChunkName:'NotFound'*/'./pages/NotFound.vue')
                }
            ]
        }
    ]
});