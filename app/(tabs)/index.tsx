import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView className='flex-1 bg-slate-50'>
			<ScrollView className='p-6'>
				{/* Hero Section */}
				<View className='mb-8 items-center'>
					<Text className='text-4xl font-extrabold text-slate-800 text-center mb-2'>
						Taco Drift
					</Text>
					<Text className='text-orange-600 font-semibold text-lg uppercase tracking-widest mb-4'>
						Fast Food. Slow Cooked.
					</Text>
					<Text className='text-slate-600 text-center leading-6'>
						Welcome to the city&apos;s favorite fictional food truck. We serve
						street-style tacos with a modern twist. Find us drifting through
						downtown every weekday!
					</Text>
				</View>

				{/* Featured Items List */}
				<View>
					<Text className='text-2xl font-bold text-slate-800 mb-4'>
						🔥 Featured Today
					</Text>

					<View className='bg-white p-4 rounded-lg mb-2 shadow-sm'>
						<Text className='font-bold text-lg text-slate-700'>
							The Drifter
						</Text>
						<Text className='text-slate-500'>
							Slow-roasted pork with pineapple salsa.
						</Text>
					</View>

					<View className='bg-white p-4 rounded-lg mb-2 shadow-sm'>
						<Text className='font-bold text-lg text-slate-700'>
							Spicy Asada
						</Text>
						<Text className='text-slate-500'>
							Marinated steak with jalapeño crema.
						</Text>
					</View>

					<View className='bg-white p-4 rounded-lg mb-2 shadow-sm'>
						<Text className='font-bold text-lg text-slate-700'>
							Veggie Velocity
						</Text>
						<Text className='text-slate-500'>
							Roasted cauliflower and black beans.
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
