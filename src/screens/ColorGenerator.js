import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import RGB from '../components/RGB';

const COLOR_ADJUSTER = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: 'change_red', payload: COLOR_ADJUSTER });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_red', payload: -1 * COLOR_ADJUSTER });
        }}
      />
      <RGB
        color={'Green'}
        onIncrease={() => {
          dispatch({ type: 'change_green', payload: COLOR_ADJUSTER });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_green', payload: -1 * COLOR_ADJUSTER });
        }}
      />
      <RGB
        color={'Blue'}
        onIncrease={() => {
          dispatch({ type: 'change_blue', payload: COLOR_ADJUSTER });
        }}
        onDecrease={() => {
          dispatch({ type: 'change_blue', payload: -1 * COLOR_ADJUSTER });
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
