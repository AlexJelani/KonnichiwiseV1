import { View, StyleSheet } from "react-native";
import { Text } from "native-base";


const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="3xl" bold style={styles.textStyle}>KonnichiWise</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle:{
    fontFamily: "NightinTokyo"

  }
});

export default MainHeader;
