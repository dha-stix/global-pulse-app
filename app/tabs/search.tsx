import { View, Text, Pressable, Image, Dimensions, FlatList } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { fetchSearchNews } from "../../assets/fetchNews";
import { News, convertToReadableDate, generateRandomImage } from '../../assets/util';

const { width } = Dimensions.get("window");


const newsItem = ({ item }: { item: News}) => { 	
	return (
			<Link href={{pathname: "/[title]", params: {
					url: item.url,
					title: item.title,
			}} } asChild>
			<Pressable className="px-4 w-full">
				<View className="flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl p-3">
					<Image
						source={{ uri: item.urlToImage || generateRandomImage() }}
						style={{ width: width * 0.2, height: width*0.2, borderRadius: 5 }}
						resizeMode="cover"
						className="rounded-3xl mr-[1px]"
					/>

					<View className="px-3 flex-1">
						<Text style={{ fontFamily: "Medium" }} className="text-stone-500 text-sm">{item.author}</Text>
						<Text className="text-lg mb-[1px]" style={{ fontFamily: "Bold" }}>{item.title.length > 48 ? item.title.slice(0, 47) + "..." : item.title}</Text>
						<Text style={{ fontFamily: "Medium" }} className="text-stone-500 text-sm">{convertToReadableDate(item.publishedAt)}</Text>
						
					</View>
					<MaterialIcons name="keyboard-arrow-right" size={26} color="brown" />
				</View>
			</Pressable>
			</Link>
		);
}

export default function Page() {
	const [query, onChangeQuery] = useState<string>("")
	const [results, setResults] = useState<any[]>([])
	const [resultsCount, setResultsCount] = useState<number>(0)

	const handleTextChange = (text:string) => {
		onChangeQuery(text)
		if (text.length > 2) {
			fetchSearchNews(text).then((res) => {
				setResults(res.articles)
				setResultsCount(res.totalResults)
		})
		}
		
	}
	return (
		<SafeAreaView>
			<View className="px-4 "> 
				<Text className="text-3xl text-stone-500 mb-3" style={{ fontFamily: "Bold" }}>Search</Text>
				<View className="flex flex-row items-center justify-between w-full rounded-2xl bg-gray-100 border-[1px] px-3 border-stone-300">
				<FontAwesome name="search" size={24} color="gray" className="mr-2"/>
					<TextInput className="flex-1  
				rounded-xl px-4 py-4" placeholder="Search for news" style={{ fontFamily: "Medium" }} value={query} onChangeText={text => handleTextChange(text)}
					/>
				</View>
				<Text className="text-lg mt-4 mb-4" style={{ fontFamily: "Semibold" }} >Total Results: {resultsCount}</Text>

				<View>
				{ results && (
                        <FlatList data={results} renderItem=
                            {newsItem} showsVerticalScrollIndicator={false} keyExtractor={(item) => item.url} />
                    )}
			</View>
			
			</View>
			
			
		</SafeAreaView>
	);
}
