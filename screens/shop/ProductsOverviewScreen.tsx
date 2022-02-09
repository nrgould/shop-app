import React, { useState } from 'react';
import { useAppSelector } from '../../Hooks/reduxHooks';
import { NavProps } from '../../types';
import ProductList from '../../components/ProductList';
import ScrollablePageHeader from '../../components/ScrollablePageHeader';
import { Animated, StyleSheet, View } from 'react-native';

const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function ProductsOverview({ navigation }: NavProps) {
	const [scrollY] = useState(new Animated.Value(0));

	const availableProducts = useAppSelector(
		(state) => state.products.availableProducts
	);

	const headerHeight = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: 'clamp',
	});

	return (
		<View style={styles.fill}>
			<ScrollablePageHeader headerHeight={headerHeight}>
				Products
			</ScrollablePageHeader>
			<View style={styles.scrollViewContent}>
				<ProductList
					scrollEventThrottle={16}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { y: scrollY } } }],
						{ useNativeDriver: false }
					)}
					renderItem={null}
					data={availableProducts}
					navigation={navigation}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	fill: {
		flex: 1,
	},
	title: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 18,
	},
	scrollViewContent: {
		// marginTop: HEADER_MAX_HEIGHT,
	},
});
