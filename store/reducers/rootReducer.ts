import { combineReducers } from 'redux';
import { productReducer } from './products';

export const rootReducer = combineReducers({
	products: productReducer,
});
