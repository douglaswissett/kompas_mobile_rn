'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import BackBar from '../components/BackBar';
import Icon from 'react-native-vector-icons/FontAwesome'


class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <BackBar barTitle='Kompas Introducton' 
          navigator={this.props.navigator} />

        <View style={styles.centerRow}>
          <Icon name="tag" size={20} style={{marginRight: 15, color: 'grey'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ firstName: text })}
            placeholder="First Name" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="circle" size={20} style={{marginRight: 15, color: 'grey'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ firstName: text })}
            placeholder="First Name" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="envelope" size={20} style={{marginRight: 15, color: 'grey'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ firstName: text })}
            placeholder="First Name" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="unlock-alt" size={20} style={{marginRight: 15, color: 'grey'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ firstName: text })}
            placeholder="First Name" />
        </View>

        <TouchableOpacity 
          style={[styles.buttonViewStyle, { marginTop: 15 }]}>
          <Text>JOIN NOW</Text>
        </TouchableOpacity>

        <View style={styles.centerRow}><Text>or</Text></View>

        <TouchableOpacity 
          style={styles.buttonViewStyle}>
          <Text>Sign In with Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonViewStyle}>
          <Text>Sign In with Foursquare</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.buttonViewStyle, { borderWidth: 0 }]}>
          <Text>Sign Back In</Text>
        </TouchableOpacity>

      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({

  centerRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40
  },

  textInputStyles: {
    flex: 1
  },

  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40
  },

});

module.exports = SignUpScreen;
