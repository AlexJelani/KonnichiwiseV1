import { View, StyleSheet } from "react-native";
import { Text } from "native-base";

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="5xl" bold>
        <Text style={[styles.whiteText, styles.topLineHeight]}>Hello！</Text>
        {"\n"}
        <Text style={[styles.blackText, styles.customLineHeight, styles.adjustLineHeight]}>Konnichi</Text>
        <Text style={styles.whiteText}>Wise</Text>
        {"\n"}
        <Text fontSize="5xl" style={styles.helloText}>こんにちは！</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  blackText: {
    fontFamily: "NightinTokyo",
    color: "black",
  },
  whiteText: {
    fontFamily: "NightinTokyo",
    color: "white",
  },
  helloText:{
    fontFamily: "NightinTokyo",
    color: "white",
  },
  customLineHeight: {
    lineHeight: 50, // Adjust the line height as needed
  },
  topLineHeight: {
    lineHeight: 50, // Adjust the line height as needed
  },
  adjustLineHeight: {
    lineHeight: 50, // Adjust this line height to push "KonnichiWise" up
  },
});

export default MainHeader;
