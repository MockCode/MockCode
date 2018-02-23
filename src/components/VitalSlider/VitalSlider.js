import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./style";
import { Text, View, Slider, Switch } from "react-native";

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

  render() {
    return (
      <View style={style.sliderContainer}>
        <View style={style.sliderSwitch}>
          <Text style={style.sliderTitle}>{this.props.sliderName}</Text>
          <Switch
            value = {this.state.switchValue}
            onValueChange={this.onSwitchChange}
          /> 
        </View>
        <Text style={style.sliderValueText}>
          {this.state.sliderValue}
        </Text>
        <Slider
          disabled = {!this.state.switchValue}
          value={this.state.sliderValue}
          onValueChange={this.onSliderChange}
          minimumValue={this.props.min}
          maximumValue={this.props.max}
          step = {this.props.step}
        />
      </View>
    );
  }
}

VitalSlider.propTypes = { 
  sliderName: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
  step: PropTypes.number
}

VitalSlider.defaultProps = {
  min: 0,
  max: 100
}