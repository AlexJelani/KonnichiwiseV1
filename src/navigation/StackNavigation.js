import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../navigation/TabNavigator"; // Import your TabNavigator
import Details from "../screens/Details";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainTabNavigator"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="MainTabNavigator"
            component={TabNavigator}
          />
          <Stack.Screen
            name="Details"
            component={Details}
          />
          <Stack.Screen
            name="QuizWelcome"
            component={TabNavigator}
          />
          <Stack.Screen
            name="QuizPage"
            component={TabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default StackNavigation;
