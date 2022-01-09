import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!!</Text>
      <Button
        title="next page"
        onPress={() => {
          navigation.navigate('Component');
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.subtext}>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    alignSelf: 'center',
    marginVertical: 50,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 25,
    alignSelf: 'center',
    marginVertical: 50,
  },
});

export default HomeScreen;
