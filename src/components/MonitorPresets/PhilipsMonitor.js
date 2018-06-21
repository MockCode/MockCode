import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import VitalsInfo from './VitalsInfo';
import { moderateScale } from '../../utils/scaling';

export default class PhilipsMonitor extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* This view contains the column where any waveforms are drawn
                    for certain vital signs (e.g., heart rate). */}
                <View style={styles.waveformSection}>
                    <View style={styles.heartRateWave}>
                    </View>
                    <View style={styles.oSatWave}>
                    </View>
                    <View style={styles.nbpInfo}>
                        <View style={{flex: 0.5}}>
                            <Text>NBP</Text>
                            <Text>Sys.</Text>
                            <Text>Dia.</Text>
                            <Text>Mean</Text>
                        </View>
                        <View style={{flex: 2, backgroundColor: 'green'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Pulse</Text>
                            <Text style={{marginRight: '7%'}}>Man</Text>
                            </View>
                            <Text style={{fontSize: moderateScale(80)}}>{"118/83"}</Text>
                        </View>
                        <View style={{flex : 1.5}}>
                        </View>
                    </View>
                </View>
                {/* This view contains the column where all of the current vital sign
                    values are shown (middle column), along with the vital sign name. */}
                <View style={styles.dataSection}>
                    <View style={styles.heartRateData}>
                        <VitalsInfo 
                            vitalSignName="HR"
                            vitalRate={97}
                            style={{color: '#48fb47'}}
                        />
                    </View>
                    <View style={styles.oSatData}>
                        <VitalsInfo 
                            vitalSignName="SpO2" 
                            vitalRate={95} 
                            style={{color: '#15f4ee'}}
                        />
                    </View>
                    <View style={styles.nbpInfoExtra}>
                    </View>
                </View>
                {/* View to contain the right side of monitor, where the pulse of
                    patient is shown as determined by the O2Sat. */}
                <View style={styles.pulseSection}>
                    <View style={{flex: 1.4, backgroundColor: 'black', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{flexDirection: 'column', margin: '5%'}}>
                                <Text style={{color: 'white', fontSize: moderateScale(18)}}>Pulse</Text>
                                <View style={{width: moderateScale(35), height: moderateScale(35), borderRadius: 5, backgroundColor: 'white'}}>
                                </View>
                            </View>
                            <Text style={{fontSize: moderateScale(60), color: 'white'}}>{95}</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'black'}}>
                    </View>
                </View>
            </View>
        );
    }
}

const pulseStyle = StyleSheet.create({
    
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
    },
    dataSection: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'green'
    },
    pulseSection: {
        flex: 1.5,
        flexDirection: 'column',
    },
    heartRateWave: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    heartRateData: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange'
    },
    oSatWave: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    oSatData: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    nbpInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'purple'
    },
    nbpInfoExtra: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
})