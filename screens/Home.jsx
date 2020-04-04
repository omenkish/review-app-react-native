import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import Modal from '../shared/Modal';
import ReviewForm from './ReviewForm';
import FlatButton from '../shared/Button';

export default function Home({ navigation: { navigate }}) {
  const [reviews, setReviews] = useState([
    {title: 'Zelda, breath of fresh air', rating: 5, body: 'This is the first body', key: '1'},
    {title: 'Test once again', rating: 4, body: 'This is testing data', key: '2'},
    {title: 'Testing data', rating: 3, body: 'This is another testing data', key: '3'},
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [reviewKey, setReviewKey] = useState('');

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => ([
      review,
      ...currentReviews
    ]));
    setModalVisible(false);
  }

  const closeModal = () => setDeleteModal(false);

  const openDeleteModal = key => {
    setDeleteModal(true);
    setReviewKey(key);
  }

  const deleteReview = key => {
    setReviews(currentReviews => currentReviews.filter(review => review.key != key));
    setDeleteModal(false);
  };

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
          onPress={() => (setModalVisible(false))}
          style={{ ...styles.button, ...styles.cancelButton }}
        />
        <ReviewForm addReview={addReview}/>
      </Modal>

      <Modal modalVisible={deleteModal}>
        <View style={{...globalStyles.container, ...styles.modalContainer}}>
          <Text style={styles.deleteText}>Are you sure you want to delete this review?</Text>
          <View style={styles.deleteModalButtons}>
            <FlatButton
              text='cancel'
              handlePress={closeModal}
              otherStyles={{backgroundColor: '#777', width: 130}}
            />
            <FlatButton
              text='delete'
              handlePress={() => deleteReview(reviewKey)}
              otherStyles={{backgroundColor: 'red', width: 130}}
             />
          </View>
        </View>
      </Modal>

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigate('Review', item)} >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>

              <MaterialIcons
                name='delete'
                size={24}
                onPress={() => openDeleteModal(item.key)}
                style={styles.deleteIcon}
              />
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
  },
  modalContainer: {
    marginTop: 80
  },
  deleteIcon: {
    position: 'absolute',
    right: 0,
    color: 'black'
  },

  deleteText: {
    padding: 30,
    alignSelf: 'center',
    fontFamily: 'nunito-bold',
    fontSize: 25
  },
  deleteModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
