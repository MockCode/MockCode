import React, { Component } from 'react';
import { Text, View, Slider } from 'react-native';

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider} from '../redux/actions/nearbyActions'


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
    store.dispatch(Update_Slider(value.toString()))
    // TODO: implement redux action
  }
  render() {
    return (
      <View>
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
