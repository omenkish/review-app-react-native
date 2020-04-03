import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

export default function Review({route: { params }}) {
  const { title, rating, body } = params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'

  }
});
