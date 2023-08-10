import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from "react-native";

const categoriesData = [
  {
    id: "1",
    title: "On the Train",
    image: require("../images/TRAIN.jpg"),
    description: "Learn about Japanese train etiquette and useful phrases for using trains.",
    list: [
      { english: "Excuse me / I'm sorry", japanese: "すみません (Sumimasen)" },
      { english: "Please", japanese: "お願いします (Onegaishimasu)" },
      {
        english: "Please refrain from using mobile phones during the ride",
        japanese: "乗車中の携帯電話の使用はお控えください (Joushachuu no keitai denwa no shiyou wa okuranaikudasai)"
      },
      { english: "Could you please give me your seat?", japanese: "席を譲っていただけませんか (Seki o yuzutte itadakemasen ka)" }
    ]
  },
  {
    id: "2",
    title: "At Restaurants",
    image: require("../images/RESTAURANT.jpg"),
    description: "Learn dining etiquette and essential phrases for eating at Japanese restaurants.",
    list: [
      { english: "Let's eat / Thank you for the meal (before eating)", japanese: "いただきます (Itadakimasu)" },
      { english: "Thank you for the meal (after eating)", japanese: "ごちそうさまでした (Gochisousama deshita)" },
      { english: "Excuse me, water please", japanese: "すみません、お水をお願いします (Sumimasen, omizu o onegaishimasu)" },
      { english: "Check, please", japanese: "お勘定お願いします (Okanjou onegaishimasu)" },
      { english: "Check, please", japanese: "お勘定お願いします (Okanjou onegaishimasu)" }
    ]
  },
  {
    id: "3",
    title: "Shrines and Temples",
    image: require("../images/TEMPLES.jpg"),
    description: "Explore Japanese shrine and temple etiquette, and common phrases used in these places.",
    list: [
      { english: "I'm going to pray / visit", japanese: "お参りします (O-mairi shimasu)" },
      { english: "I have a favor to ask", japanese: "お願いがあります (Onegai ga arimasu)" },
      { english: "Could I receive a temple/shrine stamp?", japanese: "御朱印をいただけますか (Goshuin o itadakemasu ka)" },
      { english: "Please take off your shoes", japanese: "靴を脱いでください (Kutsu o nuide kudasai)" }
    ]
  },
  {
    id: "4",
    title: "At the Hospital",
    image: require("../images/HOSPITAL.jpg"),
    description: "Learn essential Japanese phrases for seeking medical assistance and navigating hospitals.",
    list: [
      { english: "Please call an ambulance", japanese: "救急車を呼んでください (Kyuukyuusha o yonde kudasai)" },
      { english: "Please call a doctor", japanese: "医者を呼んでください (Isha o yonde kudasai)" },
      { english: "I brought my health insurance card", japanese: "保険証を持ってきました (Hokenshou o motte kimashita)" },
      { english: "Where is the pharmacy?", japanese: "薬局はどこですか (Yakkyoku wa doko desu ka)" }
    ]
  }
];


const Home = ({ navigation }) => {
  const numColumns = 2;
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", {
          category: item
        })}
      >
        <ImageBackground
          source={item.image}
          style={styles.categoryBackground}
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
    paddingVertical: 50,
    marginBottom: 20,
    backgroundColor: '#f6f7fc',
  },
  categories: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    paddingHorizontal: 20,
    marginBottom: 20,
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
    width: 150,
    height: 180,
    borderRadius: 20,
  },
});
