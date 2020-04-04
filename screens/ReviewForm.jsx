import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';

import { globalStyles } from '../styles/global';

export default ({ addReview }) => {
  const initialValues = { title: '', body: '', rating: '' };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {
          (props) => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Review Title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
              />
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
              />
              <TextInput
                style={globalStyles.input}
                placeholder='Rating (1-5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
              />

              <Button title='Submit' color='maroon' onPress={props.handleSubmit}/>
            </View>
          )
        }
      </Formik>
    </View>
  );
}