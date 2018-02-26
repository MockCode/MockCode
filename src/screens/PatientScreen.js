import React, { Component } from 'react';

import {
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
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
    this.state = {showBack: false};
  }

  // This conditionally renders a floating overlay back button
  // https://stackoverflow.com/a/30268190/2379240
  _renderBack() {
    const {goBack} = this.props.navigation;
    if (this.state.showBack) {
      return (
        <View style={styles.backButton}>
          <Button
            title='Exit'
            onPress={()=>{goBack()}}
          />
        </View>
      );
    }
    else {
      return null;
    }
  }

  _toggleBack() {
    this.setState(previousState => {
      previousState.showBack = !previousState.showBack;
      return previousState;
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this._toggleBack()}
        style={styles.mockView}
        activeOpacity={1}
      >
        <Image
          source={require("../components/img/sick.png")}
          style={styles.mock}
        />
        {this._renderBack()}
      </TouchableOpacity>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    showBack: state.showBack
  }
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
    resizeMode: 'contain'
  },
  backButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});
