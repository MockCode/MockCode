import React, { Component } from 'react';

import { Text, View, Dimensions, TextInput, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import { connect, Provider } from "react-redux";
// import Orientation from "react-native-orientation";
import { NearbyAPI } from "react-native-nearby-api";

import PropTypes from 'prop-types'

import {API_KEYS} from '../api'
import { NetworkComp } from '../components/network';
import navigation from '../navigation';
import SelectModeScreen from './SelectModeScreen';
// import { NetworkComp } from '../components/network';

// const nearbyAPI = new NearbyAPI(true);

var {height, width} = Dimensions.get('window');

export default class MonitorScreen extends Component {
  // componentWillMount(){
  //   const initialOrientation = Orientation.getInitialOrientation();
  //   if (initialOrientation == 'PORTRAIT'){
  //     Orientation.lockToLandscape();
  //   } else {
  //     Orientation.lockToLandscape();
  //   }
  // }
  componentDidMount(){
    StatusBar.setHidden(true);
    // Orientation.lockToLandscape();
  }

  static navigationOptions = {
    title: 'Monitor',
    header: null
  }
  static propTypes = {
    prop: PropTypes
  }
  constructor() {
    super();
    this.state = {
      message: "",
      heartRate: "98",
      bloodPressure: "120/80",
      O2Sat: "60"
    };

    // nearbyAPI.connect(API_KEYS.nearby);
    // console.log(API_KEYS.nearby);

  }
  // store.subscribe() => {

  // }
  // componentDidMount() {
  //   nearbyAPI.onConnected(message => {
  //     nearbyAPI.subscribe();
  //   });


  //   nearbyAPI.onFound(message => {
  //     this.setState({ message: message});
  //   });
  //   };

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.column}>
        <NetworkComp/>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.props.heartRate}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.props.bloodPressure}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.props.O2Sat}{'%'}</Text>
          </Text>
        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <View style = {{flex: 1, marginRight:0}}/>
            <Button
              title='Exit'
              // onPress={()=>{goBack(), Orientation.lockToPortrait();}}
            onPress={() => { goBack()}}
              
            />
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    heartRate: state.HeartRate,
    bloodPressure: state.bloodPressure,
    O2Sat: state.O2Sat
  }
}

module.exports = connect(mapStateToProps)(MonitorScreen);

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  filler: {
    // width: width*0.75,
    // height: height*0.2,
    width: '75%',
    height: '70%',
    backgroundColor: 'powderblue'
  },
  statusNumber: {
    // width: width*0.25,
    // height: height*0.20,
    width: '25%',
    // height: '%',
    fontSize: 45
  }
});
