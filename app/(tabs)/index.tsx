import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* Hero Section */}
				<View style={styles.heroSection}>
					<Text style={styles.title}>Taco Drift</Text>
					<Text style={styles.tagline}>Fast Food. Slow Cooked.</Text>
					<Text style={styles.description}>
						Welcome to the city&apos;s favorite fictional food truck. We serve
						street-style tacos with a modern twist. Find us drifting through
						downtown every weekday!
					</Text>
				</View>

				{/* Featured Items List */}
				<View>
					<Text style={styles.sectionTitle}>🔥 Featured Today</Text>

					<View style={styles.itemCard}>
						<Text style={styles.itemTitle}>The Drifter</Text>
						<Text style={styles.itemDescription}>
							Slow-roasted pork with pineapple salsa.
						</Text>
					</View>

					<View style={styles.itemCard}>
						<Text style={styles.itemTitle}>Spicy Asada</Text>
						<Text style={styles.itemDescription}>
							Marinated steak with jalapeño crema.
						</Text>
					</View>

					<View style={styles.itemCard}>
						<Text style={styles.itemTitle}>Veggie Velocity</Text>
						<Text style={styles.itemDescription}>
							Roasted cauliflower and black beans.
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
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
	heroSection: {
		marginBottom: 32,
		alignItems: 'center',
	},
	title: {
		fontSize: 36,
		fontWeight: '800',
		color: '#1e293b',
		marginBottom: 8,
		textAlign: 'center',
	},
	tagline: {
		fontSize: 14,
		fontWeight: '600',
		color: '#f97316',
		marginBottom: 16,
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
	description: {
		fontSize: 16,
		color: '#475569',
		textAlign: 'center',
		lineHeight: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '700',
		color: '#1e293b',
		marginBottom: 16,
	},
	itemCard: {
		backgroundColor: '#ffffff',
		padding: 16,
		marginBottom: 8,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 2,
	},
	itemTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#334155',
		marginBottom: 4,
	},
	itemDescription: {
		fontSize: 14,
		color: '#64748b',
	},
});
