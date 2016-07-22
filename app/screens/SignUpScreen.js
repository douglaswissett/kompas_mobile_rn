'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import BackBar from '../components/BackBar';
import Icon from 'react-native-vector-icons/FontAwesome';



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
      <ViewContainer style={{ backgroundColor: '#97c1b3' }}>
        <StatusBarBackground />
        <BackBar barTitle='Kompas Introducton' 
          navigator={this.props.navigator} />

        <View style={styles.centerRow}>
          <Icon name="tag" size={20} style={{marginRight: 15, color: 'white'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ firstName: text })}
            placeholder="First Name" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="circle" size={20} style={{marginRight: 15, color: 'white'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ lastName: text })}
            placeholder="Last Name" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="envelope" size={20} style={{marginRight: 13, color: 'white'}} />
          <TextInput
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ email: text })}
            placeholder="Email Address" />
        </View>
        <View style={styles.centerRow}>
          <Icon name="unlock-alt" size={20} style={{marginRight: 20, color: 'white'}} />
          <TextInput
            secureTextEntry={true}
            style={styles.textInputStyles}
            onChangeText={ (text) => this.setState({ password: text })}
            placeholder="Password" />
        </View>

        <TouchableOpacity 
          onPress={(event) => this._submitUserForm() }
          style={[styles.buttonViewStyle, { marginTop: 15 }]}>
          <Text style={styles.buttonTextStyle}>JOIN NOW</Text>
        </TouchableOpacity>

        <View style={styles.centerRow}><Text style={{ color: '#fff' }}>OR</Text></View>

        <TouchableOpacity 
          onPress={(event) => this._signInInstagram() }
          style={styles.buttonViewStyle}>
          <Text style={styles.buttonTextStyle}>SIGN IN WITH INSTAGRAM</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonViewStyle}>
          <Text style={styles.buttonTextStyle}>SIGN IN WITH FOURSQUARE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.buttonViewStyle, { borderWidth: 0 }]}>
          <Text style={styles.buttonTextStyle}>SIGN BACK IN</Text>
        </TouchableOpacity>

      </ViewContainer>
    );
  }

  _submitUserForm() {
    
    fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => response.json())
    .then((responseData) => { return responseData; })
    .then((data) => { 


      this.props.navigator.push({
        ident: 'Interests'
      })


    }).catch(function(err) { console.log(err) })
    .done();
  }

  _signInInstagram() {
    console.log('TODO: Sign In using Instagram');

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
    flex: 1,
    paddingLeft: 5,
    color: '#fff'
  },

  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40
  },

  buttonTextStyle: {
    color: '#fff'
  }

});

module.exports = SignUpScreen;
