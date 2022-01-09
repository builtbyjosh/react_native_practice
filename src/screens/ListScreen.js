import React from 'react'
import { StyleSheet, Text, View, FlatList, _Text } from 'react-native'

const ListScreen = () => {
  let friends = [
    {name: 'Friend1', age: 37},
    {name: 'Friend2', age: 37},
    {name: 'Friend3', age: 37},
    {name: 'Friend4', age: 37},
    {name: 'Friend5', age: 37},
    {name: 'Friend6', age: 37},
    {name: 'Friend7', age: 37},
    {name: 'Friend8', age: 37},
    {name: 'Friend9', age: 37},
    {name: 'Friend10', age: 37},
  ]


  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        keyExtractor={(friend)=> friend.name }

        data={friends} 
        renderItem={({item, index}) => {
          return (
            <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
          )}}
      />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})
