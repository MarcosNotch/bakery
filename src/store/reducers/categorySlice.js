import { categories } from "../../constants/data/categories";
import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: categories,
        selected: null
    },
    reducers: {
        selectedCategory: (state, action) => {
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.payload.categoryId
            )
            state.selected =  state.categories[indexCategory]
        }
    }
})

export const  {selectedCategory} =  categorySlice.actions;

export default categorySlice.reducer