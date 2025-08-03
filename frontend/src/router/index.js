import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import AddProduct from '../components/AddProduct.vue';
import News from '../components/News.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/add', component: AddProduct },
  { path: '/edit/:id', component: AddProduct },
  { path: '/news', component: News },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
