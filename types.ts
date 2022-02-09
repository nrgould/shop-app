import { rootReducer } from './store/reducers/rootReducer';
import { store } from './store/store';

export type ProductType = {
	id: string;
	ownerId: string;
	title: string;
	imageUrl: string;
	description: string;
	price: number;
};

export type CartType = {
	quantity: number;
	productPrice: number;
	productTitle: string;
	sum: number;
};

export type NavProps = {
	navigation?: any;
	route?: any;
};

export type ProductState = {
	availableProducts: ProductType[];
	userProducts: ProductType[];
	currentProduct: ProductType | null;
};

export type CartState = {
	items: {
		[key: string]: CartType;
	};
	totalAmount: number;
};

export type ActionType = {
	type: string;
	payload?: any;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
