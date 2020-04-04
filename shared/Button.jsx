import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default ({ text, handlePress, otherStyles}) => (
  <TouchableOpacity onPress={handlePress}>
    <View style={{...styles.button, ...otherStyles}}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
});
