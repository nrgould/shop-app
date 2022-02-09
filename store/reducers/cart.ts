import { CartItem } from '../../models/cart-item';
import { ActionType, CartState, ProductType } from '../../types';
import { ADD_TO_CART } from '../actions/cart';

const initialState: CartState = {
	items: {},
	totalAmount: 0,
};

export function cartReducer(
	state = initialState,
	{ type, payload }: ActionType
) {
	switch (type) {
		case ADD_TO_CART:
			const { id, price, title }: ProductType = payload.product;

			const itemExisted = !!state.items[id];
			const sum = itemExisted
				? state.items[id].sum + price.toFixed(2)
				: price.toFixed(2);
			const quantity = itemExisted ? state.items[id].quantity + 1 : 1;

			const newCartItem = new CartItem(
				quantity,
				price,
				title,
				sum as number
			);
			console.log(newCartItem);
			return {
				...state,
				items: { ...state.items, [id]: newCartItem },
			};

		default:
			return state;
	}
}
