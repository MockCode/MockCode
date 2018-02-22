import React, { Component } from 'react';
import { Text, View, Dimensions, TextInput, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import {API_KEYS} from '../api'
import Orientation from "react-native-orientation";
import { NearbyAPI } from "react-native-nearby-api";
import navigation from '../navigation';
import SelectModeScreen from './SelectModeScreen';

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
    Orientation.lockToLandscape();
    // StatusBar.setHidden(true);
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
  // componentDidMount() {
  //   nearbyAPI.onConnected(message => {
  //     nearbyAPI.subscribe();
  //   });
      

  //   nearbyAPI.onFound(message => {
  //     this.setState({ message: message});
  //   });
  //   };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.state.heartRate}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.state.bloodPressure}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.filler} />
          <Text style = {styles.statusNumber}>
          <Text>{this.state.O2Sat}{'%'}</Text>
          </Text>
        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <View style = {{flex: 1, marginRight:0}}/>
            <Button
              title='Exit'
              onPress={()=>navigate("SelectModeScreen")}
            />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  filler: {
    width: width*0.7,
    height: height*0.25,
    backgroundColor: 'powderblue'
  },
  statusNumber: {
    width: width*0.3,
    height: height*0.2,
    fontSize: 55
  }
});