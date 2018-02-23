import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { VitalSlider } from "../components/VitalSlider";

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider} from '../redux/actions/nearbyActions'

var {width, height} = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

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
    title: "Controller"
  };

  sliderUpdate(value) {
    this.state.sliderValue = value;
    store.dispatch(Update_Slider(value.toString()))
    // TODO: implement redux action
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sliders}>
          <VitalSlider min={0} max={100} sliderName="Slider 1" />
          <VitalSlider min={0} max={100} sliderName="Slider 2" />
          <VitalSlider min={0} max={100} sliderName="Slider 3" />
        </View>
        <View style={styles.patientFace}></View>
      </View>
    );
  }
}

// Define the layout for the controller screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  sliders: {
    flex:0.6
  },
  patientFace: {
    flex: 0.3
  }
})
