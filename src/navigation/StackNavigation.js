import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import * as Animatable from 'react-native-animatable';

import Home from "../screens/Home";
import Details from "../screens/Details";
import QuizPage from "../screens/QuizPage";
import QuizWelcome from "../screens/QuizWelcome";
import icons from "../constants/icons";
//TODO Take off the QuizWelcome Header


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const QuizStack = createNativeStackNavigator(); // Create a stack navigator for the Quiz tab

// Define QuizStackScreen here to set initialRouteName to "QuizWelcome"
const QuizStackScreen = () => {
  return (
    <QuizStack.Navigator initialRouteName="QuizWelcome">
      <QuizStack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{ headerShown: true }} // Show header for QuizPage
      />
      <QuizStack.Screen
        name="QuizWelcome"
        component={QuizWelcome}
        options={{ headerShown: false }} // Hide header for QuizWelcome
      />
    </QuizStack.Navigator>
  );
};

const TabNavigator = () => {
  const tabBarIcon = (icon, focused, iconSize) => (
    <Animatable.View
      animation={focused ? "zoomIn" : undefined}
      duration={300}
    >
      <Image
        source={icon}
        style={{
          width: iconSize,
          height: iconSize,
          tintColor: focused ? "tomato" : "black",
        }}
      />
    </Animatable.View>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return tabBarIcon(icons.Home, focused, 60); // Home icon size
          } else if (route.name === "Quiz") {
            return tabBarIcon(icons.Quiz, focused, 35); // Adjust the Quiz icon size
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Quiz" component={QuizStackScreen} />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tab"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Tab" component={TabNavigator} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default StackNavigation;
