import { createStore } from 'vuex'
import axios from 'axios'

import auth from './modules/auth';
import product from './modules/product';
import brand from './modules/brand';
import category from './modules/category';
import user from './modules/user';
import cart from './modules/cart';
import order from './modules/order';

export default createStore({
    modules: {
        auth,
        product,
        brand, 
        category,
        user,
        cart,
        order
    }
});