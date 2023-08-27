import React from "react";
import { View, StyleSheet, Image } from "react-native";

const LandscapeSreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/JAPANTRAVEL.png')}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20, // Adjust this value as needed to position the header correctly
  },
});

export default LandscapeSreenHeader;
