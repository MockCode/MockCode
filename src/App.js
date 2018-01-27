import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import RootNavigator from './navigation'

export default class App extends React.Component<{}> {
  render() {
    return (
        <RootNavigator />
    );
  }
}
