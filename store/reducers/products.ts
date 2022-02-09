import PRODUCTS from '../../data/dummy-data';
import { ProductState, ActionType } from '../../types';
import {
	CLEAR_CURRENT_PRODUCT,
	SET_CURRENT_PRODUCT,
} from '../actions/products';

const initialState: ProductState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
	currentProduct: null,
};

export function productReducer(
	state = initialState,
	{ type, payload }: ActionType
) {
	switch (type) {
		case SET_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: payload.product,
			};
		case CLEAR_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: null,
			};
		default:
			return state;
	}
}
