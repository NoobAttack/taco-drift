import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuCardProps {
	title: string;
	price: string;
	description: string;
	onPress?: () => void;
}

export default function MenuCard({
	title,
	price,
	description,
	onPress,
}: MenuCardProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.8}
			style={styles.card}
		>
			<View style={styles.cardContent}>
				<Text style={styles.cardTitle}>{title}</Text>
				<Text style={styles.cardPrice}>{price}</Text>
			</View>
			<Text style={styles.cardDescription}>{description}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#ffffff',
		borderRadius: 12,
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: '#f3f4f6',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 2,
	},
	cardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1e293b',
	},
	cardPrice: {
		fontSize: 16,
		fontWeight: '700',
		color: '#f97316',
	},
	cardDescription: {
		fontSize: 14,
		color: '#64748b',
		lineHeight: 20,
	},
});
