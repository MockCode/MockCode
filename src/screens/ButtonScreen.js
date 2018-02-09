import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class ButtonScreen extends Component {
  static navigationOptions = {
    title: 'Button'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>
          This goes to the next page.
        </Text>
        <Button
          onPress={() => navigate('dest')}
          title="Go"
        />

        <Button
          onPress={() => navigate('Controller')}
          title="Controller"
        />

        <Button
          onPress={() => navigate('Monitor')}
          title="Monitor"
        />
      </View>
    );
  }
}
