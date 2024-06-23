import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Cell from './Cell';

const {width} = Dimensions.get('window');
const boardSize = width * 0.9;

const Board = ({board, onCellPress}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: boardSize,
          height: boardSize,
        },
      ]}>
      {board.map((value, index) => (
        <Cell key={index} value={value} onPress={() => onCellPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Board;
