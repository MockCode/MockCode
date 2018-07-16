import React, {PureComponent} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import {moderateScale} from "../../utils/scaling"
import Collapsible from 'react-native-collapsible';
import {WAVE_FORMS} from '../../utils/constants';
import PropTypes from 'prop-types';


class WaveFormCollapsible extends PureComponent{
    render() {
        return (
        <Collapsible collapsed={this.props.collapsed}>
          <ScrollView horizontal contentContainerStyle={style.viewContainer}>
            <Button rounded small success style={style.waveFormButton}
              onPress={() => this.props.onWaveformSelect(WAVE_FORMS.NSR)}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS.NSR}</Text>
            </Button>
            <Button rounded small info style={style.waveFormButton}
              onPress={() => this.props.onWaveformSelect(WAVE_FORMS.VTC)}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS.VTC}</Text>
            </Button>
            <Button rounded small warning style={style.waveFormButton}
              onPress={() => this.props.onWaveformSelect(WAVE_FORMS.VTF)}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS.VTF}</Text>
            </Button>
            <Button rounded small danger style={style.waveFormButton}
              onPress={() => this.props.onWaveformSelect(WAVE_FORMS.PEA)}>
              <Text style={style.waveFormButtonText}>{WAVE_FORMS.PEA}</Text>
            </Button>
          </ScrollView>
        </Collapsible>
        )
    }
}

const style = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  waveFormButton: {
    height:moderateScale(40),
    margin: '0.5%'
  },
  waveFormButtonText: {
    fontSize: moderateScale(15, 0.9),
    paddingLeft: '1%',
    paddingRight: '1%',
    color: 'black'
  }
})

WaveFormCollapsible.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onWaveformSelect: PropTypes.func.isRequired
}

export default WaveFormCollapsible;
