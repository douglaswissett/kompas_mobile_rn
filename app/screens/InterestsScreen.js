'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import BackBar from '../components/BackBar';
import Icon from 'react-native-vector-icons/FontAwesome';



const {height, width} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class InterestsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interestsDataSource: ds.cloneWithRows('')
    }
  }

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/interests')
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({ interestsDataSource: ds.cloneWithRows(responseJson) })

    })
    .catch((error) => console.error(error))

  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: '#4e6b7d' }}>
        <StatusBarBackground style={{ backgroundColor: '#3f9ed4' }} />
        <BackBar barTitle='Interests'
          style={{ backgroundColor: '#4cc2ff', marginBottom: 0 }}
          navigator={this.props.navigator} />

        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.interestsDataSource}
          renderRow={(rowData) => this._renderInterestRow(rowData) }
          initialListSize={15} />

        <TouchableOpacity
          style={styles.footerConfirm}>
          <Text style={styles.footerText}>Confirm Favourites</Text>
        </TouchableOpacity>

      </ViewContainer>
    );
  }

  _renderInterestRow(interest) {
    return (
      <InterestTile interest={interest} />
    )
  }
}




class InterestTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressStatus: false
    }
  }

  render() {
    return (
      <TouchableOpacity 
        style={this.state.pressStatus? styles.interestRowPressed : styles.interestRow }
        onPress={() => this.setState({pressStatus: !this.state.pressStatus }) }>
        { this.state.pressStatus? <Icon name="check" size={25} style={styles.tick} /> : null }
        

        <Text style={styles.interestName}>{`${this.props.interest.name.toUpperCase()}`}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({

  listView: { 
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff'
  },

  interestRow: {
    backgroundColor: '#1f5c71',
    margin: 5,
    width: width/3.5,
    height: height/6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5
  },

  interestRowPressed: {
    backgroundColor: '#1f5c71',
    width: width/3.5,
    margin: 5,
    height: height/6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    opacity: 0.8
  },

  interestName: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center'
  },

  footerConfirm: { 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4cc2ff'
  },

  footerText: {
    color: '#fff',
    fontSize: 18
  },

  tick: {
    color: '#fff',
    paddingBottom: 18
  }

});

module.exports = InterestsScreen;
