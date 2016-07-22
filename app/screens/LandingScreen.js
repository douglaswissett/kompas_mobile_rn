'use strict';

import React, {
  View,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import Swiper from 'react-native-swiper';

class LandingScreen extends Component {

  render() {
    return (
      <ViewContainer style={{backgroundColor: '#4e6b7d' }}>
        <StatusBarBackground />
        <View style={{flex: 8}}>
          <Swiper
            loop={false}
            dot={<View style={styles.swiperDot} />}
            activeDot={<View style={styles.activeDot} />}>
            <View style={styles.swiperSlide}>
              <View style={{ marginTop: 180 }}>
                <Text style={styles.swiperSlideText}>KOMPAS</Text>
                <Text style={styles.swiperSlideText}>THE WORLDS URBAN JUNGLE</Text>
              </View>
            </View>
            <View style={[styles.swiperSlide, { paddingLeft: 5, paddingRight: 5 }]}>
              <View style={{ marginTop: 180 }}>
                <Text style={styles.swiperSlideText}>KOMPAS Learns about you</Text>
                <Text style={styles.swiperSlideText}>through machine learning</Text>
              </View>
            </View>
            <View style={styles.swiperSlide}>
              <View style={{ marginTop: 180 }}>
                <Text style={styles.swiperSlideText}>KOMPAS builds itineraries</Text>
                <Text style={styles.swiperSlideText}>based on your interests</Text>
              </View>
            </View>
            <View style={styles.swiperSlide}>
              <View style={{ marginTop: 180 }}>
                <Text style={styles.swiperSlideText}>So let's get you on your</Text>
                <Text style={styles.swiperSlideText}>way to exploring the</Text>
                <Text style={[styles.swiperSlideText, { fontWeight: '600' }]}>World's Urban Jungles</Text>
              </View>
            </View>
          </Swiper>
        </View>
        <TouchableOpacity 
          onPress={(event) => this._navigatorTo('SignUp')}
          style={styles.buttonViewStyle}>
          <Text style={styles.buttonTextStyle}>JOIN NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={(event) => this._navigatorTo('LoginPage')}
          style={[styles.buttonViewStyle, {backgroundColor: 'rgba(0,0,0,0)'}]}>
          <Text style={[styles.buttonTextStyle, { fontSize: 12 }]}>SIGN IN</Text>
        </TouchableOpacity>
      </ViewContainer>
    );
  }

  _navigatorTo(location) {
    this.props.navigator.push({
      ident: location
    })
  }

}

const styles = StyleSheet.create({

  swiperSlide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30
  },

  swiperSlideText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white'
  },

  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4cc2ff',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 25,
  },

  buttonTextStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: 'white'
  },

  swiperDot: {
    backgroundColor:'#fff',
    width: 8,
    height: 8,
    borderRadius: 10, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 200
  },

  activeDot: {
    backgroundColor: '#fff', 
    width: 13, 
    height: 13, 
    borderRadius: 7, 
    marginLeft: 7, 
    marginRight: 7,
    marginBottom: 200
  }

});

module.exports = LandingScreen;
