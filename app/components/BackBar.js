'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


class BackBar extends Component {

  render() {
    return (
      <View style={styles.backBarRow}>
        <TouchableOpacity
          onPress={(event) => this.props.navigator.pop() }>
          <Icon name="chevron-left" size={20} style={styles.backBarChevron} />
        </TouchableOpacity>
        <View style={{flex: 1}} />
        <Text style={styles.backBarText}>{this.props.barTitle}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  backBarRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    marginBottom: 15,
    borderColor: '#939e90'
  },

  backBarChevron: {
    marginLeft: 20,
    marginRight: 20,
    color: 'white'
  },

  backBarText: {
    marginRight: 100,
    fontSize: 20,
    color: 'white'
  },

});

module.exports = BackBar;
