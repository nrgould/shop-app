import { ProductType } from '../../types';

export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(product: ProductType) {
	return { type: ADD_TO_CART, payload: { product } };
}
