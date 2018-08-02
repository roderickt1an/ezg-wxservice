import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import searchList from '@/components/searchList'
// import productDetail from '@/components/productDetail'
// import chat from '@/components/chat'
// import productList from '@/components/productList'
// import cart from '@/components/cart'
// import getUserInfo from '@/components/getUserInfo'
// import orderList from '@/components/orderList'
// import tel from '@/components/tel'

import login from 'base/login/login'
import mobileBind from 'base/login/bindMobile'
import complain from 'base/common/complain'

import serviceCenterIndex from 'base/serviceCenter/main'

import bookKeepingAgeny from 'base/serviceCenter/bookKeepingAgency'
import dymaic from 'base/serviceCenter/dymaic'
import dataMemo from 'base/serviceCenter/dataMemo'

import zuoZhang from 'base/serviceCenter/zuozhang'
import baoShui from 'base/serviceCenter/baoshui'
import report from 'base/serviceCenter/report'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'getUserInfo',
    //   component: getUserInfo
    // },
    {
      path:'/complain/:id/:product',
      name:'complain',
      component: complain
    },
    {
      path:'/servicecenterindex',
      name:'serviceCenterIndex',
      component: serviceCenterIndex
    },

    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path:'/mobliebind',
      name: 'mobileBind',
      component: mobileBind
    },

    {
      path:'/bookkeepingageny/:companyid',
      name: 'bookKeepingAgeny',
      component: bookKeepingAgeny
    },
    {
      path: '/dymaic/:workOrderId',
      name: 'dymaic',
      component: dymaic
    },
    {
      path: '/dataMemo',
      name: 'dataMemo',
      component: dataMemo
    },
    {
      path: '/zuozhang',
      name: 'zuozhang',
      component: zuoZhang
    },
    {
      path: '/baoshui',
      name: 'baoshui',
      component: baoShui
    },
    {
      path: '/report/:companyid/:period',
      name: 'report',
      component: report
    },
    {
      path: '/',
      redirect: {
        name:'login'
      }
    },
    // 采用history模式，配置全局路由
    {
      path: '*',
      redirect: {
        name:"serviceCenterIndex"
      }
    }
  ]
})
