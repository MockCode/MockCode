import React, { Component } from 'react';
import { Text } from 'react-native';
import {API_KEYS} from '../api'

import { NearbyAPI } from "react-native-nearby-api";



// const nearbyAPI = new NearbyAPI(true);

export default class MonitorScreen extends Component {
  static navigationOptions = {
    title: 'Monitor'
  }
  constructor() {
    super();
    this.state = {
      message: ""
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
      <Text>
        M:{this.state.message}
      </Text>
    )
  }
}
