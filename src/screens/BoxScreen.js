import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textStyle}>Box Screen Demo</Text> */}
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textFlexedStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>

    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',    
    // flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    padding: 5,

  },
  textFlexedStyle: {
    borderWidth: 3,
    borderColor: 'red',
    padding: 5,
    position: 'absolute',
    top: 90,
    left: 90
  },
})
