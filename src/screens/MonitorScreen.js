import React, { Component } from 'react';

import { Shaders, Node, GLSL } from 'gl-react';
import { AnimatedSurface, Surface } from "gl-react-native"; // for React Native
import { Animated, Text, View, Dimensions, TextInput, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import { connect, Provider } from "react-redux";
// import Orientation from "react-native-orientation";
import { NearbyAPI } from "react-native-nearby-api";

import {API_KEYS} from '../api'
import { NetworkComp } from '../components/network';
import navigation from '../navigation';
import SelectModeScreen from './SelectModeScreen';
// import { NetworkComp } from '../components/network';

import WaveformCanvas from "../components/WaveformCanvas";
// const nearbyAPI = new NearbyAPI(true);

var {height, width} = Dimensions.get('window');

export default class MonitorScreen extends Component {
    // componentWillMount(){
    //   const initialOrientation = Orientation.getInitialOrientation();
    //   if (initialOrientation == 'PORTRAIT'){
    //     Orientation.lockToLandscape();
    //   } else {
    //     Orientation.lockToLandscape();
    //   }
    // }
    
    componentDidMount(){
        StatusBar.setHidden(true);
        // Orientation.lockToLandscape();
    }

    static navigationOptions = {
        title: 'Monitor',
        header: null
    }
    constructor() {
        super();
        this.state = {
            message: "",
            heartRate: "98",
            bloodPressure: "120/80",
            O2Sat: "60"
        };

        // nearbyAPI.connect(API_KEYS.nearby);
        // console.log(API_KEYS.nearby);

    }
    // store.subscribe() => {

    // }
    // componentDidMount() {
    //   nearbyAPI.onConnected(message => {
    //     nearbyAPI.subscribe();
    //   });


    //   nearbyAPI.onFound(message => {
    //     this.setState({ message: message});
    //   });
    //   };


    render() {
        const { goBack } = this.props.navigation;
        return (
    <View style={styles.column}>
                <NetworkComp/>
                <View style={styles.row}>
                    <WaveformCanvas />
                    <View style={styles.column}>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>HR</Text>
                            </Text>
                        </View>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>{this.props.heartRate}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <WaveformCanvas />
                    <View style={styles.column}>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>BP</Text>
                            </Text>
                        </View>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>{this.props.bloodPressure}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <WaveformCanvas />
                    <View style={styles.column}>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>O2Sat</Text>
                            </Text>
                        </View>
                        <View style = {styles.row}>
                            <Text style = {styles.statusNumber}>
                                <Text>{this.props.O2Sat}{'%'}</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0, flexDirection: 'row'}}>
                    <View style = {{flex: 1, marginRight:0}}/>
                        <Button
                            title='Exit'
                            // onPress={()=>{goBack(), Orientation.lockToPortrait();}}
                            onPress={() => { goBack()}}

                        />
                </View>
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

module.exports = connect(mapStateToProps)(MonitorScreen);

const styles = StyleSheet.create({
    surface : {
        width: '100%',
        height: '100%'
    },
    surfaceView : {
        width: '75%',
        height: '92%',
        marginBottom: '8%'
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1c2321'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    statusNumber: {
        fontFamily: 'Helvetica',
        color: '#eef1ef',
        fontSize: 45
    }
});
