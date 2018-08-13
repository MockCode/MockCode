import React, { Component } from "react";
import {Text, View, StyleSheet} from "react-native";
import {Button} from 'native-base';
import { VitalSlider } from "../components/VitalSlider";
import {Update_Value, ACTIONS} from '../redux/actions/nearbyActions'
import { NetworkComp } from '../components/network';
import FaceButtonList from '../components/FaceButtonList';
import { moderateScale } from "../utils/scaling";
import {BLOOD_PRESSURE_LEVELS, WAVE_FORMS} from '../utils/constants';

export default class ControllerScreen extends Component {
  constructor() {
    super();
    this._compressionsChange = this._compressionsChange.bind(this);
    this.state = store.getState();
  }

  static navigationOptions = {
    title: "Controller"
  };

  waveformCallback = (value) => {
    store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, value));
    this.setState({Waveform: value});
  }

  _compressionsChange() {
    if(this.state.Waveform === "Compressions In-Progress"){
      this.setState({Waveform: WAVE_FORMS.NSR})
      store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, WAVE_FORMS.NSR));
    } else {
      this.setState({Waveform: WAVE_FORMS.CIP});
      store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, WAVE_FORMS.CIP));
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
            waveform={this.state.Waveform}
            waveformCallback={this.waveformCallback}
            sliderName="Heart Rate (BPM):"
            actionType={ACTIONS.UPDATE_HEART_RATE}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={60}
            max={100}
            initialValue={this.state.O2Sat}
            waveform={this.state.Waveform}
            sliderName="O2 Saturation %:"
            actionType={ACTIONS.UPDATE_O2SAT}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={0}
            max={15}
            initialValue={BLOOD_PRESSURE_LEVELS.indexOf(this.state.bloodPressure)}
            waveform={this.state.Waveform}
            sliderName="Blood Pressure:"
            actionType={ACTIONS.UPDATE_BLOOD_PRESSURE}
            bpLevels = {BLOOD_PRESSURE_LEVELS}
            style={styles.slider}
            step={1} />
          <VitalSlider
            min={0}
            max={50}
            initialValue={this.state.EtC02}
            waveform={this.state.Waveform}
            sliderName="EtCO2 (mmHg):"
            actionType={ACTIONS.UPDATE_ETCO2}
            style={styles.slider}
            step={1} />
        </View>
        <View style={styles.patientFaceControls}>
          <FaceButtonList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  sliders: {
    flex: 2
  },
  patientFaceControls: {
    flex: 1
  }
});
