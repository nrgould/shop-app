import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import ShopStack from './navigation/ShopStack';
import { store } from './store/store';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/Colors';
import UserStack from './navigation/UserStack';

const BottomTabs = createBottomTabNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<BottomTabs.Navigator
					screenOptions={{
						headerShown: false,
						tabBarInactiveTintColor: '#dbdbdb',
						tabBarActiveTintColor: Colors.primary,
						tabBarShowLabel: false,
					}}>
					<BottomTabs.Screen
						options={{
							tabBarIcon: ({ color, size, focused }) => {
								return (
									<Ionicons
										name={
											focused
												? 'pricetag'
												: 'pricetag-outline'
										}
										color={color}
										size={28}
									/>
								);
							},
						}}
						component={ShopStack}
						name='Products'
					/>
					<BottomTabs.Screen
						options={{
							tabBarIcon: ({ color, size, focused }) => {
								return (
									<Ionicons
										name={
											focused
												? 'person'
												: 'person-outline'
										}
										color={color}
										size={28}
									/>
								);
							},
						}}
						component={UserStack}
						name='Edit Product'
					/>
				</BottomTabs.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
