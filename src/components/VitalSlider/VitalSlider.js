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
    this.state = {
      sliderValue: props.initialValue,
      switchValue: true
    };
  }

  onSliderChange = (value) => {
    this.setState({sliderValue: value});
  };

  onSwitchChange = (value) => {
    this.setState({switchValue: value});
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
      return(
        <HeartRhythmSelector />
      )
    }
  }

  render() {
    return (
      <Container>
      <View style={style.sliderContainer}>
        <View style={style.sliderSwitch}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.sliderTitle}>{this.props.sliderName}</Text>
            {this.renderSliderValue()}
          </View>
          <View style={{bottom: 5}}>
            {this.renderWaveFormSelector()}
          </View>
          <Switch style={{}}
            value = {this.state.switchValue}
            onValueChange={this.onSwitchChange}
          /> 
        </View>
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
      </Container>
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