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
      <TouchableOpacity 
        onPress={(event) => this.props.navigator.pop() }
        style={styles.backBarRow}>
        <Icon name="chevron-left" size={20} style={styles.backBarChevron} />
        <View style={{flex: 1}} />
        <Text style={styles.backBarText}>{this.props.barTitle}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({

  backBarRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    marginBottom: 15
  },

  backBarChevron: {
    marginLeft: 20,
    marginRight: 20
  },

  backBarText: {
    marginRight: 100,
    fontSize: 20
  },

});

module.exports = BackBar;
