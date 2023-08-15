import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback, StyleSheet, Text, SectionList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from 'react-native-virtualized-view';

const Details = ({ route, navigation }) => {
  const { category } = route.params;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseText}>{item.english}</Text>
        <Text style={styles.phraseText}>{item.furigana}</Text>
        <Text style={styles.phraseText}>{item.japanese}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const adjustedData = category.list.map(section => ({
    title: section.title,
    data: section.data
  }));

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
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.bodyText}>
          <Text style={styles.descriptionName}>Overview</Text>
          <Text style={styles.description}>{category.description}</Text>
          <SectionList
            sections={adjustedData}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </ScrollView>
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
    color: "#f8f5f5"
  },
  bodyText: {
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 20,
    marginBottom: 100
  },
  descriptionName: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#000000"
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000"
  },
  phraseContainer: {
    marginVertical: 10,
    //padding: 10,
    //borderRadius: 8,
    backgroundColor: "#f2f2f2"
  },
  phraseText: {
    fontSize: 18,
    color: "#333"
  },
  separator: {
    height: 1,
    backgroundColor: "#000000"
  },
  sectionHeader: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#000000"
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }


});

export default Details;


