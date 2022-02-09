import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverview from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const ProductsStackNavigator = createStackNavigator();

export default function ShopStack() {
	return (
		<ProductsStackNavigator.Navigator
			screenOptions={{
				headerTintColor: Colors.primary,
				headerShown: false,
			}}>
			<ProductsStackNavigator.Screen
				name='ProductsOverview'
				component={ProductsOverview}
				options={{ title: 'Products' }}
			/>
			<ProductsStackNavigator.Screen
				name='ProductDetails'
				component={ProductDetailScreen}
				// options={({ route }: any) => ({
				// 	title: route.params.product.title,
				// 	headerShown: false,
				// })}
			/>
		</ProductsStackNavigator.Navigator>
	);
}
