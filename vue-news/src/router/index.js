import Vue from 'vue'
import VueRouter from 'vue-router'
import bus from '../utils/bus'
import store from '../store/index'
// import createListView from '../views/CreateListView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      // # 1
      store.dispatch('FECH_LIST', to.name)
        .then(() => {
        // #5
          console.log(5)
          console.log('fetched')
          bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // component: createListView('NewsView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/JobsView.vue'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      // # 1
      store.dispatch('FECH_LIST', to.name)
        .then(() => {
        // #5
          console.log(5)
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // component: createListView('JobsView')
  },
  {
    path: '/ask',
    name: 'ask',
    component: () => import('../views/AskView.vue'),
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      // # 1
      store.dispatch('FECH_LIST', to.name)
        .then(() => {
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // component: createListView('AskView')
  },
  {
    path: '/user/:id',
    name: 'userview',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/item/:id',
    name: 'itemview',
    component: () => import('../views/ItemView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
