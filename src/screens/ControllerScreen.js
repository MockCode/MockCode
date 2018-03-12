import React, { Component } from "react";
import { Text, View } from "react-native";
import { VitalSlider } from "../components/VitalSlider";
import styles from "./styles/controllerScreenStyle"

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider, Update_Value, ACTIONS} from '../redux/actions/nearbyActions'
import { NetworkComp } from '../components/network';

const API_KEY = API_KEYS.nearby;

const bloodPressureLevels = ["62/40", "68/42", "76/46" , "88/50", "92/52", "98/54", "102/56",
                             "108/58", "112/60", "120/78", "134/82", "144/88", "164/96",
                             "192/98", "242/112", "284/122"];


export default class ControllerScreen extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  static navigationOptions = {
    title: "Controller"
  };

  render() {
    return (
      <View style={styles.container}>
        <NetworkComp/>        
        <View style={styles.sliders}>
          <VitalSlider
            min={20} 
            max={300} 
            initialValue={this.state.HeartRate} 
            sliderName="Heart Rate (BPM):"
            actionType={ACTIONS.UPDATE_HEART_RATE}
            step={1} />
          <VitalSlider 
            min={60} 
            max={100}
            initialValue={this.state.O2Sat} 
            sliderName="O2 Saturation %:"
            actionType={ACTIONS.UPDATE_O2SAT}
            step={1} />
          <VitalSlider 
            min={0} 
            max={15}
            initialValue={bloodPressureLevels.indexOf(this.state.bloodPressure)} 
            sliderName="Blood Pressure:"
            actionType={ACTIONS.UPDATE_BLOOD_PRESSURE}
            bpLevels = {bloodPressureLevels}
            step={1} />
          <VitalSlider 
            min={0} 
            max={50} 
            initialValue={this.state.EtC02} 
            sliderName="EtCO2 (mmHg):"
            actionType={ACTIONS.UPDATE_ETCO2}
            step = {1} />
        </View>
        <View style={styles.patientFace}>
        </View>
      </View>
    );
  }
}


