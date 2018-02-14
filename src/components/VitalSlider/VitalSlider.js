import React, { Component } from "react";
import style from "./style";
import { Text, View, Slider } from "react-native";

export class VitalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }

  onSliderChange = value => {
    console.log(value);
    this.setState({
      value
    });
  };

  render() {
    return (
      <View>
        <Text>{this.props.sliderName}</Text>
        <Slider
          value={this.state.value}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          minimumValue={this.props.min}
          maximumValue={this.props.max}
        />
      </View>
    );
  }
}
