import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 20;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function Playground() {
	const [scrollY, setScrollY] = useState(new Animated.Value(0));

	function _renderScrollViewContent() {
		const data = Array.from({ length: 30 });
		return (
			<View style={styles.scrollViewContent}>
				{data.map((_, i) => (
					<View key={i} style={styles.row}>
						<Text>{i}</Text>
					</View>
				))}
			</View>
		);
	}

	const headerHeight = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: 'clamp',
	});

	return (
		<View style={styles.fill}>
			<ScrollView
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false }
				)}
				style={styles.fill}>
				{_renderScrollViewContent}
			</ScrollView>
			<Animated.View style={[styles.header, { height: headerHeight }]}>
				<View style={styles.bar}>
					<Text style={styles.title}>Title</Text>
				</View>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	fill: {
		flex: 1,
	},
	row: {
		height: 40,
		margin: 16,
		backgroundColor: '#D3D3D3',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: '#03A9F4',
		overflow: 'hidden',
	},
	bar: {
		marginTop: 28,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		backgroundColor: 'transparent',
		color: 'white',
		fontSize: 18,
	},
	scrollViewContent: {
		marginTop: HEADER_MAX_HEIGHT,
	},
});
