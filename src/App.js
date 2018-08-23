import React, { Component} from 'react';
import {Provider} from "react-redux";
import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import MockApp from './redux/reducers/nearbyReducer'
import {API_KEYS} from './api'
import RootNavigator from './navigation'
import {Root} from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

export const nearbyAPI_KEY = API_KEYS.nearby;
const {height, width} = Dimensions.get('window')

store = createStore(MockApp, applyMiddleware(thunkMiddleware))

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    console.log(width);
    return (
      <Provider store={store}>
        <Root>
          <RootNavigator />
        </Root>
      </Provider>
    );
  }
}



EStyleSheet.build({
  $rem:  (width / 50)
});