import axios from "axios";

const cart = {
  namespaced: true,
  state: {
    cart: [],
    address:[],
    dataCheckout : []
  },

  getters: {
    getCart: (state) => state.cart,
    getAddress: (state) => state.address,
    getCheckout: (state) => state.dataCheckout,
  },
  actions: {
    async fetchCart({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const dataCart = await axios.post(
          `https://ecommerce.olipiskandar.com/api/v1/carts`,
          {
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        commit("SET_CART", dataCart.data.cart_items.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchAddress({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const getAddress = await axios.get(
          'https://ecommerce.olipiskandar.com/api/v1/user/addresses',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        commit("SET_ADDRESS", getAddress.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deleteCart({ commit, dispatch }, cartId) {
      try {
        const deleteCart = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/destroy",
          {
            temp_user_id: null,
            cart_id: cartId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(deleteCart.data)
        console.log(deleteCart);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch("cart/fetchCart", null, { root: true });
        alert("Produk Berhasil Di Hapus")
      }
    },
    async change_qty({ commit, dispatch }, param) {
      try {
        const changeQty = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity",
          param,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(changeQty.data)
        console.log(changeQty);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch("cart/fetchCart", null, { root: true });
      }
    },
    // checkout
    async checkoutCart(
      { commit, dispatch },
      {
        shippingAddress,
        billingAddress,
        paymentType,
        deliveryType,
        cart_item_ids,
      }
    ) {
      try {
        const response = await axios.post(
          `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
          {
            shipping_address_id: shippingAddress,
            billing_address_id: billingAddress,
            payment_type: paymentType,
            delivery_type: deliveryType,
            cart_item_ids: cart_item_ids,
            transactionId: null,
            receipt: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data.message);
        commit('SET_CHECKOUT' ,response.data)
        dispatch("fetchCart");
      } catch (error) {
          alert('error');
          console.log(error);
      }
    }
  },
  mutations: {
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_ADDRESS(state, address) {
      state.address = address;
    },
    SET_CHECKOUT(state, checkout) {
      state.dataCheckout = checkout
  },
  },
};
export default cart;
