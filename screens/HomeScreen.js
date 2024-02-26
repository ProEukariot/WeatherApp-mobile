import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, TextInput } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";
import { TouchableOpacity } from "react-native";
import {
	CalendarDaysIcon,
	MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useState } from "react";
import { MapPinIcon } from "react-native-heroicons/solid";

export const HomeScreen = () => {
	const [showSearch, toggleSearch] = useState(false);
	const [locations, setLocations] = useState([1, 2, 3]);

	const handleLocation = (loc) => {
		console.log(loc);
	};

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
							justifyContent: "flex-end",
							alignItems: "center",
							borderRadius: 100,
							backgroundColor: showSearch
								? theme.bgWhite(0.2)
								: "transparent",
						}}
					>
						{showSearch ? (
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
						) : null}

						<TouchableOpacity
							onPress={() => toggleSearch(!showSearch)}
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
					{locations.length > 0 && showSearch ? (
						<View
							style={{
								position: "absolute",
								width: "100%",
								backgroundColor: "rgb(209 213 219)",
								top: 64,
								borderRadius: 24,
							}}
						>
							{locations.map((loc, index) => {
								let showBorder = index != locations.length - 1;

								return (
									<TouchableOpacity
										onPress={() => handleLocation(loc)}
										key={index}
										style={{
											flexDirection: "row",
											alignItems: "center",
											borderWidth: 0,
											padding: 12,
											paddingHorizontal: 16,
											marginBottom: 4,
											borderBottomWidth: showBorder
												? 2
												: null,
											borderBottomColor: showBorder
												? "rgb(156 163 175)"
												: null,
										}}
									>
										<MapPinIcon size={20} color={"gray"} />
										<Text
											style={{
												color: "black",
												fontSize: 18,
												lineHeight: 28,
												marginStart: 8,
											}}
										>
											London, UK
										</Text>
									</TouchableOpacity>
								);
							})}
						</View>
					) : null}
				</View>

				{/* Forecast */}

				<View
					style={{
						marginHorizontal: 16,
						display: "flex",
						justifyContent: "space-around",
						flex: 1,
						marginBottom: 8,
					}}
				>
					<Text
						style={{
							color: "white",
							textAlign: "center",
							fontSize: 24,
							lineHeight: 32,
							fontWeight: 700,
						}}
					>
						London,{" "}
						<Text
							style={{
								fontSize: 18,
								lineHeight: 28,
								fontWeight: 600,
								color: "rgb(209 213 219)",
							}}
						>
							UK
						</Text>
					</Text>

					{/* Image */}

					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<Image
							source={require("../assets/images/blue-clouds-and-yellow-sun.png")}
							style={{ width: 208, height: 208 }}
						/>
					</View>

					{/* Celcius */}

					<View style={{ marginTop: 8 }}>
						<Text
							style={{
								textAlign: "center",
								fontWeight: 700,
								color: "white",
								fontSize: 60,
								marginStart: 20,
							}}
						>
							23&#176;
						</Text>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontSize: 20,
								marginStart: 20,
								letterSpacing: 1.6,
							}}
						>
							Partly cloudy
						</Text>
					</View>

					{/* Other */}

					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginHorizontal: 62,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								marginLeft: 8,
								alignItems: "center",
							}}
						>
							<Image
								source={require("../assets/images/blue-wind.png")}
								style={{ height: 24, width: 24 }}
							/>
							<Text
								style={{
									color: "white",
									fontWeight: 600,
									fontSize: 16,
								}}
							>
								22km
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginLeft: 8,
								alignItems: "center",
							}}
						>
							<Image
								source={require("../assets/images/blue-thermometer-and-cold.png")}
								style={{ height: 24, width: 24 }}
							/>
							<Text
								style={{
									color: "white",
									fontWeight: 600,
									fontSize: 16,
								}}
							>
								23%
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginLeft: 8,
								alignItems: "center",
							}}
						>
							<Image
								source={require("../assets/images/yellow-sun.png")}
								style={{ height: 24, width: 24 }}
							/>
							<Text
								style={{
									color: "white",
									fontWeight: 600,
									fontSize: 16,
								}}
							>
								6:05 AM
							</Text>
						</View>
					</View>
				</View>

				{/* Next days forecast */}

				<View style={{ marginBottom: 8, marginTop: 12 }}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginHorizontal: 20,
							marginLeft: 8,
						}}
					>
						<CalendarDaysIcon size={22} color={"white"} />
						<Text style={{ color: "white", fontSize: 16 }}>
							Daily forecast
						</Text>
					</View>
					<ScrollView
						horizontal
						contentContainerStyle={{ paddingHorizontal: 15 }}
						showsHorizontalScrollIndicator={false}
					>
						<View
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: 96,
								borderRadius: 24,
								paddingVertical: 12,
								marginTop: 4,
								marginRight: 16,
								backgroundColor: theme.bgWhite(0.15),
							}}
						>
							<Image
								source={require("../assets/images/lightning-and-blue-rain-cloud.png")}
								style={{ height: 44, width: 44 }}
							/>
							<Text style={{ color: "white" }}>Monday</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: 600,
								}}
							>
								13&#176;
							</Text>
						</View>
						<View
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: 96,
								borderRadius: 24,
								paddingVertical: 12,
								marginTop: 4,
								marginRight: 16,
								backgroundColor: theme.bgWhite(0.15),
							}}
						>
							<Image
								source={require("../assets/images/lightning-and-blue-rain-cloud.png")}
								style={{ height: 44, width: 44 }}
							/>
							<Text style={{ color: "white" }}>Tuesday</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: 600,
								}}
							>
								13&#176;
							</Text>
						</View>
						<View
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: 96,
								borderRadius: 24,
								paddingVertical: 12,
								marginTop: 4,
								marginRight: 16,
								backgroundColor: theme.bgWhite(0.15),
							}}
						>
							<Image
								source={require("../assets/images/lightning-and-blue-rain-cloud.png")}
								style={{ height: 44, width: 44 }}
							/>
							<Text style={{ color: "white" }}>Monday</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: 600,
								}}
							>
								13&#176;
							</Text>
						</View>
						<View
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: 96,
								borderRadius: 24,
								paddingVertical: 12,
								marginTop: 4,
								marginRight: 16,
								backgroundColor: theme.bgWhite(0.15),
							}}
						>
							<Image
								source={require("../assets/images/lightning-and-blue-rain-cloud.png")}
								style={{ height: 44, width: 44 }}
							/>
							<Text style={{ color: "white" }}>Monday</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: 600,
								}}
							>
								13&#176;
							</Text>
						</View>
						<View
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: 96,
								borderRadius: 24,
								paddingVertical: 12,
								marginTop: 4,
								marginRight: 16,
								backgroundColor: theme.bgWhite(0.15),
							}}
						>
							<Image
								source={require("../assets/images/lightning-and-blue-rain-cloud.png")}
								style={{ height: 44, width: 44 }}
							/>
							<Text style={{ color: "white" }}>Monday</Text>
							<Text
								style={{
									color: "white",
									fontSize: 20,
									fontWeight: 600,
								}}
							>
								13&#176;
							</Text>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</View>
	);
};
