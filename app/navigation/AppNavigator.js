'use strict';
import React, { 
  Component,
  Text, 
  StyleSheet, 
  Navigator 
} from 'react-native';
import LandingScreen from '../screens/LandingScreen.js'
import SignUpScreen from '../screens/SignUpScreen.js';
import InterestsScreen from '../screens/InterestsScreen.js';

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

      case "Interests":
        return (
          <InterestsScreen
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
