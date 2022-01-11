import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const NameInput = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter your Name</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={textValue}
        onChangeText={(e) => setTextValue(e)}
      />
      <Text style={styles.subtext}>Hello {textValue}!</Text>
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 25,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 25,
    alignSelf: 'center',
    marginVertical: 15,
  },
  textInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    paddingLeft: 10
  },
});
