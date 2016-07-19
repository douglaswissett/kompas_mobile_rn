'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  { firstName: 'ai Ling', lastName: 'Walker', city: 'Berlin' },
  { firstName: 'douglas', lastName: 'Walker', city: 'Berlin' },
  { firstName: 'alison', lastName: 'Walker', city: 'Shrewsbury' }
]

class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
        style={{marginTop: 100}}
        dataSource={this.state.peopleDataSource}
        renderRow={(person) => {return this._renderPersonRow(person) }} />
      </ViewContainer>
    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>  
        <Text style={styles.personName}>
          {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },

  personName: {
    marginLeft: 25
  },

  personMoreIcon: {
    color: "green",
    height: 20,
    width: 20,
    marginRight: 25
  }
});

module.exports = PeopleIndexScreen;
