import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Text, Button} from 'react-native';
import {Icon} from 'native-base';
import {connect} from "react-redux";
import Orientation from "react-native-orientation";
import { NetworkComp } from '../components/network';
import PhilipsMonitor from '../components/MonitorPresets/PhilipsMonitor';
import FadeInView from 'react-native-fade-in-view';
import PresetChangerArrow from '../components/MonitorPresets/PresetChangerArrow';

class MonitorScreen extends Component {
    constructor(props) {
        super(props);
        this.stopTouch = this.stopTouch.bind(this);
        this.state = {toggle: false};
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

    stopTouch(toggle) {
        this.setState({toggle: !toggle});
    }

    render() {
        return (
            <View 
                style={{flex: 1, flexDirection: 'row'}}
                onResponderRelease={() => this.stopTouch(this.state.toggle)}
                onStartShouldSetResponder={(e) => {return true}}>
                <NetworkComp />
                <PhilipsMonitor />
                <PresetChangerArrow
                    show={this.state.toggle}
                    arrow="chevron-left"
                    style={{left: Dimensions.get('window').width*(1/15),
                            top: Dimensions.get('window').height*(1/2.5)}}
                />
                <PresetChangerArrow
                    show={this.state.toggle}
                    arrow="chevron-right"
                    style={{left: Dimensions.get('window').width*(14/15),
                            top: Dimensions.get('window').height*(1/2.5)-5}}
                />
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