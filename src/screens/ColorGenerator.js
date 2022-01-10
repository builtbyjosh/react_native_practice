import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import RGB from '../components/RGB';

const ColorGen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View>
      <RGB color={red} setColor={setRed} text={'red'} />
      <RGB color={green} setColor={setGreen} text={'green'} />
      <RGB color={blue} setColor={setBlue} text={'blue'} />
      <View
        style={{
          marginTop: 15,
          height: 100,
          width: '100%',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

export default ColorGen;

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
