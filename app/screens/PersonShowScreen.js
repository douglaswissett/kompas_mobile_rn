'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity
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

class PersonShowScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    var personBackgroundColor;
    switch(this.props.person.city) {
      case 'Berlin':
        personBackgroundColor = 'coral';
        break;

      case 'Shrewsbury':
        personBackgroundColor = 'dodgerblue';
        break;
    }

    return (
      <ViewContainer style={{backgroundColor: personBackgroundColor}}>
        <StatusBarBackground />

        <TouchableOpacity onPress={(event) => this.props.navigator.pop() }>
          <Icon name="times" size={30} />
        </TouchableOpacity>

        <ListView
        style={{marginTop: 100}}
        dataSource={this.state.peopleDataSource}
        renderRow={(person) => {return this._renderPersonRow(person) }} />

        <View style={{marginBottom: 100}}>
          <Text style={{marginTop: 10, fontSize: 20}}>{`PERSON SHOW SCREEN`}</Text>
          <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>
        </View>
      </ViewContainer>
    )
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
      ident: 'PersonShow',
      person
    })
  }

}

const styles = StyleSheet.create({

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

module.exports = PersonShowScreen;
