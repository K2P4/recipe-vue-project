/** @format */
import axios from "axios";
export default class RecipeAPIService {
  async all(url) {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async allCategory() {
    try {
      const res = await axios.get("/categories");
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

  async uploadImage(photo) {
    try {
      const res = await axios.post("/recipes/upload", photo);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async updateRecipe(id, formData) {
    try {
      const res = await axios.put(`/recipes/${id}`, formData, {
        headers: {
          "content-type": "application/json",
        },
      });
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
