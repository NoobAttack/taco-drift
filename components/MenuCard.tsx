import { View, Text, TouchableOpacity } from 'react-native';

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
			className='bg-white rounded-xl shadow-sm p-4 mb-4 border border-gray-100'
		>
			<View className='flex-row justify-between items-center mb-2'>
				<Text className='text-lg font-bold text-slate-800'>{title}</Text>
				<Text className='text-lg font-bold text-orange-600'>{price}</Text>
			</View>
			<Text className='text-slate-500 leading-5'>{description}</Text>
		</TouchableOpacity>
	);
}
