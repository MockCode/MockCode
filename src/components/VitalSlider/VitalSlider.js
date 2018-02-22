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
      sliderValue: 50,
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
      <View style={style.sliderView}>
        <Text style={style.sliderTitle}>{this.props.sliderName}</Text>
        <Switch
          style = {style.enableSwitch}
          value = {this.state.switchValue}
          onValueChange={this.onSwitchChange}
        /> 
        <Slider
          style={style.slider}
          value={this.state.sliderValue}
          onValueChange={this.onSliderChange}
          minimumValue={this.props.min}
          maximumValue={this.props.max}
        />
      </View>
    );
  }
}

VitalSlider.propTypes = { 
  sliderName: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

VitalSlider.defaultProps = {
  min: 0,
  max: 100
}