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

export type NavProps = {
	navigation?: any;
	route?: any;
};

export type ProductState = {
	availableProducts: ProductType[];
	userProducts: ProductType[];
};

export type ActionType = {
	type: string;
	payload: any;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
