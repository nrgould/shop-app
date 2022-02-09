import {
	Button,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React from 'react';
import { ProductType } from '../types';
import Colors from '../constants/Colors';
import { useAppDispatch } from '../Hooks/reduxHooks';
import { setCurrentProduct } from '../store/actions/products';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
	data: ProductType;
	navigation: any;
}

export default function ProductItem({ data, navigation }: Props) {
	const { title, imageUrl, description, price } = data;

	function handleNavigateToDetails() {
		dispatch(setCurrentProduct(data));
		navigation.navigate('ProductDetails');
	}

	const dispatch = useAppDispatch();
	return (
		<TouchableOpacity onPress={handleNavigateToDetails}>
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: imageUrl }} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.price}>${price.toFixed(2)}</Text>
					<Text style={styles.description} numberOfLines={2}>
						{description}
					</Text>
				</View>
				<View style={styles.buttonGroup}>
					<Button
						color={Colors.primary}
						title='View Details'
						onPress={handleNavigateToDetails}
					/>
					<Button
						color={Colors.primary}
						title='Add To Cart'
						onPress={() => console.log('Go to card')}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		flex: 1,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 16,
		backgroundColor: 'white',
		margin: 20,
		height: Dimensions.get('window').height / 2,
		overflow: 'hidden',
	},
	detailsContainer: {
		// padding: 8,
		paddingHorizontal: 16,
		height: '20%',
	},
	image: {
		height: '60%',
		width: '100%',
		marginBottom: 8,
	},
	buttonGroup: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		paddingHorizontal: 18,
		height: '15%',
	},
	title: {
		fontSize: 18,
		marginVertical: 4,
	},
	price: {
		fontSize: 14,
		color: '#888',
	},
	description: {
		marginVertical: 4,
		fontSize: 16,
		color: '#858585',
	},
});
