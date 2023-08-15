import { View, StyleSheet } from "react-native";
import { Text } from "native-base";

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="5xl" bold>
        <Text style={styles.blackText}>Konnichi</Text>
        <Text style={styles.whiteText}>Wise</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default MainHeader;
