import { View, Text, ScrollView } from 'react-native';
import MenuCard from '@/components/MenuCard';

export default function MenuScreen() {
	return (
		<View className='flex-1 bg-slate-50'>
			<ScrollView className='p-6'>
				{/* Header Section */}
				<View className='mb-6 border-b border-gray-200 pb-4'>
					<Text className='text-3xl font-bold text-slate-800'>Our Menu</Text>
					<Text className='text-slate-500 mt-1'>
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
				<View className='mt-6 bg-slate-800 p-6 rounded-xl'>
					<Text className='text-white font-bold text-xl mb-2'>Find Us</Text>
					<Text className='text-gray-300'>
						📍 123 Food Truck Alley, Downtown
					</Text>
					<Text className='text-gray-300 mt-1'>
						🕒 Mon-Fri: 11:00 AM - 8:00 PM
					</Text>
				</View>

				<View className='mt-8 mb-10' />
			</ScrollView>
		</View>
	);
}
