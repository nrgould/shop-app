import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductsScreen from '../screens/user/EditProductsScreen';

const UserStackNavigator = createStackNavigator();

export default function UserStack() {
	return (
		<UserStackNavigator.Navigator screenOptions={{ headerShown: false }}>
			<UserStackNavigator.Screen
				name='UserProducts'
				component={UserProductsScreen}
				options={{ title: 'My Products' }}
			/>
			<UserStackNavigator.Screen
				name='EditProduct'
				component={EditProductsScreen}
				options={{ title: 'Edit Product' }}
			/>
		</UserStackNavigator.Navigator>
	);
}
