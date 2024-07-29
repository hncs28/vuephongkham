import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
//import Home2 from '../components/Home2.vue';
import DoctorTeam from '../components/DoctorTeam.vue';
import MyService from '../components/MyService.vue';
import LogIn from '../components/LogIn.vue';
import BookingForm from '../components/BookingForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import InfoDoctor from '../components/InfoDoctor.vue'
import InfoService from '../components/InfoService.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';

const routes =[
  {path: '/', component: HomePage, name:'HomePage',props: true},
  //{path: '/homepage2', component: Home2},
  {
    path: '/infodoctor/:employeeID',
    name: 'InfoDoctor',
    component: InfoDoctor,
    props: true
  },
  {
    path: '/doctorteam',
    name: 'DoctorTeam',
    component: DoctorTeam
  },
  {
    path: '/myservice', 
    name: 'MyService',
    component: MyService},
  {path: '/login', component: LogIn, name:'login'},
  {path: '/booking', component: BookingForm},
  {path: '/register', component: RegisterForm},
  {path: '/infoservice/:serviceID', 
    name:'InfoService',
    props: true,
    component: InfoService},
    {path:'/menu',component: HeaderMenu, name:'Menu', props:true},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router