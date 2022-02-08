import { StyleSheet } from 'react-native';
import React from 'react';
import { useAppSelector } from '../../Hooks/reduxHooks';
import { NavProps } from '../../types';
import ProductList from '../../components/ProductList';

export default function ProductsOverview({ navigation }: NavProps) {
	const availableProducts = useAppSelector(
		(state) => state.products.availableProducts
	);

	return <ProductList data={availableProducts} navigation={navigation} />;
}
