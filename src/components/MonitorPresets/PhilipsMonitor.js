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
                    <View style={styles.respRateWave}>
                    </View>
                </View>
                <View style={styles.dataSection}>
                    <View style={styles.heartRateData}>
                        <VitalsInfo heartRate={97}/>
                    </View>
                    <View style={styles.oSatData}>
                    </View>
                    <View style={styles.respRateData}>
                    </View>
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
        height: '100%',
        width: '100%'
    },
    waveformSection: {
        flex: 2,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    },
    dataSection: {
        flex: 1.1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'green'
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
    respRateWave: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'purple'
    },
    respRateData: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
})