import { products } from "../../constants/data/products"
import { productTypes } from "../types"

const {SELECTED_PRODUCT, FILTERED_PRODUCT} = productTypes
 

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type){
        case SELECTED_PRODUCT:
            return {
                ...state, 
                selected: state.products.find(
                    (product) => product.id === action.productId
                )
            }
        case FILTERED_PRODUCT:
            return {
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryId
                )
            }
        default:
            return state
    }
}

export default productsReducer