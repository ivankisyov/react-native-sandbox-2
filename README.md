# Overview

This repo is just a playground which I use to learn more about React Native.

## Learning materials
- [The Complete React Native + Hooks Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)

## Create a new project with react navigation v6

1. npx create-expo-app <app name>
2. npm install @react-navigation/native
3. npx expo install react-native-screens react-native-safe-area-context
4. npm install @react-navigation/stack
5. npx expo install react-native-gesture-handler
6. npm install axios

## App.js - sample


```js
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
```