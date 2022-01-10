import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const RGB = ({ color, setColor, text }) => {
  const COLOR_ADJUSTER = 15;

  const handleClick = (change) => {
    console.log(color, change)
    if (color + change > 255 || color + change < 0) {
      return;
    } else {
      setColor(color + change);
    }
  };

  return (
    <View>
      <Text style={styles.subtext}>
        {text}: {color}
      </Text>
      <Button
        title={`Increase ${text}`}
        onPress={() => handleClick(COLOR_ADJUSTER)}
      />
      <Text></Text>
      <Button
        title={`Decrease ${text}`}
        onPress={() => handleClick(-1 * COLOR_ADJUSTER)}
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
