import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
	const promoCode = Math.floor(Math.random() * 10000000000)
		.toString()
		.padStart(10, '0');

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Special Offer! 🎉</Text>
				<Text style={styles.subtitle}>$5 OFF Your Order</Text>

				<View style={styles.codeBox}>
					<Text style={styles.codeLabel}>Your Promo Code:</Text>
					<Text style={styles.code}>{promoCode}</Text>
					<Text style={styles.restriction}>1 Time Use Only</Text>
				</View>

				<Text style={styles.description}>
					Use this code at checkout to save $5 on your next Taco Drift order!
				</Text>

				<Link href='/' dismissTo style={styles.link}>
					<Text style={styles.linkText}>Close</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#f8fafc',
	},
	content: {
		width: '100%',
		maxWidth: 400,
		alignItems: 'center',
	},
	title: {
		fontSize: 28,
		fontWeight: '800',
		color: '#1e293b',
		marginBottom: 8,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 24,
		fontWeight: '700',
		color: '#f97316',
		marginBottom: 24,
		textAlign: 'center',
	},
	codeBox: {
		width: '100%',
		backgroundColor: '#ffffff',
		borderWidth: 2,
		borderColor: '#f97316',
		borderRadius: 12,
		padding: 20,
		marginBottom: 20,
		alignItems: 'center',
	},
	codeLabel: {
		fontSize: 14,
		color: '#64748b',
		marginBottom: 8,
		fontWeight: '600',
	},
	code: {
		fontSize: 28,
		fontWeight: '800',
		color: '#f97316',
		letterSpacing: 2,
		marginBottom: 8,
	},
	restriction: {
		fontSize: 12,
		color: '#ef4444',
		fontWeight: '700',
		marginTop: 8,
	},
	description: {
		fontSize: 14,
		color: '#475569',
		textAlign: 'center',
		marginBottom: 24,
		lineHeight: 20,
	},
	link: {
		backgroundColor: '#f97316',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
	},
	linkText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '600',
	},
});
