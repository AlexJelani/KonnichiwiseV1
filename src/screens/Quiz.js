import {Text, View, StyleSheet} from "react-native"

const Quiz = () =>{
  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
  }
})
export default Quiz;
