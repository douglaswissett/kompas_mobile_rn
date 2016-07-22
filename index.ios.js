'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'

class KompasMobileApp extends Component {
  render() {
    return (
      <AppNavigator initialRoute={{ident: 'Interests'}} />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('KompasMobileApp', () => KompasMobileApp);
