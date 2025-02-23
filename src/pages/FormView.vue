<template>
	<v-app>
		<v-row>
			<v-snackbar class="mx-auto" v-model="snackbar" timeout="3000" color="success">
				Create Recipe Successfully .
				<template v-slot:actions>
					<v-btn color="white" text @click="snackbar = false">Close</v-btn>
				</template>
			</v-snackbar>

			<!-- nav sheet -->
			<v-col cols="2">
				<v-navigation-drawer style="background-color: #303a52;" app permanent>
					<v-list class="mx-2">
						<v-list-item>
							<v-list-item-title style="font-size: 25px;" class="  cursor-pointer   font-bold text-white">
								My Recipe
							</v-list-item-title>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item>

							<button
								class=" rounded-md text-left flex items-center   gap-4 font-bold bg-gray-300 mt-3 text-gray-900 p-2 w-full ">
								<v-icon size="30" color="#0e153a">
									mdi-chef-hat
								</v-icon>
								Recipe Form
							</button>


						</v-list-item>
					</v-list>
				</v-navigation-drawer>
			</v-col>



			<v-col class="mx-3" col="">
				<router-link :to="{ name: 'HomeView' }">
					<h1 class="font-bold text-gray-900 border-b text-3xl py-5 ">
						Recipe
					</h1>
				</router-link>





				<v-col class="m-auto max-h-screen " cols="6">

					<v-form @submit.prevent="submitData()" class=" p-4 my-20 rounded-md shadow-md">
						<input v-model="form.title" type="text" placeholder="Chicken Curry..."
							class=" w-full bg-gray-700 text-gray-300 focus:border-0 focus:outline-none rounded-lg p-3">



						<textarea v-model="form.description" type="text" placeholder="Description..."
							class=" w-full bg-gray-700 my-9 text-gray-300 focus:border-0 focus:outline-none rounded-lg p-3">
			</textarea>




						<v-select :items="categoryList" v-model="form.category_id" item-text="name" item-value="id"
							label="Select Category" outlined></v-select>


						<img v-if="imgpath" class="object-cover" height="100" width="100%" :src="imgpath" alt="">

						<v-file-input @change="uploadImage" v-model="form.image" label="Choose File"
							style=" border-bottom: 0; " variant="solo-filled"></v-file-input>


						<button onmouseover="this.style.border='none'; this.style.color='white';"
							onmouseout="this.style.border='1px solid #ff304f'; this.style.color='#ff304f';"
							style=" color: #ff304f; border: 1px solid #ff304f; " type="submit"
							class=" hover:border-0  rounded-lg hover:text-white   hover:bg-red-400  w-full p-3 text-center duration-500">
							Submit
						</button>
					</v-form>
				</v-col>


			</v-col>
		</v-row>


	</v-app>
</template>

<script>
import RecipeAPIService from "../services/recipes/RecipeAPIService.js";
const RecipeService = new RecipeAPIService();

export default {
	name: "FormView",


	data() {
		return {
			snackbar: false,
			imgpath: '',
			isEdit: false,
			recipeId: Number(this.$route.params.id),

			form: {
				title: null,
				description: null,
				category_id: null,
				image: null,

			},
			categoryList: [],

		}






	},




	methods: {
		fetchCategory() {
			RecipeService.allCategory().then((cat) => {
				this.categoryList = cat;
			})

		},

		uploadImage() {
			const formData = new FormData();
			formData.append('image', this.form.image);

			RecipeService.uploadImage(formData).then((data) => {
				this.imgpath = data.path;
			});
		},

		fetchRecipe() {

			if (this.recipeId) {
				this.isEdit = true;

				RecipeService.getRecipe(this.recipeId).then((recipe) => {
					console.log(recipe);

					this.form = {
						title: recipe.title,
						description: recipe.description,
						category_id: recipe.category_id,
						image: null,
					};
					this.imgpath = recipe.image;
				}).catch((error) => {
					console.error("Error fetching recipe:", error);
				});
			}
		},

		submitData() {
			const formData = new FormData();
			formData.append('title', this.form.title);
			formData.append('description', this.form.description);
			formData.append('category_id', this.form.category_id);
			formData.append('image', this.imgpath);

			if (this.isEdit) {
				RecipeService.updateRecipe(this.recipeId, formData,
					{
						headers: {
							'content-type': 'multipart/form-data'
						}
					}
				).then(() => {
					this.snackbar = true;
					this.$router.push('/');
				});
			} else {
				RecipeService.createRecipe(formData).then(() => {
					this.form = {};
					this.snackbar = true;
					this.$router.push('/');
				});
			}
		},


		// createData() {
		// 	const formData = new FormData();
		// 	formData.append('title', this.form.title);
		// 	formData.append('description', this.form.description);
		// 	formData.append('category_id', this.form.category_id);
		// 	formData.append('image', this.imgpath);



		// 	RecipeService.createRecipe(formData).then((data) => {
		// 		console.log('Form Data', data)
		// 		this.form={};
		// 		this.snackbar = true;
		// 		this.$router.push('/');


		// 	})
		// }

	},


	created() {
		this.fetchRecipe();
		this.fetchCategory();
	}
}

</script>

<style></style>
