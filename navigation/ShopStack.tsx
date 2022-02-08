import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverview from '../screens/shop/ProductsOverview';

const ProductsStackNavigator = createStackNavigator();

export default function ShopStack() {
	return (
		<ProductsStackNavigator.Navigator screenOptions={{}}>
			<ProductsStackNavigator.Screen
				name='ProductsOverview'
				component={ProductsOverview}
				options={{ title: 'Products Overview' }}
			/>
		</ProductsStackNavigator.Navigator>
	);
}
