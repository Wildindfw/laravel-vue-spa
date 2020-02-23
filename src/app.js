import Vue from "vue";
import App from "./App.vue";
import router from "router";
import store from "store";
import "./plugins/vue-tailwind";
import "./assets/css/tailwind.css";
import Vue from "vue";
import Router from "vue-router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import FooterLogin from "./layout/FooterLogin";
import Landing from "./views/Landing.vue";
import Solar from "./views/Solar.vue";
import Components from "./views/Components.vue";
import Test from "./views/Test.vue";
import VueTailwind from "./views/VueTailwind.vue";
import Login from "./views/Login.vue";
import Login2 from "./views/Login2.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dashboard.vue";
// import Swiper from "./views/Swiper.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Transitions from "vue2-transitions";
Vue.use(Transitions);

import MyOwnTheme from "myOwnTheme.js";
import VueTailwind from "vue-tailwind";
Vue.use(VueTailwind, {
    theme: MyOwnTheme
});

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "landing",
            components: {
                header: Navbar,
                default: Landing,
                footer: Footer
            }
        },
        {
            path: "/solar",
            name: "solar",
            components: {
                // header: Navbar,
                default: Solar
                    // footer: Footer
            }
        },
        {
            path: "/components",
            name: "components",
            components: {
                header: Navbar,
                default: Components
                    // footer: Footer
            }
        },
        {
            path: "/test",
            name: "test",
            components: {
                // header: Navbar,
                default: Test
                    // footer: Footer
            }
        },
        {
            path: "/vue-tailwind",
            name: "vue-tailwind",
            components: {
                // header: Navbar,
                default: VueTailwind
                    // footer: Footer
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: Navbar,
                default: Login,
                footer: FooterLogin
            }
        },
        {
            path: "/login2",
            name: "login2",
            components: {
                header: Navbar,
                default: Login2,
                footer: FooterLogin
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: Navbar,
                default: Profile,
                footer: Footer
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            components: {
                // header: Navbar,
                default: Dashboard
                    // footer: Footer
            }
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/swiper",
            name: "swiper",
            component: () =>
                import ( /* webpackChunkName: "components" */ "./views/Swiper.vue")
        },
        {
            path: "/button",
            name: "button",
            component: () =>
                import ( /* webpackChunkName: "components" */ "./views/Button.vue")
        }
        // {
        //   path: "/landing",
        //   name: "landing",
        //   component: () =>
        //     import(/* webpackChunkName: "components" */ "./views/Landing.vue")
        // }
    ]
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");