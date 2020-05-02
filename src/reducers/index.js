import { combineReducers } from "redux";
import quantityReducer from './quantityReducer'
import ratingReducer from './ratingReducer';
import packagesReducer from './packagesReducer';
import totalReducer from "./totalReducer";
import relatedReducer from "./relatedReducer";
import wishlistReducer from "./wishlistReduser";

const allReducers = combineReducers ({
    quantity: quantityReducer,
    rating: ratingReducer,
    packages: packagesReducer,
    total: totalReducer,
    related: relatedReducer,
    wishlist: wishlistReducer
});

export default allReducers;