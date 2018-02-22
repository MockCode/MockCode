import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { VitalSlider } from "../components/VitalSlider";

import { NearbyAPI } from "react-native-nearby-api";

const API_KEY = "AIzaSyC0MKwcDwSE8y552xvQQglZlCfacytfuBA";
const nearbyAPI = new NearbyAPI(true);

var {width, height} = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default class ControllerScreen extends Component {
  constructor() {
    super();
    this.state = {
      isConnected: false,
      nearbyMessage: null,
      connectText: "CONNECT",
      isPublishing: false,
      isSubscribing: false,
      sliderValue: 50,
      message: ""
    };
    nearbyAPI.connect(API_KEY);
  }

  componentDidMount() {
    console.log("Mounting ", NearbyAPI);
    nearbyAPI.onConnected(message => {
      console.log(message);
      nearbyAPI.isConnected((connected, error) => {
        this.setState({
          nearbyMessage: `Connected - ${message}`,
          isConnected: connected
        });
      });
    });

    nearbyAPI.onDisconnected(message => {
      console.log(message);
      this.setState({
        isConnected: false,
        nearbyMessage: `Disconnected - ${message}`
      });
    });

    nearbyAPI.onFound(message => {
      console.log("Message Found!");
      console.log(message);
      this.setState({ nearbyMessage: `Message Found - ${message}` });
      this.setState({ message: message });
    });

    nearbyAPI.onLost(message => {
      console.log("Message Lost!");
      console.log(message);
      this.setState({ nearbyMessage: `Message Lost - ${message}` });
    });

    nearbyAPI.onDistanceChanged((message, value) => {
      console.log("Distance Changed!");
      console.log(message, value);
      this.setState({
        nearbyMessage: `Distance Changed - ${message} - ${value}`
      });
    });

    nearbyAPI.onPublishSuccess(message => {
      nearbyAPI.isPublishing((status, error) => {
        this.setState({
          nearbyMessage: `Publish Success - ${message}`,
          isPublishing: status
        });
      });
    });

    nearbyAPI.onPublishFailed(message => {
      console.log(message);
      nearbyAPI.isPublishing((status, error) => {
        this.setState({
          nearbyMessage: `Publish Failed - ${message}`,
          isPublishing: status
        });
      });
    });

    nearbyAPI.onSubscribeSuccess(() => {
      nearbyAPI.isSubscribing((status, error) => {
        this.setState({
          nearbyMessage: `Subscribe Success`,
          isSubscribing: status
        });
      });
    });

    nearbyAPI.onSubscribeFailed(() => {
      nearbyAPI.isSubscribing((status, error) => {
        this.setState({
          nearbyMessage: `Subscribe Failed`,
          isSubscribing: status
        });
      });
    });
  }

  static navigationOptions = {
    title: "Controller"
  };

  sliderUpdate(value) {
    this.state.sliderValue = value;
    nearbyAPI.publish(value.toString());
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Controller Screen</Text>
        <Text>Is Connected: {`${this.state.isConnected}`}</Text> */}
        <VitalSlider min={0} max={100} sliderName="Slider 1" />
        <VitalSlider min={0} max={100} sliderName="Slider 2" />
        <VitalSlider min={0} max={100} sliderName="Slider 3" />
        <View style={styles.patientFace}></View>
      </View>
    );
  }
}

// Define the layout for the controller screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  sliders: {
    flex:0.6
  },
  patientFace: {
    flex: 0.3
  }
})
