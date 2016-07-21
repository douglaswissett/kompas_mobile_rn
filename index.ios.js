'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

class abcrn123 extends Component {

  render() {
    return (
      <AppNavigator initialRoute={{ident: 'SignUp'}} />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('abcrn123', () => abcrn123);
