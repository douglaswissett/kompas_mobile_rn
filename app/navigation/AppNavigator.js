'use strict';
import React, { Component } from 'react';
import { Text, StyleSheet, Navigator } from 'react-native';
import LandingScreen from '../screens/LandingScreen.js'
import PeopleIndexScreen from '../screens/PeopleIndexScreen.js'
import PersonShowScreen from '../screens/PersonShowScreen.js'
import SignUpScreen from '../screens/SignUpScreen.js';

class AppNavigator extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "Landing":
        return (
          <LandingScreen 
            {...globalNavigatorProps} />
        )

      case "SignUp":
        return (
          <SignUpScreen
            {...globalNavigatorProps} />
        )

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }
}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

module.exports = AppNavigator;
