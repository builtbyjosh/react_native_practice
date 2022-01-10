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
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text style={styles.subtext}>Go To Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Count')}>
        <Text style={styles.subtext}>Go To Counting Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text style={styles.subtext}>Go To Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ColorGen')}>
        <Text style={styles.subtext}>Go To Color Generator Demo</Text>
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
    marginVertical: 15,
  },
});

export default HomeScreen;
