import {
	View,
	Text,
	Image,
	Pressable,
	Dimensions,
	FlatList,
} from "react-native";
import { Link, router } from "expo-router";
import Carousel from "react-native-snap-carousel";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import {
	fetchBreakingNews,
	fetchRecommendedNews,
} from "../../assets/fetchNews";
import { LinearGradient } from "expo-linear-gradient";
import { convertToReadableDate, generateRandomImage } from "../../assets/util";

const { width, height } = Dimensions.get("window");
export default function Page() {
	const breakingNewsQuery = useQuery({
		queryKey: ["breakingNews"],
		queryFn: fetchBreakingNews,
	});
	const recommendedNewsQuery = useQuery({
		queryKey: ["recommendedNews"],
		queryFn: fetchRecommendedNews,
	});

	const renderBreakingNewsItem = ({ item }: any) => {
		return (
			<Link
				href={{
					pathname: "/(stack)/[title]",
					params: {
						url: item.url,
						title: encodeURIComponent(item.title),
					},
				}}
				asChild
			>
				<Pressable>
					<View className='relative'>
						<Image
							source={{ uri: item.urlToImage || generateRandomImage() }}
							style={{
								width: width * 0.8,
								height: height * 0.22,
								borderRadius: 10,
							}}
							resizeMode='cover'
							className='rounded-3xl'
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
								borderBottomLeftRadius: 24,
								borderBottomRightRadius: 24,
							}}
						/>

						<View className='absolute bottom-0 left-4 right-0 justify-end h-[80%] px-4 pb-4'>
							<Text
								className='text-xl text-white mb-2'
								style={{ fontFamily: "Bold" }}
							>
								{item.title.length > 48
									? item.title.slice(0, 47) + "..."
									: item.title}
							</Text>
							<Text
								className=' text-stone-200'
								style={{ fontFamily: "Medium" }}
							>
								{item.author}
							</Text>
						</View>
					</View>
				</Pressable>
			</Link>
		);
	};

	const renderRecommendedNewsItem = ({ item }: any) => {
		return (
			<Link
				href={{
					pathname: "/(stack)/[title]",
					params: {
						url: item.url,
						title: encodeURIComponent(item.title),
					},
				}}
				asChild
			>
				<Pressable className='px-4 w-full'>
					<View className='flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl'>
						<Image
							source={{ uri: item.urlToImage || generateRandomImage() }}
							style={{
								width: width * 0.4,
								height: width * 0.3,
								borderRadius: 5,
							}}
							resizeMode='cover'
							className='rounded-3xl mr-[1px]'
						/>

						<View className='px-3 flex-1'>
							<Text
								style={{ fontFamily: "Medium" }}
								className='text-stone-500 text-sm'
							>
								{item.author}
							</Text>
							<Text className='text-lg mb-[1px]' style={{ fontFamily: "Bold" }}>
								{item.title.length > 48
									? item.title.slice(0, 47) + "..."
									: item.title}
							</Text>
							<Text
								style={{ fontFamily: "Medium" }}
								className='text-stone-500 text-sm'
							>
								{convertToReadableDate(item.publishedAt)}
							</Text>
						</View>
					</View>
				</Pressable>
			</Link>
		);
	};
	return (
		<SafeAreaView className='flex-1'>
			<View className='flex flex-row items-center justify-between px-6 mb-3'>
				<Text
					className='text-3xl text-stone-500'
					style={{ fontFamily: "Bold" }}
				>
					Global Pulse
				</Text>
				<Pressable onPress={() => router.push("/tabs/search")}>
					<FontAwesome name='search' size={28} color='#d97706' />
				</Pressable>
			</View>

			<View className='flex flex-row items-center justify-between px-6 mb-3'>
				<Text
					className='text-xl text-stone-800'
					style={{ fontFamily: "Semibold" }}
				>
					Breaking News
				</Text>
				<Link
					href={{
						pathname: "/news",
						params: {
							category: "breaking",
						},
					}}
					asChild
				>
					<Pressable>
						<Text className='text-lg text-blue-500'>View all </Text>
					</Pressable>
				</Link>
			</View>
			<View>
				{breakingNewsQuery.data && (
					<Carousel
						data={breakingNewsQuery.data.articles}
						renderItem={renderBreakingNewsItem}
						firstItem={1}
						inactiveSlideScale={0.86}
						sliderWidth={width}
						itemWidth={width * 0.8}
						slideStyle={{ display: "flex", alignItems: "center" }}
					/>
				)}
			</View>

			<View className='flex flex-row items-center justify-between px-6 mb-3 mt-6'>
				<Text
					className='text-2xl text-stone-800'
					style={{ fontFamily: "Semibold" }}
				>
					Recommended News
				</Text>
				<Link
					href={{
						pathname: "/news",
						params: {
							category: "recommended",
						},
					}}
					asChild
				>
					<Pressable>
						<Text className='text-lg text-blue-500'>View all </Text>
					</Pressable>
				</Link>
			</View>
			<View>
				{recommendedNewsQuery.data && (
					<FlatList
						data={recommendedNewsQuery.data.articles}
						renderItem={renderRecommendedNewsItem}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index) => item.url}
					/>
				)}
			</View>

			<StatusBar style='dark' />
		</SafeAreaView>
	);
}
