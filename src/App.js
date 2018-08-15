import React, { Component} from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import MockApp from './redux/reducer';
import {API_KEYS} from './api'
import RootNavigator from './navigation'
import {Root} from 'native-base'

export const nearbyAPI_KEY = API_KEYS.nearby;
store = createStore(MockApp, applyMiddleware(thunkMiddleware))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <RootNavigator />
        </Root>
      </Provider>
    );
  }
}