import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
        <Stack.Screen name="Home" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
