import React, { Component } from 'react';

import { Image, StyleSheet, View } from 'react-native';
import { connect, Provider } from "react-redux";
import Orientation from "react-native-orientation";
import { NearbyAPI } from "react-native-nearby-api";

import PropTypes from 'prop-types'

export default class PatientScreen extends Component {
  componentDidMount(){
    Orientation.lockToPortrait();
  }

  static navigationOptions = {
    title: 'Patient',
    header: null
  }

  constructor() {
    super();
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.mockView}>
        <Image
          source={require("../components/img/sick.png")}
          style={styles.mock}
        />
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return { }
}

module.exports = connect(mapStateToProps)(PatientScreen);

const styles = StyleSheet.create({
  mockView: {
    flex: 1
  },
  mock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: undefined,
    height: undefined,
    // transform: [{scaleX: 0.5}, {scaleY: 0.5}],
    resizeMode: 'contain'
  }
});
