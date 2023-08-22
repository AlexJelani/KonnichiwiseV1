import React, { useRef } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Animated } from "react-native";
import icons from "../constants/icons";
import Home from "../screens/Home";
import Details from "../screens/Details";
import QuizPage from "../screens/QuizPage";
import QuizWelcome from "../screens/QuizWelcome";

const Stack = createNativeStackNavigator();
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
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
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
const QuizStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QuizPage" component={QuizPage} />
      <Stack.Screen name="QuizWelcome" component={QuizPage} />
    </Stack.Navigator>
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

          <Stack.Screen name="QuizPage" component={QuizPage} />

          <Stack.Screen name="QuizStack" component={QuizStack} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default StackNavigation;
