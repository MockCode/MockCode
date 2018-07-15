import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import VitalsInfo from './VitalsInfo';
import { moderateScale } from '../../utils/scaling';
import PropTypes from 'prop-types';
import WaveformCanvas from '../Waveform/WaveformCanvas';

export default class PhilipsMonitor extends React.PureComponent{
    render() {
        return (
            <View style={styles.container}>
                {/* This view contains the column where any waveforms are drawn
                    for certain vital signs (e.g., heart rate). */}
                <View style={styles.waveformSection}>
                    <View style={styles.heartRateWave}>
                    {/* TODO: PLACE HEART WAVE RENDERER HERE */}
                    </View>
                    <View style={styles.oSatWave}>
                    {/* TODO: PLACE O2SAT RENDERER HERE */}
                    </View>
                    <View style={styles.nbpInfo}>
                        <View style={{flex: 0.8}}>
                            <Text style={bpInfoStyle.nbpLeftText}>NBP</Text>
                            <View>
                                <Text style={bpInfoStyle.sysDiaMeanText}>Sys.</Text>
                                <Text style={bpInfoStyle.sysDiaMeanText}>Dia.</Text>
                                <Text style={bpInfoStyle.sysDiaMeanText}>Mean</Text>
                            </View>
                        </View>
                        <View style={{flex: 3, backgroundColor: 'black'}}>
                            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{fontSize:moderateScale(20), color: '#EBB0D7'}}>Pulse</Text>
                                <Text style={{marginRight: '20%'}}>Man</Text>
                            </View> */}
                            <Text style={bpInfoStyle.nbpValueLarge}>{this.props.bloodPressure}</Text>
                        </View>
                        <View style={{flex : 1.5, alignItems: 'center'}}>
                            <Text style={bpInfoStyle.nbpRightText}>NBP</Text>
                            <Text style={bpInfoStyle.mmHgText}>mmHg</Text>
                        </View>
                    </View>
                </View>
                {/* This view contains the column where all of the current vital sign
                    values are shown (middle column), along with the vital sign name. */}
                <View style={styles.dataSection}>
                    <View style={styles.heartRateData}>
                        <VitalsInfo 
                            vitalSignName="HR"
                            vitalRate={this.props.heartRate}
                            style={{color: '#80ff80'}}
                        />
                    </View>
                    <View style={styles.oSatData}>
                        <VitalsInfo 
                            vitalSignName="SpO2" 
                            vitalRate={this.props.O2Sat} 
                            style={{color: '#15f4ee'}}
                        />
                    </View>
                    <View style={styles.nbpInfoExtra}>
                        <Text style={bpInfoStyle.nbpInfoExtraText}>{this.props.bloodPressure}</Text>
                    </View>
                </View>
                {/* View to contain the right side of monitor, where the pulse of
                    patient is shown as determined by the O2Sat. */}
                <View style={styles.pulseSection}>
                    <View style={{flex: 1.4, backgroundColor: 'black', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{flexDirection: 'column', margin: '5%'}}>
                                <Text style={pulseStyle.pulseText}>Pulse</Text>
                                <View style={pulseStyle.squareGraphic}>
                                </View>
                            </View>
                            <Text style={pulseStyle.pulseValue}>{this.props.O2Sat}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'black'}}>
                    </View>
                </View>
            </View>
        );
    }
}

PhilipsMonitor.propTypes = {
    heartRate: PropTypes.number.isRequired,
    bloodPressure: PropTypes.string.isRequired,
    O2Sat: PropTypes.number.isRequired
}

const bpInfoStyle = StyleSheet.create({
    sysDiaMeanText: {
        fontSize: moderateScale(18),
        marginTop: '-7%',
        marginLeft: '2%',
        color: '#8A2BE2'
    },
    nbpLeftText: {
        fontSize: moderateScale(25),
        marginLeft: '2%',
        color: '#ffe6f3',
        fontWeight: 'bold'
    },
    nbpRightText: {
        fontSize: moderateScale(25),
        color :'#ffe6f3',
        fontWeight: 'bold'
    },
    mmHgText: {
        fontSize: moderateScale(18),
        color :'#8A2BE2'
    },
    nbpValueLarge: {
        fontSize: moderateScale(80),
        color: '#ffe6f3',
        fontWeight: 'bold'
    },
    nbpInfoExtraText: {
        fontSize: moderateScale(25),
        color: '#ffe6f3'
    }
})

const pulseStyle = StyleSheet.create({
    squareGraphic: {
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: 5,
        backgroundColor: 'white'
    },
    pulseText: {
        color: 'white',
        fontSize: moderateScale(18)
    },
    pulseValue: {
        fontSize: moderateScale(60),
        color: 'white'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    waveformSection: {
        flex: 3.5,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    dataSection: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },
    pulseSection: {
        flex: 1.5,
        flexDirection: 'column',
    },
    heartRateWave: {
        flex: 1,
        flexDirection: 'row'
    },
    heartRateData: {
        flex: 1,
        flexDirection: 'row',
    },
    oSatWave: {
        flex: 1,
        flexDirection: 'row'
    },
    oSatData: {
        flex: 1,
        flexDirection: 'row',
    },
    nbpInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    nbpInfoExtra: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    },
})