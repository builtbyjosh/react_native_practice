import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  const name = 'josh'
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!!</Text>
      <Button
        title="next page"
        onPress={() => {
          navigation.navigate('Component');
        }} 
      />
      <Text style={styles.subtext}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    alignSelf: 'center',    
    marginVertical: 50,
    textAlign: 'center'
  },
  subtext: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 50
  },
});

export default HomeScreen;
