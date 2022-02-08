import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ProductType } from '../types';
import ProductItem from './ProductItem';

interface Props {
	data: ProductType[];
	navigation: any;
}

export default function ProductList({ data, navigation }: Props) {
	function renderProductItem(itemData: { item: ProductType }) {
		return <ProductItem data={itemData.item} navigation={navigation} />;
	}

	return (
		<FlatList
			keyExtractor={(product) => product.id}
			renderItem={renderProductItem}
			data={data}
		/>
	);
}
