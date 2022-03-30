const Home = ()=> import('./components/Home.vue');

//importamos componentes del login

const Login = ()=> import('./components/login/Login.vue');
const Registrar = ()=> import('./components/login/Registrar.vue');
const Reset = ()=> import('./components/login/Reset.vue');

//creamos las rutas a manejar dentro de los componentes
export const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'registrar',
        path: '/registrar',
        component: Registrar
    },
    {
        name: 'reset',
        path: '/reset',
        component: Reset
    }
]