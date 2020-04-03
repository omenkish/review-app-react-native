import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home({ navigation: { navigate }}) {
  const [reviews, setReviews] = useState([
    {title: 'Zelda, breath of fresh air', rating: 5, body: 'This is the first body', key: '1'},
    {title: 'Test once again', rating: 4, body: 'This is testing data', key: '2'},
    {title: 'Testing data', rating: 3, body: 'This is another testing data', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
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
