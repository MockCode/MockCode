import React, { Component } from 'react';
import { Text, View, Slider } from 'react-native';

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider, Update_Value, ACTIONS} from '../redux/actions/nearbyActions'
import { NetworkComp } from '../components/network';


const API_KEY = API_KEYS.nearby;



export default class ControllerScreen extends Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 50,
      message: ""
    };

  }

  static navigationOptions = {
    title: 'Controller'
  }

  sliderUpdate(value) {
    this.state.sliderValue = value;
    // store.dispatch(Update_Slider(value.toString()))
    store.dispatch(Update_Value(ACTIONS.UPDATE_HEART_RATE, value));
    // TODO: implement redux action
  }
  render() {
    return (
      <View>
        <NetworkComp/>
        <Text>
          Controller Screen
        </Text>


        <Slider 
          value={this.state.sliderValue}
          onValueChange={value => this.setState({sliderValue: value})}
          minimumValue = {0}
          maximumValue = {220}
          step={1}
          onSlidingComplete={value => this.sliderUpdate(value)}
        />
        <Text>Value: {this.state.sliderValue}</Text>
        <Text> Message: {this.state.message}</Text>
      </View>
    )
  }
}
