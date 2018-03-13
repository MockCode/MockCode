import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./style";
import { Text, View, Switch, Slider } from "react-native";
import { Update_Value, ACTIONS } from '../../redux/actions/nearbyActions';
import { HeartRhythmSelector } from '../HeartRhythmSelector';
import {Container} from 'native-base';

// May use this open source slider later on to customize UI better
//import Slider from "react-native-slider"

export class VitalSlider extends Component {
  constructor(props) {
    super(props);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.onWaveFormChange = this.onWaveFormChange.bind(this);
    this.state = {
      sliderValue: props.initialValue,
      switchValue: true,
      waveForm: props.initialWaveForm
    };
  }

  onSliderChange = (value) => {
    this.setState({sliderValue: value});
  };

  onSwitchChange = (value) => {
    this.setState({switchValue: value});
  }

  onWaveFormChange = (value) => {  
    this.setState({waveForm: value});
    console.log("WaveForm: ", this.state.waveForm);
  }

  onSlidingComplete = (value) => {
    if(this.props.actionType === ACTIONS.UPDATE_BLOOD_PRESSURE){
      store.dispatch(Update_Value(this.props.actionType, this.props.bpLevels[value]));      
    } else{
      store.dispatch(Update_Value(this.props.actionType, value));
    }
  }

  renderSliderValue() {
    if(this.props.sliderName.indexOf("Blood Pressure") !== -1){
      return(
        <Text style={style.sliderValueText}>
          {this.props.bpLevels[this.state.sliderValue]}
        </Text>
      )
    } else {
      return(
        <Text style={style.sliderValueText}>
        {this.state.sliderValue}
        </Text>
      )
    }

  }

  renderWaveFormSelector() {
    if(this.props.sliderName.indexOf("Heart Rate") !== -1){
      return (
        <View style={{flexDirection: 'row'}}>
        <HeartRhythmSelector onValueChange={this.onWaveFormChange} />
        <Text style={{alignSelf: 'center', fontWeight: 'bold', marginLeft: 10, fontSize: 17, color: 'black'}}> Current: {this.state.waveForm} </Text>                
        </View>
      );
    }
  }

  render() {
    return (
      <View style={style.sliderContainer}>
        <View style={style.titleValueSwitch}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.sliderTitle}>{this.props.sliderName}</Text>
            {this.renderSliderValue()}
          </View>
          {this.renderWaveFormSelector()}
          <Switch
            value = {this.state.switchValue}
            onValueChange={this.onSwitchChange}
          /> 
        </View>
        <View style={style.slider}>
          <Slider
            disabled = {!this.state.switchValue}
            value={this.state.sliderValue}
            onValueChange={this.onSliderChange}
            minimumValue={this.props.min}
            maximumValue={this.props.max}
            onSlidingComplete={this.onSlidingComplete}
            step = {this.props.step}
          />
        </View>
      </View>
    );
  }
}

VitalSlider.propTypes = { 
  sliderName: PropTypes.string.isRequired,
  actionType: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
  step: PropTypes.number,
  bpLevels: PropTypes.arrayOf(PropTypes.string)
}

VitalSlider.defaultProps = {
  min: 0,
  max: 100
}