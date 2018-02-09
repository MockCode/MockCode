import React, { Component } from 'react';
import { Text } from 'react-native';

import { NearbyAPI } from "react-native-nearby-api";


const API_KEY = "AIzaSyC0MKwcDwSE8y552xvQQglZlCfacytfuBA";

const nearbyAPI = new NearbyAPI(true);

export default class MonitorScreen extends Component {
  static navigationOptions = {
    title: 'Monitor'
  }
  constructor() {
    super();
    this.state = {
      isConnected: false,
      nearbyMessage: null,
      connectText: "CONNECT",
      isPublishing: false,
      isSubscribing: false,
      sliderValue: 50,
      message: ""
    };
    nearbyAPI.connect(API_KEY);
    
  }
  componentDidMount() {
    nearbyAPI.onConnected(message => {
      nearbyAPI.subscribe();
    });
      

    nearbyAPI.onFound(message => {
      this.setState({ message: message});
    });
    };

  render() {
    return (
      <Text>
        M:{this.state.message}
      </Text>
    )
  }
}
