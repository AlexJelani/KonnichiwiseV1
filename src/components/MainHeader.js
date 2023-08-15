import { View, StyleSheet } from "react-native";
import { Text } from "native-base";


const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>KonnichiWise</Text>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",




  },
  textStyle: {
    fontFamily: "nuku1",
    fontSize: 20,


  },
});

export default MainHeader;
