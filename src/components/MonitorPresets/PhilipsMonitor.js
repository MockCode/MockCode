import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import VitalsInfo from './VitalsInfo';

export default class PhilipsMonitor extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.waveformSection}>
                    <View style={styles.heartRateWave}>
                    </View>
                    <View style={styles.oSatWave}>
                    </View>
                    <View style={styles.nbpInfo}>
                    </View>
                </View>
                <View style={styles.dataSection}>
                    <View style={styles.heartRateData}>
                        <VitalsInfo vitalSignName="HR" vitalRate={80} style={{color: '#48fb47'}}/>
                    </View>
                    <View style={styles.oSatData}>
                        <VitalsInfo vitalSignName="SpO2" vitalRate={95} style={{color: 'blue'}}/>
                    </View>
                    <View style={styles.nbpInfoExtra}>
                    </View>
                </View>
                <View style={styles.pulseSection}>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    waveformSection: {
        flex: 3,
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
        flex: 1,
        flexDirection: 'column'
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