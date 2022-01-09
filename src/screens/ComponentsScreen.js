import React from 'react';
import { Text, StyleSheet, Image, ImageBackground } from 'react-native';

const ComponentsScreen = () => {
  const image = {uri: 'https://picsum.photos/200/300'}
  const image2 = {uri: 'https://picsum.photos/200/200'}


  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <Text style={styles.text}>This is a text box</Text>
      <Image source={image2} style={styles.image2}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 50
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  image2: {
    height: 300,
    width: 300,
    alignSelf:'center'
  }
});

export default ComponentsScreen;
