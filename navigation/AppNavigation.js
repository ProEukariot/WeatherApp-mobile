import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/HomeScreen";

const {
	createNativeStackNavigator,
} = require("@react-navigation/native-stack");

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
