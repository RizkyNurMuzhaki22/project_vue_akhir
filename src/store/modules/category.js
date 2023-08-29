import axios from "axios";

const category = {
    namespaced: true,
    state: {
        categories: []
    },
    getters: {
        getCategories: state => state.categories
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const dataCategory = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-categories")
                commit('SET_CATEGORIES', dataCategory.data.data.slice(0, 12))
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    }
}

export default category ;