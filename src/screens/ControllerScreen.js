import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import {Button} from 'native-base';
import { VitalSlider } from "../components/VitalSlider";
import styles from "./styles/controllerScreenStyle"

import { NearbyAPI } from "react-native-nearby-api";
import {API_KEYS} from '../api'
import {Update_Slider, Update_Value, ACTIONS} from '../redux/actions/nearbyActions'
import { NetworkComp } from '../components/network';
import FaceButton from '../components/FaceButton';
import FaceButtonList from '../components/FaceButtonList';
import { moderateScale } from "../utils/scaling";
import {BLOOD_PRESSURE_LEVELS, WAVE_FORMS} from '../utils/constants';

const API_KEY = API_KEYS.nearby;


export default class ControllerScreen extends Component {
  constructor() {
    super();
    this._compressionsChange = this._compressionsChange.bind(this);
    this.state = store.getState();
  }

  static navigationOptions = {
    title: "Controller"
  };

  _compressionsChange() {
    if(this.state.Waveform === "Compressions In-Progress"){
      this.setState({Waveform: WAVE_FORMS[0]})
      store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, WAVE_FORMS[0]));
    } else {
      this.setState({Waveform: WAVE_FORMS[4]});
      store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, WAVE_FORMS[4]));
    }
  }

  _renderCompressionsInProgress(){
    if(this.state.Waveform === "Compressions In-Progress"){
      return(
        <Button block rounded info style={{marginTop: '2%', width: '70%', alignSelf: 'center'}}
          onPress={() => this._compressionsChange()}>
          <Text style={{fontWeight: 'bold', fontSize: moderateScale(15)}}>Compressions In-Progress</Text>
        </Button>
      )
    } else {
      return(
        <Button block rounded light style={{marginTop: '2%', width: '70%', alignSelf: 'center'}}
          onPress={() => this._compressionsChange()}>
          <Text style={{fontWeight: 'bold', fontSize: moderateScale(15), opacity: 0.15}}>Compressions In-Progress</Text>
        </Button>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NetworkComp/>
        <View>
        {this._renderCompressionsInProgress()}
        </View>
        <View style={styles.sliders}>
          <VitalSlider
            min={20} 
            max={300} 
            initialValue={this.state.HeartRate}
            waveForm={this.state.Waveform} 
            sliderName="Heart Rate (BPM):"
            actionType={ACTIONS.UPDATE_HEART_RATE}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={60}
            max={100}
            initialValue={80}
            initialValue={this.state.O2Sat} 
            sliderName="O2 Saturation %:"
            actionType={ACTIONS.UPDATE_O2SAT}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={0}
            max={15}
            initialValue={BLOOD_PRESSURE_LEVELS.indexOf(this.state.bloodPressure)} 
            sliderName="Blood Pressure:"
            actionType={ACTIONS.UPDATE_BLOOD_PRESSURE}
            bpLevels = {BLOOD_PRESSURE_LEVELS}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={0}
            max={50}
            initialValue={this.state.EtC02} 
            sliderName="EtCO2 (mmHg):"
            actionType={ACTIONS.UPDATE_ETCO2}
            style={styles.slider}
            step = {1} />
        </View>
        <View style={styles.patientFaceControls}>
          <FaceButtonList />
        </View>
      </View>
    );
  }
}
