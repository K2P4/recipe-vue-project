<!-- @format -->

<template>
	<div class=" ">

		<NavRecipe />
		<!-- Categories -->
		<div class="mx-auto text-center">
			<v-row class="mx-auto">
				<v-col sm:cols="12" cols="12">
					<div class="font-bold text-5xl  m-5  text-center ">
						<h1 class="   ">All your favorite <span class=" text-red-500  ">recipes,</span></h1>
						<h1 class="text-red-500 "> in one place</h1>
					</div>
					<!-- Categories Nav-->
					<ul v-if="categoryList.length"
						class="inline-flex items-center  cursor-pointer my-10 justify-center font-medium  rounded-md  gap-7  bg-red-400 px-7 py-3   w-auto text-white    ">

						<li @click="selectCategory('all')"
							:class="{ 'text-red-200 font-bold': activeCategory === 'all' }"
							class="hover:text-red-200 duration-500">
							All
						</li>

						<!-- Dynamic categories -->
						<li v-for="category in categoryList" :key="category.id" @click="selectCategory(category.name)"
							:class="{ 'text-red-200 font-bold': activeCategory === category.name }"
							class="hover:text-red-200 duration-500">
							{{ category.name }}
						</li>
					</ul>

				</v-col>
			</v-row>
		</div>



		<!-- Recipes -->

		<template>
			<div class="   mx-auto p-4">
				<v-row v-if="recipeList.length" class="">
					<v-col class="my-5 " v-for="(recipe, index) in recipeList" :key="index" cols="12" sm="6" md="4">
						<router-link :to="{ name: 'DetailView', params: { id: recipe.id } }">
							<v-card style="height: 300px;" class="  overflow-hidden">

								<v-img :src="recipe.image" height="200px" class="object-cover "></v-img>
								<v-card-text>
									<h3 class="text-lg  text-black font-bold">{{ recipe.title }}</h3>
									<p class="text-gray-600  line-clamp-2   ">{{ recipe.description }}</p>
								</v-card-text>
							</v-card>
						</router-link>

					</v-col>
				</v-row>



				<v-row v-else class="">
					<v-col v-for="(load, index) in loadingArr" :key="index" cols="12" sm="6" md="4">
						<v-skeleton-loader :elevation="4" color="secondary" type="card"></v-skeleton-loader>
					</v-col>

				</v-row>



				<v-container v-if="pagination">
					<v-pagination v-if="pagination.last_page > 1" v-model="pagination.current_page"
						:length="pagination.last_page" @input="changePage"></v-pagination>
				</v-container>

			</div>



		</template>







	</div>
</template>

<script>
import NavRecipe from "@/Components/NavRecipe.vue";
import RecipeAPIService from "../services/recipes/RecipeAPIService.js";
const RecipeService = new RecipeAPIService();

export default {

	name: "HomeView",
	title: "HomeView",

	components: {
		NavRecipe
	},

	data() {
		return {
			loadingArr: [1, 2, 3, 4, 5, 6],
			pagination: {
				current_page: 1,
				last_page: 1,
				total: 0,
				per_page: 6,
			},
			activeCategory: "all",
			categoryList: [],
			recipeList: [],
		};
	},

	methods: {
		fetchAll(page = 1, category = "all") {
			let url = category === "all"
				? `/recipes?page=${page}`
				: `/recipes?category=${category}&page=${page}`;

			RecipeService.all(url).then((response) => {
				this.recipeList = response.data;
				this.pagination = {
					current_page: response.current_page,
					last_page: response.last_page,
					total: response.total,
					per_page: response.per_page,
				};
			}).catch(error => console.error("Error fetching recipes:", error));
		},


		fetchCategory() {
			RecipeService.allCategory().then((cat) => {
				this.categoryList = cat;
			})

		},

		changePage(page) {
			if (page > 0 && page <= this.pagination.last_page) {
				this.$router.push({ query: { category: this.activeCategory, page } });
				this.fetchAll(page, this.activeCategory);
			}
		},


		selectCategory(category) {

			this.$router.push({ query: { category: category == "all" ? undefined : category } })
			this.activeCategory = category;
			this.fetchAll(category);

		}






	},

	created() {
		const catUrl = this.$route.query.category || "all";
		const pageUrl = parseInt(this.$route.query.page) || 1;

		this.activeCategory = catUrl;
		this.fetchAll(pageUrl, catUrl);
		this.fetchCategory();
	}
};
</script>
