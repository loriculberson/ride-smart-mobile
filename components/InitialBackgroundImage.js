import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class InitialBackgroundImage extends React.Component {
  render() {
    return (
        <Image 
          source={require('../assets/images/ridesmart_denver.png')}
          style={styles.map}
        />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});
