import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./style";
import { Text, View, Switch, ScrollView } from "react-native";
import { Update_Value, ACTIONS } from '../../redux/actions/nearbyActions';
import { Icon, Button} from 'native-base';
import Collapsible from 'react-native-collapsible';
import { moderateScale } from "../../utils/scaling";
import Slider from "react-native-slider"
import {WAVE_FORMS, NSR_VALUES} from '../../utils/constants';

export class VitalSlider extends Component {
  constructor(props) {
    super(props);
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onWaveformChange = this._onWaveformChange.bind(this);
    this.state = {
      sliderValue: props.initialValue,
      switchValue: true,
      collapsed: true,
      waveform: props.waveform
    };
  }

  // All vital sliders need to be aware of the current waveform
  // selected, and thus will receive new props of the current
  // waveform selected by the user
  componentWillReceiveProps(newProps) {
    this.setState({waveform: newProps.waveform});
    this._onWaveformChange(newProps.waveform);
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

  _onWaveformSelect = (value) => {
    this._toggleExpanded();
    this.props.waveformCallback(value);
  }

  // This method is called when the waveform is changed
  // in the global state of the app.
  _onWaveformChange = (value) => {

    // This is where the handling of which parameters are available
    // for tuning based on the waveform is handled.
    // E.g., NSR allows tuning of all available sliders, whereas
    // VF, PEA/Asystole, and Compr. In-Prog allow only movement of 
    // sliders (parameter values).
    switch(value) {
      case WAVE_FORMS[0]: // Normal Sinus Rhythm
        this.setState({switchValue: true});
        if(this.props.sliderName.indexOf("Heart Rate") !== -1){
          this.setState({sliderValue: NSR_VALUES.HEART_RATE});
          store.dispatch(Update_Value(ACTIONS.UPDATE_HEART_RATE, NSR_VALUES.HEART_RATE));
        }

        if(this.props.sliderName.indexOf("O2 Saturation") !== -1){
          this.setState({sliderValue: NSR_VALUES.O2_SAT});
          store.dispatch(Update_Value(ACTIONS.UPDATE_O2SAT, NSR_VALUES.O2_SAT));
        }

        if(this.props.sliderName.indexOf("Blood Pressure") !== -1){
          this.setState({sliderValue: NSR_VALUES.BP});
          store.dispatch(Update_Value(ACTIONS.UPDATE_BLOOD_PRESSURE, NSR_VALUES.BP));
        }

        if(this.props.sliderName.indexOf("EtCO2") !== -1){
          this.setState({sliderValue: NSR_VALUES.ET_CO2});
          store.dispatch(Update_Value(ACTIONS.UPDATE_ETCO2, NSR_VALUES.ET_CO2));
        }
        break;
      case WAVE_FORMS[1]: // Ventricular Tachycardia
        if(this.props.sliderName.indexOf("Heart Rate") !== -1){
          this.setState({sliderValue: 184, switchValue: false});
          store.dispatch(Update_Value(this.props.actionType, 184));
        } else {
          this.setState({switchValue: true});
        }
        break;
      case WAVE_FORMS[2]: // Ventricular Fibrillation
      case WAVE_FORMS[3]: // PEA/Asystole
      case WAVE_FORMS[4]: // Compressions In-Progress
        this.setState({switchValue: false});
        break;
      default:
        throw "ERROR: Waveform change callback, encountered unexpected waveform!"
        break;
    }
  }

  _renderSliderValue() {
    let sliderValue = ""
    if(this.state.waveform === WAVE_FORMS[0] || this.state.waveform === WAVE_FORMS[1]){
      if(this.props.sliderName.indexOf("Blood Pressure") !== -1){
        sliderValue = this.props.bpLevels[this.state.sliderValue];
      } else {
        sliderValue = this.state.sliderValue;
      }

    } else {
      sliderValue = "---";
    }

    return(
      <Text style={style.sliderValueText}> {sliderValue} </Text>
    )
  }

  _renderWaveformSelector() {
    if(this.props.sliderName.indexOf("Heart Rate") !== -1 && this.state.collapsed == true){
      var inputProps = {
        rounded: true,
        small: true,
        iconLeft: true,
      }

      switch(this.state.waveform){
        case WAVE_FORMS[0]: // Normal Sinus Rhythm
          inputProps.success = true;
          break;
        case WAVE_FORMS[1]: // Ventricular Tachycardia
          inputProps.info = true;
          break;
        case WAVE_FORMS[2]: // Ventricular Fibrillation
          inputProps.warning = true;
          break;
        case WAVE_FORMS[3]: // PEA/Asystole
          inputProps.danger = true;
          break;
        case WAVE_FORMS[4]: // Compressions In-Progress
          inputProps.disabled = true;
          inputProps.light = true;
          break;
        default:
          inputProps.light = true;
          break;
      }

      return(
        <Button {...inputProps} onPress={this._toggleExpanded}
          style={[style.waveFormSelect, inputProps.disabled ? {opacity : 0.1} : {}]}>
          <Icon name='pulse' style={{}}/>
          <Text style={style.waveFormSelectText}>{this.state.waveform}</Text>
        </Button>
      )
    }
  }

  _renderWaveFormCollapsible() {
    if(this.props.sliderName.indexOf("Heart Rate") !== -1){
      return(
        <Collapsible collapsed={this.state.collapsed}>
          <ScrollView horizontal contentContainerStyle={{flex: 1, justifyContent: 'space-around'}}>
            <Button rounded small success style={style.waveFormButton}
              onPress={() => this._onWaveformSelect(WAVE_FORMS[0])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[0]}</Text>
            </Button>
            <Button rounded small info style={style.waveFormButton}
              onPress={() => this._onWaveformSelect(WAVE_FORMS[1])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[1]}</Text>
            </Button>
            <Button rounded small warning style={style.waveFormButton}
              onPress={() => this._onWaveformSelect(WAVE_FORMS[2])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[2]}</Text>
            </Button>
            <Button rounded small danger style={style.waveFormButton}
              onPress={() => this._onWaveformSelect(WAVE_FORMS[3])}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS[3]}</Text>
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
            tintColor="#babdc1"
          /> 
        </View>
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
            thumbStyle={this.state.switchValue ? style.thumbStyleEnabled : style.thumbStyleDisabled}
            minimumTrackTintColor={this.state.switchValue ? '#1073ff' : "#b7b7b7"}
            maximumTrackTintColor='#b7b7b7'
        />
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
  waveform: PropTypes.string.isRequired,
  step: PropTypes.number,
  bpLevels: PropTypes.arrayOf(PropTypes.string)
}