import {
	View,
	Pressable,
	ActivityIndicator,
	Dimensions,
	Text,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import { Stack, router, useLocalSearchParams } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Read() {
	const [visible, setVisible] = useState<boolean>(false);
	const params: {title: string, url: string} = useLocalSearchParams();
	const pageTitle = decodeURIComponent(decodeURIComponent(params.title));
	const pageURL = params.url || "https://www.google.com";

	return (
		<>
			<Stack.Screen options={{ headerTitle: `${pageTitle}` }} />
			<View className='pt-4 p-6 flex flex-row justify-between items-center bg-stone-200 fixed top-0'>
				<Pressable
					className='bg-stone-100 rounded-xl p-3 shadow-2xl'
					onPress={() => router.back()}
				>
					<AntDesign name='back' size={28} color='brown' />
				</Pressable>
				<Text style={{ fontFamily: "Medium" }}>Sponsored by Global Pulse </Text>
			</View>
			<WebView
				style={{ flex: 1 }}
				source={{ uri: `${pageURL}` }}
				onLoadStart={() => setVisible(true)}
				onLoadEnd={() => setVisible(false)}
			/>
			{visible && (
				<ActivityIndicator
					size={"large"}
					color={"green"}
					style={{
						position: "absolute",
						top: height / 2,
						left: width / 2,
					}}
				/>
			)}
		</>
	);
}
