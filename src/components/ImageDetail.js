import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({name, imgUrl}) => {
  const image = {uri: imgUrl}
  let description = 'Must go faster. Remind me to thank John for a lovely weekend. '
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.subText}>{description}</Text>
      </View>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
    margin: 2,
  },
  textContainer: {
    flexWrap: 'wrap',
    flex: 1
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 5
  },
  subText: {
    fontSize: 15,    
    marginLeft: 5,    
  }
});
