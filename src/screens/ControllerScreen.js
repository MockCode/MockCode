import React, { Component } from "react";
import { Text, View } from "react-native";
import { VitalSlider } from "../components/VitalSlider";
import styles from "./styles/controllerScreenStyle"

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider} from '../redux/actions/nearbyActions'

const API_KEY = API_KEYS.nearby;

const bloodPressureLevels = ["62/40", "68/42", "76/46" , "88/50", "92/52", "98/54", "102/56",
                             "108/58", "112/60", "120/78", "134/82", "144/88", "164/96",
                             "192/98", "242/112", "284/122"];

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
          <VitalSlider
            min={20} 
            max={300} 
            initialValue={70} 
            sliderName="Heart Rate (BPM)"
            step={1} />
          <VitalSlider 
            min={60} 
            max={100}
            initialValue={80} 
            sliderName="O2 Saturation %"
            step={1} />
          <VitalSlider 
            min={0} 
            max={15}
            initialValue={8} 
            sliderName="Blood Pressure"
            bpLevels = {bloodPressureLevels}
            step={1} />
          <VitalSlider 
            min={0} 
            max={50} 
            initialValue={25} 
            sliderName="EtCO2 (mmHg)"
            step = {1} />
        </View>
        <View style={styles.patientFace}>
        </View>
      </View>
    );
  }
}


