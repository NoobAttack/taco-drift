import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MenuCard from '@/components/MenuCard';

export default function MenuScreen() {
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* Header Section */}
				<View style={styles.header}>
					<Text style={styles.headerTitle}>Our Menu</Text>
					<Text style={styles.headerSubtitle}>
						Fresh ingredients, made to order.
					</Text>
				</View>

				{/* Menu Items */}
				<MenuCard
					title='The Drifter'
					price='$4.50'
					description='12-hour slow roasted pork shoulder, pineapple pico de gallo, cilantro.'
				/>
				<MenuCard
					title='Spicy Asada'
					price='$5.00'
					description='Carne asada marinated in lime and chili, topped with jalapeño crema.'
				/>
				<MenuCard
					title='Baja Fish'
					price='$5.50'
					description='Tempura battered cod, purple cabbage slaw, chipotle mayo.'
				/>
				<MenuCard
					title='Veggie Velocity'
					price='$4.00'
					description='Roasted cauliflower, black bean puree, pickled onions, cotija cheese.'
				/>
				{/* Truck Info Section */}
				<View style={styles.infoSection}>
					<Text style={styles.infoTitle}>Find Us</Text>
					<Text style={styles.infoText}>
						📍 123 Food Truck Alley, Downtown
					</Text>
					<Text style={styles.infoText}>
						🕒 Mon-Fri: 11:00 AM - 8:00 PM
					</Text>
				</View>

				<View style={{ height: 40 }} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8fafc',
	},
	scrollContent: {
		padding: 24,
		paddingBottom: 40,
	},
	header: {
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#e2e8f0',
		paddingBottom: 16,
	},
	headerTitle: {
		fontSize: 28,
		fontWeight: '700',
		color: '#1e293b',
	},
	headerSubtitle: {
		fontSize: 14,
		color: '#64748b',
		marginTop: 8,
	},
	infoSection: {
		marginTop: 24,
		backgroundColor: '#1e293b',
		padding: 24,
		borderRadius: 12,
	},
	infoTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#ffffff',
		marginBottom: 8,
	},
	infoText: {
		fontSize: 14,
		color: '#d1d5db',
		marginBottom: 8,
	},
});
