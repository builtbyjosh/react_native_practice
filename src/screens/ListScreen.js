import React from 'react'
import { StyleSheet, Text, View, FlatList, _Text } from 'react-native'

const ListScreen = () => {
  let friends = [
    {name: 'Friend1'},
    {name: 'Friend2'},
    {name: 'Friend3'},
    {name: 'Friend4'},
    {name: 'Friend5'},
    {name: 'Friend6'},
    {name: 'Friend7'},
    {name: 'Friend8'},
    {name: 'Friend9'},
    {name: 'Friend10'},
  ]


  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        keyExtractor={(friend)=> friend.name } 
        data={friends} 
        renderItem={({item, index}) => {
          return (
            <Text >{item.name}</Text>
          )}}
      />
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({

})
