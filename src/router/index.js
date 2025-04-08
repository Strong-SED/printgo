import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue'; 
import HomeView from '../views/HomeView.vue';
import CreatePrintShop from '../views/CreatePrintShop.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/signup', component: SignUpView }, 
  { path: '/create-print-shop', component: CreatePrintShop }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
