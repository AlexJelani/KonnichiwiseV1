import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

// import styles from './styles';

const Details = ({navigation}) => (
  <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text>Details Screen</Text>
    <Button
      title='Go to the Details....again'
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);
const styles = StyleSheet.create({});
export default Details;
