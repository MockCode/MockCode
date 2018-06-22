import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableHighlight, Dimensions, Button, Text} from 'react-native';
import {connect} from "react-redux";
import Orientation from "react-native-orientation";
import { NetworkComp } from '../components/network';
import PhilipsMonitor from '../components/MonitorPresets/PhilipsMonitor';

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
        const renderTimeStyleProps = {
            top: Dimensions.get('window').height*(1/2.5),
            opacity: this.state.toggle ? 1 : 0
        }
        return (
            <View 
                style={{flex: 1, flexDirection: 'row'}}
                onResponderRelease={() => this.stopTouch(this.state.toggle)}
                onStartShouldSetResponder={(e) => {return true}}>
                <View style={[styles.presetChangers, renderTimeStyleProps,
                    {left: Dimensions.get('window').width*(1/15)}]}>
                    <TouchableHighlight onPress={() => console.log("CLICKED")}>
                        <Text>BRO</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.presetChangers, renderTimeStyleProps,
                    {left: Dimensions.get('window').width*(14/15),
                    opacity: this.state.toggle ? 1 : 0}]}/>
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

const styles = StyleSheet.create({
    presetChangers: {
        flex: 1,
        backgroundColor: 'blue',
        position: 'absolute',
        width: 25,
        height: 70,
        zIndex: 100
    }
});