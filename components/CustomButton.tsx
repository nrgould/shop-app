import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

interface Props {
	onPress: () => void;
	title: string;
	icon?: JSX.Element;
}

export default function CustomButton({ onPress, title, icon }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={
					icon ? { ...styles.button, ...styles.icon } : styles.button
				}>
				<Text style={styles.text}>{title}</Text>
				{icon}
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		backgroundColor: Colors.primary,
		padding: 12,
		// alignItems: 'center',
		// justifyContent: 'center',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		width: 170,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		color: '#fff',
		fontWeight: '600',
	},
	icon: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});
