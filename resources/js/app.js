require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import {routes} from './routes';

//importamos vuetify junto con el idioma
import Vuetify from 'vuetify';
import es from 'vuetify/es5/locale/es';
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/styles/main.sass';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router, 
    vuetify: new Vuetify({
        lang: {
            locales: { es },
            current: "es"
        },
        defaultAssets:{
            font:{
                family:"Roboto"
            },
            icons: {
                iconfont: "mdi"
            }
        }
    }),
    render: h => h(App),
});

router.replace('/login');