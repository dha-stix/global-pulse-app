import { ImageBackground, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  const router = useRouter();
  return (
   	<ImageBackground
				source={require("../assets/images/background.jpg")}
				className='flex-1 items-center justify-center pb-10 bg-gradient-to-bl from-gray-200 to-gray-900'
			>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.9)"]}
					style={{
						position: "absolute",
						bottom: 0,
						width: "100%",
						height: "100%",
					}}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
				/>
				<View className='absolute bottom-14 flex flex-col items-center justify-center w-full  bg-gradient-to-t from-gray-900 px-4'>
					<Text
						className='text-4xl text-white font text-center mb-4'
						style={{ fontFamily: "Bold" }}
					>
						Breaking Boundaries, Breaking News
					</Text>

					<Text
						className='text-gray-300 text-center text-xl mb-6'
						style={{ fontFamily: "Medium" }}
					>
						Explore the world through our lens. Your passport to a connected and
						informed world, right at your fingertips.
					</Text>
					<Pressable
						onPress={() => router.push("/tabs/home")}
						className='bg-stone-700 rounded-full p-4 w-full items-center justify-center shadow-lg'
					>
						<Text
							className='text-white text-2xl'
							style={{ fontFamily: "Medium" }}
						>
							Get Started
						</Text>
					</Pressable>
				</View>
				<StatusBar style='light' />
			</ImageBackground>
  );
}

