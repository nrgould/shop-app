import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import ShopStack from './navigation/ShopStack';
import { store } from './store/store';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/Colors';
import UserStack from './navigation/UserStack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import Playground from './screens/Playground';

const BottomTabs = createBottomTabNavigator();

const fetchFonts = () => {
	return Font.loadAsync({
		'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
		'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
		'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
	});
};

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(error: any) => console.log(error)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<NavigationContainer>
				<BottomTabs.Navigator
					screenOptions={{
						headerShown: false,
						tabBarInactiveTintColor: '#dbdbdb',
						tabBarActiveTintColor: Colors.primary,
						tabBarShowLabel: false,
						headerTitleStyle: {
							fontFamily: 'PoppinsBold',
							fontSize: 28,
						},
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
										size={size}
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
										size={size}
									/>
								);
							},
						}}
						component={UserStack}
						name='Edit Product'
					/>
					<BottomTabs.Screen
						options={{
							tabBarIcon: ({ color, size, focused }) => {
								return (
									<Ionicons
										name={
											focused
												? 'hammer'
												: 'hammer-outline'
										}
										color={color}
										size={size}
									/>
								);
							},
						}}
						component={Playground}
						name='Playground'
					/>
				</BottomTabs.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
