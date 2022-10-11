import { productTypes } from '../types'

const {SELECTED_PRODUCT, FILTERED_PRODUCT} = productTypes


export const selectedProduct = (id) => ({
    type: SELECTED_PRODUCT,
    productId: id
})

export const filteredProduct = (id) => ({
    type: FILTERED_PRODUCT,
    categoryId: id
})