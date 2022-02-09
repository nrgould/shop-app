import React from 'react';
import { FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductType } from '../types';
import ProductItem from './ProductItem';

interface Props extends FlatListProps<any> {
	data: ProductType[];
	navigation: any;
}

export default function ProductList({ data, navigation, ...props }: Props) {
	function renderProductItem(itemData: { item: ProductType }) {
		return <ProductItem data={itemData.item} navigation={navigation} />;
	}

	return (
		<FlatList
			{...props}
			keyExtractor={(product) => product.id}
			renderItem={renderProductItem}
			data={data}
		/>
	);
}
