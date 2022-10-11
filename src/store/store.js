import { createStore, combineReducers } from "redux";
import {productsReducer, categoryReducer} from '../store/reducers'


const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer
});

export default createStore(rootReducer)


