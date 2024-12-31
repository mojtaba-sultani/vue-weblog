import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import CardTours from './pages/CardTours.vue';
import CardPost from './pages/CardPost.vue';
import About from './pages/about.vue';

const routes = [
  { path: '/', name:'Home' , component: Home },
  { path: '/:id',name:'CardTours', component: CardTours},
  { path: '/:id',name:'CardPost', component: CardPost},
  { path: '/about',name:'about', component: About},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;