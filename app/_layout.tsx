import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import 'react-native-reanimated';
import '../globals.css';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
	anchor: '(tabs)',
};

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack
				screenOptions={{
					headerStyle: { backgroundColor: '#f97316' },
					headerTintColor: '#fff',
					headerTitleStyle: { fontWeight: 'bold' },
					headerTitle: () => (
						<View className='flex-row items-center'>
							<Text className='text-white font-bold text-xl'>
								🌮 Taco Drift
							</Text>
						</View>
					),
				}}
			>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen
					name='modal'
					options={{ presentation: 'modal', title: 'Modal' }}
				/>
			</Stack>
			<StatusBar style='auto' />
		</ThemeProvider>
	);
}
