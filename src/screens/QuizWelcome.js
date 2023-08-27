import {View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  } from "react-native"
import React from "react";


const QuizWelcome = ({ navigation }) =>{

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/images/question-mark.png")} />
      {/*PegandMarcoimage*/}
      <View style={styles.subContainer}>
        <Text style={styles.text}>Ready For your Written Test?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("QuizPage");
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Let's Begin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItem: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btn: {
    backgroundColor: "#fac782",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
  },
});

export default QuizWelcome;
