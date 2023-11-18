import {
	View,
	Text,
	FlatList,
	Image,
	Pressable,
	Dimensions,
} from "react-native";
import {
	fetchRecommendedNews,
	fetchBreakingNews,
	fetchDiscoverNews,
} from "../../assets/fetchNews";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { News, convertToReadableDate, generateRandomImage } from "../../assets/util";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams, Link, Stack } from "expo-router";

const { width } = Dimensions.get("window");

const newsItem = ({ item }: { item: News }) => {
	return (
		<Link
			href={{
				pathname: "/[title]",
				params: {
					url: item.url,
					title: item.title,
				},
			}}
			asChild
		>
			<Pressable className='px-4 w-full'>
				<View className='flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl p-3'>
					<Image
						source={{ uri: item.urlToImage || generateRandomImage() }}
						style={{ width: width * 0.2, height: width * 0.2, borderRadius: 5 }}
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
					<MaterialIcons name='keyboard-arrow-right' size={26} color='brown' />
				</View>
			</Pressable>
		</Link>
	);
};

export default function Page() {
	const { category }: {category: string} = useLocalSearchParams();

	if (category === "breaking") {
		const breakingNewsQuery = useQuery({
			queryKey: ["breakingNews"],
			queryFn: fetchBreakingNews,
		});
		return <DisplayNews news={breakingNewsQuery} title='Breaking News' />;

	} else if (category === "recommended") {
		const recommendedNewsQuery = useQuery({
			queryKey: ["recommendedNews"],
			queryFn: fetchRecommendedNews,
		});
		return <DisplayNews news={recommendedNewsQuery} title='Recommended News' />;
		
	} else {
		const discoverNewsQuery = useQuery({
			queryKey: ["discoverNews", category],
			queryFn: () => fetchDiscoverNews(category),
		});
		return (
			<DisplayNews
				news={discoverNewsQuery}
				title={`${category[0].toUpperCase() + category.slice(1)} News`}
			/>
		);
	}
}

const DisplayNews = ({ news, title }: {news: any, title: string}) => {
	return (
		<View className='flex-1'>
			<Stack.Screen
				options={{
					headerTitle: title,
					headerLeft: () => (
						<Pressable className='shadow-2xl' onPress={() => router.back()}>
							<AntDesign name='back' size={28} color='brown' />
						</Pressable>
					),
				}}
			/>
			<View>
				{news.data && (
					<FlatList
						data={news.data.articles}
						renderItem={newsItem}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item) => item.url}
					/>
				)}
			</View>
		</View>
	);
};
