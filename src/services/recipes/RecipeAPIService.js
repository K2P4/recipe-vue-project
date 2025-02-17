/** @format */
import axios from "axios";
export default class RecipeAPIService {
	async all() {
		try {
			const res = await axios.get("/recipes");
			return res.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async getRecipe(id) {
		try {
			const res = await axios.get(`/recipes/${id}`);
			return res.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async deleteRecipe(id) {
		try {
			const res = await axios.delete(`/recipes/${id}`);
			return res.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async createRecipe(formData) {
		try {
			const res = await axios.post("/recipes", formData);
			return res.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}

	async updateRecipe(id, formData) {
		try {
			const res = await axios.post(`/recipes/${id}`, formData);
			return res.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
}
