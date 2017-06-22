import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { InitialBackgroundImage } from './components/InitialBackgroundImage';

class App extends React.Component {
  render() {
    return (
      <InitialBackgroundImage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C12127',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },
  goForRide: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  },

});

Expo.registerRootComponent(App);
