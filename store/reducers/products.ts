import PRODUCTS from '../../data/dummy-data';
import { ProductState, ActionType } from '../../types';

const initialState: ProductState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export function productReducer(
	state = initialState,
	{ type, payload }: ActionType
) {
	switch (type) {
		// case value:
		// 	return {
		// 		...state,
		// 	};

		default:
			return state;
	}
}
