import { CartType } from '../types';

export class CartItem implements CartType {
	quantity: number;
	productPrice: number;
	productTitle: string;
	sum: number;
	constructor(
		quantity: number,
		productPrice: number,
		productTitle: string,
		sum: number
	) {
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.productTitle = productTitle;
		this.sum = sum;
	}
}
