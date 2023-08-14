import {View, StyleSheet, Image } from "react-native"


const ScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/JAPANTRAVEL.png')} style={{width: 300, height:300, position:'absolute'}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
});

export default ScreenHeader;
