import Vue from 'vue'
import Router from 'vue-router'
import Tutorial from '@/components/Tutorial'
import AddTutorial from '@/components/AddTutorial'
import TutorialsList from '@/components/TutorialsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/tutorials',
      name: 'tutorials',
      component: TutorialsList

    },
    {
      path: '/tutorials/:id',
      name: 'tutorial-details',
      component: Tutorial
    },
    {
      path: '/add',
      name: 'add',
      component: AddTutorial
    }
  ]
})
