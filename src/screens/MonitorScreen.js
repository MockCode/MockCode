import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import {API_KEYS} from '../api'

import { NearbyAPI } from "react-native-nearby-api";

// const nearbyAPI = new NearbyAPI(true);

var {height, width} = Dimensions.get('window');

export default class MonitorScreen extends Component {
  static navigationOptions = {
    title: 'Monitor'
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
  // componentDidMount() {
  //   nearbyAPI.onConnected(message => {
  //     nearbyAPI.subscribe();
  //   });
      

  //   nearbyAPI.onFound(message => {
  //     this.setState({ message: message});
  //   });
  //   };

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: width*0.7, height: height*0.2, backgroundColor: 'powderblue'}} />
          <Text style = {{width: width*0.3, height: height*0.2, fontSize: 60}}>
          <Text>{this.state.heartRate}</Text>
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: width*0.7, height: height*0.2, backgroundColor: 'powderblue'}} />
          <Text style = {{width: width*0.3, height: height*0.2, fontSize: 60}}>
          <Text>{this.state.bloodPressure}</Text>
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: width*0.7, height: height*0.2, backgroundColor: 'powderblue'}} />
          <Text style = {{width: width*0.3, height: height*0.2, fontSize: 60}}>
          <Text>{this.state.O2Sat}{'%'}</Text>
          </Text>
        </View>
      </View>
    );
  }
};