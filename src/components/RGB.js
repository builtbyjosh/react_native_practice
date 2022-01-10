import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RGB = ({ color, setColor, text }) => {
  return (
    <View>
      <Text style={styles.subtext}>
        {text}: {color}
      </Text>
      <Button title={`Increase ${text}`} onPress={() => setColor(color + 1)} />
      <Text></Text>
      <Button title={`Increase ${text}`} onPress={() => setColor(color - 1)} />
    </View>
  );
};

export default RGB;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
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
