import { categories } from "../../constants/data/categories";
import { categoryTypes } from "../types";

const initialState = {
    categories: categories,
    selected: null
}

const { SELECTED_CATEGORY} = categoryTypes

const categoryReducer = (state = initialState, action) => {
   switch (action.type){
    case SELECTED_CATEGORY:
        const indexCategory = state.category.categories.findIndex(
            (category) => category.id = action.categoryId
        )
        return {
            ...state, selected: state.categories[indexCategory]
        }
   }
}

export default categoryReducer