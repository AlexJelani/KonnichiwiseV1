import {View, StyleSheet, Image } from "react-native"


const ScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/JAPANTRAVEL.png')}
                       style={{
                         width: 300,
                         height:300,
                       }}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "flex-start", // Align items at the top
    alignItems:"center",
  },
});

export default ScreenHeader;
