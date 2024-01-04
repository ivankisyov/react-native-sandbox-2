import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

// step 2
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blog" }}>
        <Stack.Screen name="Home" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// step 3
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
