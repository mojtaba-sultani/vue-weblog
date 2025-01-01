import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import CardTours from './pages/CardTours.vue';
import CardBlogs from './pages/CardBlogs.vue';
import About from './pages/about.vue';
import Tours from './pages/Tours.vue';
import Blogs from './pages/blogs.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/tours', name: 'tours', component: Tours, children: [
      { path: ':id', name: 'CardTours', component: CardTours },
    ]
  },
  {
    path: '/blogs', name: 'blogs', component: Blogs, children: [
      { path: ':id', name: 'CardBlog', component: CardBlogs },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;