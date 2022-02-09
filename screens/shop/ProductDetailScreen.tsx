import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React, { useEffect } from 'react';
import { NavProps, ProductType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';
import { clearCurrentProduct } from '../../store/actions/products';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import { addToCart } from '../../store/actions/cart';
import { Ionicons } from '@expo/vector-icons';

interface Props extends NavProps {
	product: ProductType;
}

export default function ProductDetailScreen({ navigation }: Props) {
	const dispatch = useAppDispatch();
	const product = useAppSelector((state) => state.products.currentProduct);

	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: product.title,
		});
		return () => {
			dispatch(clearCurrentProduct());
		};
	}, [dispatch, product]);

	return (
		<ScrollView style={styles.screen}>
			<ImageBackground
				resizeMode='cover'
				style={styles.imageBackground}
				source={{ uri: product?.imageUrl }}>
				<View style={styles.imageDetails}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons name='arrow-back' color='black' size={32} />
					</TouchableOpacity>
				</View>
			</ImageBackground>

			<View style={styles.detailsContainer}>
				<View style={styles.productMainDetails}>
					<Text style={styles.title}>{product?.title}</Text>
					<Text style={styles.price}>{'$' + product?.price}</Text>
				</View>
				<CustomButton
					title='Add To Cart'
					onPress={() => dispatch(addToCart(product))}
					icon={
						<Ionicons name='cart-outline' color='white' size={25} />
					}
				/>
				<Text style={styles.description}>{product?.description}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: { minHeight: '100%', backgroundColor: 'white' },
	detailsContainer: {
		padding: 12,
		backgroundColor: 'white',
	},
	imageBackground: {
		width: '100%',
		height: Dimensions.get('window').height * 0.4,
		backgroundColor: 'black',
	},
	imageDetails: {
		paddingLeft: 24,
		paddingTop: 48,
	},
	productMainDetails: {
		padding: 12,
	},
	title: {
		fontSize: 18,
		marginVertical: 4,
		zIndex: 10,
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
