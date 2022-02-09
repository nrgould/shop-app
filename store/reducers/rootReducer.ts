import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { productReducer } from './products';

export const rootReducer = combineReducers({
	products: productReducer,
	cart: cartReducer,
});
