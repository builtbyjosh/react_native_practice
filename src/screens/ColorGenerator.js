import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import RGB from '../components/RGB';

const COLOR_ADJUSTER = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorGen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <RGB
        color={'Red'}
        onIncrease={() => {
          dispatch({colorToChange: 'red', amount: COLOR_ADJUSTER});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'red', amount: -1 * COLOR_ADJUSTER});
        }}
      />
      <RGB
        color={'Green'}
        onIncrease={() => {
          dispatch({colorToChange: 'green', amount: COLOR_ADJUSTER});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'green', amount: -1 * COLOR_ADJUSTER});
        }}
      />
      <RGB
        color={'Blue'}
        onIncrease={() => {
          dispatch({colorToChange: 'blue', amount: COLOR_ADJUSTER});
        }}
        onDecrease={() => {
          dispatch({colorToChange: 'blue', amount: -1 * COLOR_ADJUSTER});
        }}
      />
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
