import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../styles/global';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is_valid_rating', 'Rating must be a number from 1 to 5', (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    })
});

export default ({ addReview }) => {
  const initialValues = { title: '', body: '', rating: '' };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={reviewSchema}
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
                onBlur={props.handleBlur('title')}
              />
              <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                onBlur={props.handleBlur('body')}
              />
              <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
              <TextInput
                style={globalStyles.input}
                placeholder='Rating (1-5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
                onBlur={props.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
              <Button title='Submit' color='maroon' onPress={props.handleSubmit}/>
            </View>
          )
        }
      </Formik>
    </View>
  );
}