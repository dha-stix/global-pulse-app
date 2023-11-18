import { Tabs } from "expo-router";
import { FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function Page() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveBackgroundColor: "#a16207",
				tabBarActiveTintColor: "#fff",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='home' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='discover'
				options={{
					title: "Discover",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name='explore' size={24} color={color} />
					),
				}}
			/>
		
			<Tabs.Screen
				name='search'
				options={{
					title: "Search",
					tabBarIcon: ({ color }) => (
						<FontAwesome name='search' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
