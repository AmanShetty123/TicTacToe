import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Cell = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.cell} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    height: '33.33%',
    width: '33.33%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
  },
  text: {
    fontSize: 24,
  },
});

export default Cell;
