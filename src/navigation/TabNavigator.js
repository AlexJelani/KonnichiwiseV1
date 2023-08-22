import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import icons from "../constants/icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation(); // Access the navigation prop

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
      screenOptions={({ route, navigation }) => ({
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
      <Tab.Screen name="Quiz" component={Quiz} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
