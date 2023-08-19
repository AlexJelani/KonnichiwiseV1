import React from "react";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import { categoriesData } from "../data";


import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity, Dimensions, Image
} from "react-native";


const Home = ({ navigation }) => {
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;
  const horizontalPadding = 20;
  const cardWidth = (windowWidth - horizontalPadding * 3) / 2; // Two cards with 20 padding between them

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", {
          category: item
        })}
      >
        <View style={styles.cardContainer}>
          <ImageBackground
            source={item.image}
            style={[styles.categoryBackground, { width: cardWidth }]}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.darkness} />
            <Image source={item.icon} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MainHeader />
      <ScreenHeader />
      <View style={styles.whiteSection}>
        <View style={styles.cardsTitleContainer}>
          <Text style={styles.cardsTitle}>Basic Travel Phrases</Text>
        </View>
        <FlatList
          numColumns={numColumns}
          data={categoriesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
};


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  whiteSection: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    position: "absolute"
  },
  cardsTitleContainer: {
    position: "absolute",
    top: 40, // Adjust this value to control the vertical position
    left: 0,
    right: 0,
    alignItems: "center",
    marginTop:-40
  },
  cardsTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,

  },
  categoryImage: {
    width: 60, // Adjust the width and height according to your icon size
    height: 60,
    resizeMode: "contain", // Adjust the resizeMode as needed
    tintColor: 'white',
    marginBottom:5
  },
  flatListContent: {
    alignItems: "center", // Center the FlatList's content
    paddingTop: 20, // Add padding at the top for spacing
    paddingLeft: 20, // Add left padding
    paddingRight: 20

  },
  categories: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "flex-start"
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",

  },
  categoryBackground: {
    flex: 1,
    height: 180,
    width: 150,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15
    //left: 20
  },
  categoryText: {
    textAlign: "center",
    fontSize: 25,
    color: "#f8f5f5",
    fontWeight: "bold",
    bottom: 10
  },
  darkness: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%", // Set to cover the entire width of the card
    height: "100%", // Set to cover the entire height of the card
    borderRadius: 20
  }
});
