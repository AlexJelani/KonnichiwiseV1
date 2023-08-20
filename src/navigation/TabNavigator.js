import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Animated } from "react-native"; // Import Animated from 'react-native'
import Home from "../screens/Home";
import QuizWelcome from "../screens/QuizWelcome";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const tabBarIconStyle = (focused) => {
    const scale = focused ? 1.2 : 1; // Adjust the scale factor as needed
    Animated.spring(scaleValue, {
      toValue: scale,
      useNativeDriver: false, // Required for certain properties like tintColor
    }).start();

    return {
      transform: [{ scale: scaleValue }],
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "black"
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            // Use Animated.View to apply the animation to the tab icon
            <Animated.View style={tabBarIconStyle(focused)}>
              <Image
                source={icons.Home}
                style={{
                  tintColor: focused ? "tomato" : "black",
                }}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizWelcome}
        options={{
          tabBarIcon: ({ focused }) => (
            <Animated.View style={tabBarIconStyle(focused)}>
              <Image
                source={icons.Quiz}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "tomato" : "black",
                }}
              />
            </Animated.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;


