import React from 'react';
import {Modal, StyleSheet, Text, View } from 'react-native';

export default (props) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
      >
        <View style={styles.modalContent}>
          {props.children}
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    width: '90%',
    marginLeft: '5%'
  }
})