import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./style";
import { Text, View, Switch, ScrollView } from "react-native";
import { Update_Value, ACTIONS } from '../../redux/actions/nearbyActions';
import { Icon, Button} from 'native-base';
import Collapsible from 'react-native-collapsible';
import { moderateScale } from "../../utils/scaling";
import Slider from "react-native-slider"

const WAVE_FORMS = ["Normal Sinus Rhythm", "Ventricular Tachycardia",
                    "Ventricular Fibrillation"]

export class VitalSlider extends Component {
  constructor(props) {
    super(props);
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onWaveFormChange = this._onWaveFormChange.bind(this);
    this.state = {
      sliderValue: props.initialValue,
      switchValue: true,
      collapsed: true,
      waveForm: props.initialWaveForm
    };
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _onSliderChange = (value) => {
    this.setState({sliderValue: value});
  };

  _onSwitchChange = (value) => {
    this.setState({switchValue: value});
  }

  _onSlidingComplete = (value) => {
    if(this.props.actionType === ACTIONS.UPDATE_BLOOD_PRESSURE){
      store.dispatch(Update_Value(this.props.actionType, this.props.bpLevels[value]));      
    } else{
      store.dispatch(Update_Value(this.props.actionType, value));
    }
  }

  _onWaveFormChange = (value) => {
    this._toggleExpanded();
    this.setState({waveForm: value});
    store.dispatch(Update_Value(ACTIONS.UPDATE_WAVEFORM, value));
  }

  _renderSliderValue() {
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

  _renderWaveformSelector() {
    if(this.props.sliderName.indexOf("Heart Rate") !== -1){
      return(
        <Button rounded small iconLeft light onPress={this._toggleExpanded}
          style={style.waveFormSelect}>
          <Icon name='pulse' style={{marginRight: 10}}/>
        </Button>
      )
    }
  }

  _renderWaveFormCollapsible() {
    if(this.props.sliderName.indexOf("Heart Rate") !== -1){
      return(
        <Collapsible collapsed={this.state.collapsed}>
          <ScrollView horizontal contentContainerStyle={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button rounded small light style={style.waveFormButton}
              onPress={() => this._onWaveFormChange(WAVE_FORMS[0])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[0]}</Text>
            </Button>
            <Button rounded small light style={style.waveFormButton}
              onPress={() => this._onWaveFormChange(WAVE_FORMS[1])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[1]}</Text>
            </Button>
            <Button rounded small light style={style.waveFormButton}
              onPress={() => this._onWaveFormChange(WAVE_FORMS[2])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[2]}</Text>
            </Button>
          </ScrollView>
        </Collapsible>
      )
    }
  }

  render() {
    return (
      <View style={style.sliderContainer}>
        <View style={style.titleValueSwitch}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.sliderTitle}>{this.props.sliderName}</Text>
            {this._renderSliderValue()}
          </View>
          {this._renderWaveformSelector()}
          <Switch
            value = {this.state.switchValue}
            onValueChange={this._onSwitchChange}
            onTintColor="#1073ff"
            thumbTintColor="white"
            tintColor="#8c9199"
          /> 
        </View>
        <View style={style.slider}>
          <Slider
              disabled = {!this.state.switchValue}
              value={this.state.sliderValue}
              onValueChange={this._onSliderChange}
              minimumValue={this.props.min}
              maximumValue={this.props.max}
              onSlidingComplete={this._onSlidingComplete}
              step = {this.props.step}
              style = {{width: '80%', alignSelf: 'center'}}
              trackStyle={style.trackStyle}
              thumbStyle={style.thumbStyle}
              minimumTrackTintColor='#1073ff'
              maximumTrackTintColor='#b7b7b7'
            />
        </View>
      {this._renderWaveFormCollapsible()}
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