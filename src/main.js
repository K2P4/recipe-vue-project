/** @format */

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import axios from "axios";
import Vuetify from 'vuetify';
import "./assets/style/index.css";
import "vuetify/dist/vuetify.min.css"; 
import '@mdi/font/css/materialdesignicons.css';




Vue.use(Vuetify);
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:8000/api";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const vuetify = new Vuetify();

new Vue({
	vuetify,
	router,
	render: (h) => h(App),
}).$mount("#app");
