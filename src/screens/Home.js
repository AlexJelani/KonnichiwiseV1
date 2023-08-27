import React, { useState, useEffect } from "react";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import LandscapeScreenHeader from "../components/LandscapeScreenHeader";

import { categoriesData } from "../data";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";


const Home = ({ navigation }) => {
  const numColumns = 2;
  const [cardWidth, setCardWidth] = useState(
    (Dimensions.get("window").width - 20 * 3) / 2
  );

  const updateCardWidth = () => {
    setCardWidth((Dimensions.get("window").width - 20 * 3) / 2);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", updateCardWidth);

    return () => {
    };
  }, []);

  // //Change orientation when rotated other than potrait
  // const isPortrait = Dimensions.get("window").height > Dimensions.get("window").width;
  //
  // const renderScreenHeader = () => {
  //   if (isPortrait) {
  //     return <ScreenHeader />;
  //   } else {
  //     return <LandscapeScreenHeader />;
  //   }
  // };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            category: item,
          })
        }
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <MainHeader />
      {/*{renderScreenHeader()}*/}
      <View style={styles.whiteSection}>
        <View style={styles.cardsTitleContainer}>
          <Text style={styles.cardsTitle}></Text>
        </View>
        <FlatList
          numColumns={numColumns}
          data={categoriesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  scrollContent: {
    flexGrow: 1,
  },
  whiteSection: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  cardsTitleContainer: {
    top: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    marginTop: -40,
  },
  cardsTitle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    tintColor: "white",
    marginBottom: 5,
  },
  flatListContent: {
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
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
    marginVertical: 15,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 25,
    color: "#f8f5f5",
    fontWeight: "bold",
    bottom: 10,
  },
  darkness: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
