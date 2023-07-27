import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const categoriesData = [
  {
    id: "1",
    title: "Camp",
    image: require("../images/CAMPS.jpg"),
  },
  {
    id: "2",
    title: "Tours",
    image: require("../images/TOURS.jpg"),
  },
  {
    id: "3",
    title: "Expedition",
    image: require("../images/EXPEDITION.jpg"),
  },
  {
    id: "4",
    title: "Swim",
    image: require("../images/SWIM.jpg"),
  },
];

const Home = ({ navigation }) => {
  const numColumns = 2;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details2",  {
          category: item
        })}
      >
        <ImageBackground
          source={item.image}
          style={styles.categoryBackground}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text style={styles.categoryText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categories}>Categories</Text>
      <FlatList
        numColumns={numColumns} // Set the number of columns to 2
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#f6f7fc",
    justifyContent: "center",
    alignItems: "center",
  },
  categories: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  categoryBackground: {
    height: 180,
    width: 150,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    left: 20,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
    bottom: 10,
  },
});
