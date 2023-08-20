import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../navigation/TabNavigator";
import Details from "../screens/Details";
import QuizPage from "../screens/QuizPage";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator options={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QuizPage"
            component={QuizPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default StackNavigation;
