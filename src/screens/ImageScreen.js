import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
  let imgArr = [
    {name: 'Mountain', imgUrl: 'https://picsum.photos/200'}
  ]
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail name={'Mountain'} imgUrl={'https://picsum.photos/200?random=1'}/>
      <ImageDetail name={'Forest'} imgUrl={'https://picsum.photos/200?random=2'}/>
      <ImageDetail name={'Beach'} imgUrl={'https://picsum.photos/200?random=3'}/>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({

})
