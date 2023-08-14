import {View, StyleSheet, } from "react-native"
import { Text } from "native-base";


const ScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="3xl" bold>ScreenHeader</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
});

export default ScreenHeader;
