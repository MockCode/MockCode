import React, { Component } from 'react';
import { Animated, Text, View, Dimensions, TextInput, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import {connect} from "react-redux";
// import Orientation from "react-native-orientation";
import { NetworkComp } from '../components/network';
import WaveformCanvas from "../components/Waveform/WaveformCanvas";

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
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
    <View style={styles.column}>
                <NetworkComp/>
                <View style={styles.row}>
                    <View style={styles.surfaceView} >
                      {/* <WaveformCanvas /> */}
                    </View>
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
                    <View style={styles.surfaceView} >
                      {/* <WaveformCanvas /> */}
                    </View>
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
                    <View style={styles.surfaceView} >
                      {/* <WaveformCanvas /> */}
                    </View>
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
        width: '72%',
        height: '92%',
        marginBottom: '8%',
        marginRight: '3%'
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
