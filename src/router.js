import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import CardTours from './pages/CardTours.vue';
import CardPost from './pages/CardPost.vue';
import About from './pages/about.vue';
import Tours from './pages/Tours.vue';
import Blogs from './pages/blogs.vue';

const routes = [
  { path: '/', name:'Home' , component: Home },
  { path: '/:id',name:'CardTours', component: CardTours},
  { path: '/:id',name:'CardPost', component: CardPost},
  { path: '/about',name:'about', component: About},
  { path: '/tours', name:'tours' , component: Tours },
  { path: '/blogs', name:'blogs' , component: Blogs },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;