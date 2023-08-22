import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import * as Animatable from "react-native-animatable"; // Import Animatable
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import icons from "../constants/icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Animatable.View
              animation={focused ? "zoomIn" : undefined} // Apply animation only when focused
              duration={300} // Set the duration of the animation
            >
              <Image
                source={icons.Home}
                style={{
                  width: focused ? 60 : 50, // Adjust the width and height as needed
                  height: focused ? 60 : 50,
                  tintColor: focused ? "tomato" : "black",
                }}
              />
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ focused }) => (
            <Animatable.View
              animation={focused ? "zoomIn" : undefined} // Apply animation only when focused
              duration={300} // Set the duration of the animation
            >
              <Image
                source={icons.Quiz}
                style={{
                  width: focused ? 45 : 35, // Adjust the width and height as needed
                  height: focused ? 45 : 35,
                  tintColor: focused ? "tomato" : "black",
                }}
              />
            </Animatable.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
