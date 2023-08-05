import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
// import { Icon } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";


const Details = ({ route, navigation }) => {
  // Destructure the params directly in the function signature or within the function body
  const { category } = route.params;
  console.log(category.title); // Log the category title to the console


  return (
    <View style={styles.container}>
      <ImageBackground
        source={category.image}
        style={styles.headerBackground}
      >
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backBtn}>
            <Icon
              name="arrow-back-outline"
              size={30} color="#900"
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryNameText}>{category.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.bodyText}>
        <Text style={styles.description}>Description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerBackground: {
    width: "100%", // Fixed an error: Add '%' to specify the width as a percentage
    height: 200
  },
  backBtn: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    position: "absolute",
    left: 30,
    top: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  backIcon: {
    color: "#4F8EF7",
    fontSize: 25
  },
  categoryNameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  categoryNameText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f8f5f5",
  },
  bodyText: {
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 20,
    marginBottom: 100
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000"
  }

});

export default Details;


