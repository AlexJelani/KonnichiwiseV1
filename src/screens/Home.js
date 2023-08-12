import React from "react";
import MainHeader from "../components/MainHeader"


import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity, Dimensions
} from "react-native";

const categoriesData = [
  {
    id: "1",
    title: "On the Train",
    image: require("../images/TRAIN.jpg"),
    description: "Learn about Japanese train etiquette and useful phrases for using trains.",
    list: [
      { english: "Excuse me / I'm sorry", furigana: "Sumimasen", japanese: "すみません" },
      { english: "Please", furigana: "Onegaishimasu",japanese: "すみません" },
      {
        english: "Please refrain from using mobile phones during the ride",
        furigana:  "Joushachuu no keitai denwa no shiyou wa okuranaikudasai",japanese: "乗車中の携帯電話の使用はお控えください"
      },
      { english: "Could you please give me your seat?", furigana: "Seki o yuzutte itadakemasen ka",japanese: "席を譲っていただけませんか" }
    ]
  },
  {
    id: "2",
    title: "At Restaurants",
    image: require("../images/RESTAURANT.jpg"),
    description: "Learn dining etiquette and essential phrases for eating at Japanese restaurants.",
    list: [
      { english: "Let's eat / Thank you for the meal (before eating)", furigana: "Itadakimasu",japanese: "いただきます" },
      { english: "Thank you for the meal (after eating)", furigana: "Gochisousama deshita", japanese: "ごちそうさまでした" },
      { english: "Excuse me, water please", furigana: "Sumimasen, omizu o onegaishimasu", japanese: "すみません、お水をお願いします" },
      { english: "Check, please", furigana: "Okanjou onegaishimasu", japanese: "お勘定お願いします " },
      { english: "Check, please", furigana: "Okanjou onegaishimasu", japanese: "お勘定お願いします " },
    ]
  },
  {
    id: "3",
    title: "Shrines and Temples",
    image: require("../images/TEMPLES.jpg"),
    description: "Explore Japanese shrine and temple etiquette, and common phrases used in these places.",
    list: [
      { english: "I'm going to pray / visit", furigana: "O-mairi shimasu", japanese: "お参りします" },
      { english: "I have a favor to ask", furigana: "Onegai ga arimasu", japanese: "お願いがあります" },
      { english: "Could I receive a temple/shrine stamp?", furigana: "Goshuin o itadakemasu ka", japanese: "御朱印をいただけますか" },
      { english: "Please take off your shoes", furigana: "Kutsu o nuide kudasai", japanese: "靴を脱いでください" }
    ]
  },
  {
    id: "4",
    title: "At the Hospital",
    image: require("../images/HOSPITAL.jpg"),
    description: "Learn essential Japanese phrases for seeking medical assistance and navigating hospitals.",
    list: [
      { english: "Please call an ambulance", furigana: "Kyuukyuusha o yonde kudasai", japanese: "救急車を呼んでください" },
      { english: "Please call a doctor", furigana: "Isha o yonde kudasai", japanese: "医者を呼んでください" },
      { english: "I brought my health insurance card", furigana: "Hokenshou o motte kimashita", japanese: "保険証を持ってきました " },
      { english: "Where is the pharmacy?", furigana: "Yakkyoku wa doko desu ka", japanese: "薬局はどこですか" }
    ]
  }
];


const Home = ({ navigation }) => {
  const numColumns = 2;
  const windowWidth = Dimensions.get('window').width;
  const horizontalPadding = 20;
  const cardWidth = (windowWidth - horizontalPadding * 3) / 2; // Two cards with 20 padding between them

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", {
          category: item
        })}
      >
        <ImageBackground
          source={item.image}
          style={[styles.categoryBackground, { width: cardWidth }]}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.darkness} />
          <Text style={styles.categoryText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MainHeader title="KonnichiWise"/>
      {/*<SwipeableImageSlider categoryImages={selectedImages}  />*/}
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
    width: '100%',
    //paddingVertical: 50,
    marginBottom: 20,
    backgroundColor: '#f6f7fc',
    justifyContent: "flex-end"
  },
  categories: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "flex-start"
  },
  categoryBackground: {
    height: 180,
    width: 150,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    left: 20
  },
  categoryText: {
    textAlign: "center",
    fontSize: 25,
    color: "#f8f5f5",
    fontWeight: "bold",
    bottom: 10
  },
  darkness: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%', // Set to cover the entire width of the card
    height: '100%', // Set to cover the entire height of the card
    borderRadius: 20,
  },
});
