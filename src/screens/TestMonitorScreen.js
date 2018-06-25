import React, { Component } from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity, Dimensions, Text, Button} from 'react-native';
import {Icon} from 'native-base';
import {connect} from "react-redux";
import Orientation from "react-native-orientation";
import { NetworkComp } from '../components/network';
import PhilipsMonitor from '../components/MonitorPresets/PhilipsMonitor';
import FadeInView from 'react-native-fade-in-view';

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
                {this.state.toggle &&
                <FadeInView 
                    duration={750}
                    style={[styles.presetChangers,
                    {left: Dimensions.get('window').width*(1/15),
                     top: Dimensions.get('window').height*(1/2.5)}]}>
                    <TouchableOpacity style={styles.presetChangerButton}>
                        <Icon
                            type='MaterialIcons'
                            name='chevron-left'
                            style={{color: 'white'}}
                        />
                    </TouchableOpacity>
                </FadeInView>
                }
                {this.state.toggle &&
                <FadeInView
                    duration={750}
                    style={[styles.presetChangers,
                        {left: Dimensions.get('window').width*(14/15),
                         top: Dimensions.get('window').height*(1/2.5)-5}]}>
                    <TouchableOpacity style={styles.presetChangerButton}>
                        <Icon
                        type='MaterialIcons'
                        name='chevron-right'
                        style={{color: 'white'}} />
                    </TouchableOpacity>
                </FadeInView>
                }
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
        position: 'absolute',
        width: 25,
        height: 80,
        zIndex: 100
    },
    presetChangerButton: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.4,
        justifyContent: 'center',
        borderRadius: 5
    }
});