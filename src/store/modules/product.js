import axios from "axios";

const product = {
    namespaced: true,
    state: {
        products: [],
        product: [],
        cart:[]
    },
    getters: {
        getProduct: state => state.products
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const dataProduct = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/search`)
                commit('SET_PRODUCT', dataProduct.data['products']['data']);
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
        async fetchProductById({ commit }, product_slug) {
            try {
                const dataProduct = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/product/details/${product_slug}`)
                commit('SET_PRODUCT_BY_ID', dataProduct.data.data)
            } catch (error) {
                alert("Ada Error");
                console.log(error);
            }
        },
        async addCart({ commit, dispatch }, data) {
            try {
                const response = await axios.post(`https://ecommerce.olipiskandar.com/api/v1/carts/add`,
                data, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                    
                });
                commit('ADD_CART', response.data)
            } catch (error) {
                console.error(error);
            }finally {
                dispatch('cart/fetchCart', null, {root: true})
                alert("Berhasil Menambahkan Product")
            }
        }
    },
    mutations: {
        SET_PRODUCT(state, products) {
            state.products = products
        },
        SET_PRODUCT_BY_ID(state, products) {
            state.product = products
        },
        ADD_CART(state, cart) {
            state.cart = cart
        }
    }
}

export default product;