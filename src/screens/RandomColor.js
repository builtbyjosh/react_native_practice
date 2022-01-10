import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RandomColor = () => {
  const [colors, setColors] = useState([]);
  console.log(colors)
  return (
    <View>
      <Text style={styles.text}>Random Color Picker</Text>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginTop: 15,
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};

export default RandomColor;

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

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
