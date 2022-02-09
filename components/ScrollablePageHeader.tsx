import { Animated, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

interface Props {
	icons?: JSX.Element | JSX.Element[];
	children: string;
	headerHeight: Animated.AnimatedInterpolation;
}

export default function PageHeader({ children, headerHeight }: Props) {
	return (
		<Animated.View style={[styles.header, { height: headerHeight }]}>
			<Text style={styles.title}>{children}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'poppins-bold',
		color: Colors.primary,
		fontSize: 30,
		marginBottom: 8,
		paddingHorizontal: 12,
	},
	container: {
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 16,
		paddingBottom: 8,
		backgroundColor: 'transparent',
	},
	header: {
		// position: 'absolute',
		// top: 0,
		// left: 0,
		// right: 0,
		// backgroundColor: '#03A9F4',
		backgroundColor: 'transparent',
		overflow: 'hidden',
		justifyContent: 'flex-end',
	},
	bar: {
		marginTop: 28,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
