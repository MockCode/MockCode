import React, { Component } from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {connect} from "react-redux";
import Orientation from "react-native-orientation";
import { NetworkComp } from '../components/network';
import PhilipsMonitor from '../components/MonitorPresets/PhilipsMonitor';

class MonitorScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Monitor',
        header: null
    }

    componentDidMount(){
        StatusBar.setHidden(true);
        Orientation.lockToLandscape();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
        Orientation.unlockAllOrientations();
    }

    render() {
        return (
            <View style={{flex: 1}}>
            <NetworkComp />
            <PhilipsMonitor />
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        heartRate: state.HeartRate,
        bloodPressure: state.bloodPressure,
        O2Sat: state.O2Sat
    }
}

export default connect(mapStateToProps)(MonitorScreen);
