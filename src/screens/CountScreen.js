import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CountScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text style={styles.text} >Lets Do Some Counting!!!</Text>
      <Button onPress={()=>setCount(count + 1)} title='Increase' />
      <Text></Text>
      <Button onPress={()=>setCount(count - 1)} title='Decrease' />
      <Text style={styles.subtext}>Current Count</Text>
      <Text style={styles.text}>{count}</Text>
    </View>
  )
}

export default CountScreen

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
    marginVertical: 50,
  },

})
