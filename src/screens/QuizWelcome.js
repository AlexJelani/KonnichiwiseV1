import {
  View,
  TouchableOpacity,
  StyleSheet, ImageBackground
} from "react-native";
import { Text } from "native-base";

import React from "react";


const QuizWelcome = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text fontSize="5xl" bold>
          <Text style={styles.whiteText}>Welcome！</Text>
          <Text style={styles.blackText}>Let's play the </Text>
          <Text style={styles.whiteText}>KonnichiWise </Text>
          <Text style={styles.blackText}>Quiz! </Text>

        </Text>
      </View>
      <View style={styles.whiteSection}>

        <ImageBackground
          source={require('../../assets/images/quizbutton.png')} // Update with your image path
          //photo by cottonbro studio
          style={styles.backgroundImage}
          resizeMode="cover" // You can adjust this property as needed
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("QuizPage");
            }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Let's Begin!</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Set to 1 to take the full height of the screen
    backgroundColor: "red",
    justifyContent: "flex-start", // Align content to the top
  },
  textContainer: {
    flex: 1, // Set to 1 to take available space
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  whiteSection: {
    //position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  blackText: {
    fontFamily: "NightinTokyo",
    color: "black",
  },
  whiteText: {
    fontFamily: "NightinTokyo",
    color: "white",
  },
  btn: {
    backgroundColor: "red",
    paddingHorizontal: 60,
    paddingVertical: 60,
    borderRadius: 25,
    marginHorizontal: 20,
    alignItems: "center",
    elevation:10
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
    fontWeight:"bold"
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Adjust these properties to fit your layout
    height: "100%", // Adjust these properties to fit your layout
  },
});

export default QuizWelcome;
