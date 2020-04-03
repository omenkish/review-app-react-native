import React from 'react';
import { ImageBackground , Image, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <MaterialIcons name='menu' size={28} style={styles.icon} onPress={toggleDrawer} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 380,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width:26,
    height: 26,
    marginHorizontal: 10
  }
});
