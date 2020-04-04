import React from 'react';
import {Keyboard, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

export default (props) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            {props.children}
          </View>
        </TouchableWithoutFeedback>
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