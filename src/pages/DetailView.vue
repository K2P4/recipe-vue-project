<!-- @format -->

<template>

	<div class="">
		<NavRecipe />
		<div class="flex items-center my-7">

			<v-snackbar v-model="snackbar" :timeout="2000" class="elevation-24" color="red">
				Delete Recipe Successfully .
				<template v-slot:actions>
					<v-btn color="white" text @click="snackbar = false">Close</v-btn>
				</template>
			</v-snackbar>
			<v-col cols="3">
				<img height="700" :src="detailList.image" class="w-full object-cover" />
			</v-col>
			<v-col class="" cols="9">
				<h1 class="font-bold text-3xl">{{ detailList.title }}</h1>
				<p class="text-gray-600  text-md  py-3 ">{{ detailList.description }}</p>


				<div class=" flex  items-center justify-end gap-2  pt-3 border-t ">
					<v-btn :to="{ name: 'FormView', params: { id: detailList.id } }"  elevated
						style="text-align: center; color: white;" color="#1976D2">Edit</v-btn>

					<v-btn @click="deleteItem(detailList.id)" elevated style="text-align: center; color: white;"
						color="#ff304f">Delete</v-btn>
				</div>


			</v-col>




		</div>
	</div>




</template>

<script>
import NavRecipe from "@/Components/NavRecipe.vue";
import RecipeAPIService from "../services/recipes/RecipeAPIService.js";
const RecipeService = new RecipeAPIService();

export default {
	name: "DetailView",
	components: {
		NavRecipe
	},

	data() {
		return {
			detailList: [],
			snackbar: false,
		}




	},



	methods: {
		fetchDetail() {
			RecipeService.getRecipe(this.$route.params.id).then((data) => { this.detailList = data });
		},


		deleteItem(id) {
			if (confirm("Are You Sure to Delete ?")) {
				RecipeService.deleteRecipe(id).then(() => {
					this.snackbar = true;
					this.$router.replace({ name: "HomeView" });
				})
			}



		}
	},



	created() {
		this.fetchDetail();
	}



}

</script>
