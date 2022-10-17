import { products } from "../../constants/data/products"
import { createSlice } from "@reduxjs/toolkit"


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: products,
        filteredProducts: [],
        selected: null
    },
    reducers: {
        selectedProduct: (state, action) => {
            state.selected = state.products.find((product) => product.id === action.productId)
        },
        filteredProducts:(state, action) => {
            state.filteredProducts = state.products.filter((product) => product.categoryId === action.payload.categoryId)
        },
    }
})

export const  {selectedProduct, filteredProducts} =  productsSlice.actions;

export default productsSlice.reducer

