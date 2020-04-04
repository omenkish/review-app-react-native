import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import Modal from '../shared/Modal';
import ReviewForm from './ReviewForm';

export default function Home({ navigation: { navigate }}) {
  const [reviews, setReviews] = useState([
    {title: 'Zelda, breath of fresh air', rating: 5, body: 'This is the first body', key: '1'},
    {title: 'Test once again', rating: 4, body: 'This is testing data', key: '2'},
    {title: 'Testing data', rating: 3, body: 'This is another testing data', key: '3'},
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => ([
      review,
      ...currentReviews
    ]));
    setModalVisible(false);
  }
  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        name='add'
        size={24}
        onPress={() => (setModalVisible(true))}
        style={styles.button}
      />
      <Modal modalVisible={modalVisible}>
        <MaterialIcons
          name='close'
          size={24}
          onPress={() => setModalVisible(false)}
          style={{ ...styles.button, ...styles.cancelButton }}
        />
        <ReviewForm addReview={addReview}/>
      </Modal>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigate('Review', item)} >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  cancelButton: {
    marginTop: 20,
    marginBottom: 0
  }
})