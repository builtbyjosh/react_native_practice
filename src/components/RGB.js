import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RGB = ({ color, onIncrease, onDecrease }) => {

  return (
    <View>
      <Text style={styles.subtext}>
        {color}
      </Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Text></Text>
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />
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
