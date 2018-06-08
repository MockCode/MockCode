import React, {PureComponent} from 'react';
import {Icon, Button} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from "../../utils/scaling"
import {WAVE_FORMS} from '../../utils/constants';
import PropTypes from 'prop-types';

class WaveFormSelector extends PureComponent{
  render() {
    var inputProps = {
      rounded: true,
      small: true,
      iconLeft: true,
    }

    switch(this.props.waveform){
      case WAVE_FORMS.NSR: // Normal Sinus Rhythm
        inputProps.success = true;
        break;
      case WAVE_FORMS.VTC: // Ventricular Tachycardia
        inputProps.info = true;
        break;
      case WAVE_FORMS.VTF: // Ventricular Fibrillation
        inputProps.warning = true;
        break;
      case WAVE_FORMS.PEA: // PEA/Asystole
        inputProps.danger = true;
        break;
      case WAVE_FORMS.CIP: // Compressions In-Progress
        inputProps.disabled = true;
        inputProps.light = true;
        break;
      default:
        inputProps.light = true;
        break;
    }

    return (
      <Button {...inputProps} onPress={this.props.toggleCallback}
        style={[style.waveFormSelect, inputProps.disabled ? {opacity : 0.1} : {}]}>
        <Icon name='pulse'/>
        <Text style={style.waveFormSelectText}>{this.props.waveform}</Text>
      </Button>
    )
  }
}

const style = StyleSheet.create({
  waveFormSelect: {
    height: moderateScale(40)
  },
  waveFormSelectText: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: '1%',
    paddingRight: '1%'
  }
})

WaveFormSelector.propTypes = {
  waveform: PropTypes.string.isRequired,
  toggleCallback: PropTypes.func.isRequired
}

export default WaveFormSelector;