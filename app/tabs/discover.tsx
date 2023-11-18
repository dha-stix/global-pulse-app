import {
	View,
	Text,
	TextInput,
	FlatList,
	Pressable,
	Image,
	Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories, categories } from "../../assets/util";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const renderItem = ({ item }: { item: Categories }) => {
	return (
		<Link
			href={{
				pathname: "/news",
				params: {
					category: item.id,
				},
			}}
			asChild
		>
			<Pressable>
				<View className='relative m-[7px]'>
					<Image
						source={{ uri: item.image_url }}
						style={{
							width: width * 0.47,
							height: width * 0.45,
							borderRadius: 10,
						}}
						resizeMode='cover'
						className='rounded-xl'
					/>
					<LinearGradient
						colors={["transparent", "rgba(0,0,0,0.9)"]}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0, y: 1 }}
						style={{
							position: "absolute",
							bottom: 0,
							width: "100%",
							height: "100%",
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
						}}
					/>
					<View className='absolute bottom-0 left-4 right-0 justify-end h-[80%] px-4 pb-4'>
						<Text
							className='text-xl text-white mb-2'
							style={{ fontFamily: "Bold" }}
						>
							{item.name}
						</Text>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};

export default function Page() {
	return (
		<SafeAreaView className='flex-1'>
			<View className='flex px-6 mb-2'>
				<Text
					className='flex text-3xl text-stone-500'
					style={{ fontFamily: "Bold" }}
				>
					Discover
				</Text>
				<Text
					className='opacity-70 text-base'
					style={{ fontFamily: "Regular" }}
				>
					The world from your palm
				</Text>
			</View>
			<View className='flex flex-row items-center justify-between mx-auto w-[95%] rounded-3xl bg-gray-100 border-[1px] px-3 border-stone-300'>
				<FontAwesome name='search' size={24} color='gray' className='mr-2' />
				<TextInput
					className='flex-1  rounded-xl px-4 py-4'
					placeholder='Search for news'
					onPressIn={() => router.push("/tabs/search")}
					style={{ fontFamily: "Medium" }}
				/>
			</View>

			<View className='rounded-2xl shadow-xl'>
				<FlatList
					data={categories}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.id}
					numColumns={2}
					contentContainerStyle={{
						justifyContent: "space-between",
						alignItems: "center",
						padding: 10,
						width: "100%",
					}}
				/>
			</View>
		</SafeAreaView>
	);
}
