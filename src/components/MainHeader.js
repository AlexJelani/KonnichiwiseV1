import {View, StyleSheet, } from "react-native"
import { Text } from "native-base";


const MainHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text fontSize="3xl" bold>{title}</Text>
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

export default MainHeader;
