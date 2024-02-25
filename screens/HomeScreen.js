import { StatusBar } from "expo-status-bar";
import { Image, TextInput } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";
import { TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export const HomeScreen = () => {
	return (
		<View style={{ position: "relative", flex: 1 }}>
			<StatusBar style="light" />
			<Image
				blurRadius={5}
				source={require("../assets/images/bg.png")}
				style={{ position: "absolute", height: "100%", width: "100%" }}
			/>
			<SafeAreaView style={{ flex: 1, display: "flex" }}>
				<View
					style={{
						height: "7%",
						marginHorizontal: 16,
						position: "relative",
						zIndex: 50,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "end",
							alignItems: "center",
							borderRadius: 100,
							backgroundColor: theme.bgWhite(0.2),
						}}
					>
						<TextInput
							placeholder="Search city"
							placeholderTextColor={"lightgrey"}
							style={{
								height: 40,
								paddingLeft: 24,
								paddingBottom: 4,
								flex: 1,
								fontSize: 16,
								lineHeight: 24,
								color: "rgb(255 255 255)",
							}}
						/>
						<TouchableOpacity
							style={{
								backgroundColor: theme.bgWhite(0.3),
								borderRadius: 100,
								padding: 12,
								margin: 4,
							}}
						>
							<MagnifyingGlassIcon size={25} color={"white"} />
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};
