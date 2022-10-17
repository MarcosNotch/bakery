import {productsSlice, categorySlice} from '../store/reducers'
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
    reducer: {
        products: productsSlice,
        category: categorySlice
    }
})
