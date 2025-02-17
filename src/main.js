/** @format */

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import axios from "axios";
import "./assets/style/index.css";
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:8000/api";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
