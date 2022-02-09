import { ProductType } from '../../types';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export const CLEAR_CURRENT_PRODUCT = 'CLEAR_CURRENT_PRODUCT';

export function setCurrentProduct(product: ProductType) {
	return { type: SET_CURRENT_PRODUCT, payload: { product } };
}

export function clearCurrentProduct() {
	return { type: CLEAR_CURRENT_PRODUCT };
}
