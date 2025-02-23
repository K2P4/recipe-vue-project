/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import DetailView from "@/pages/DetailView.vue";
import FormView from "@/pages/FormView.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: HomeView, name: "HomeView" },
	{ path: "/recipe/:id", component: DetailView, name: "DetailView" },
	{ path: "/recipeform/:id", component: FormView, name: "FormView" },
];

const router = new VueRouter({
	mode: "history", 
	routes,
});
export default router;
