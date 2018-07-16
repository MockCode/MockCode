import React, { Component} from 'react';
import {connect, Provider } from "react-redux";
import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import MockApp from './redux/reducers/nearbyReducer'
import {API_KEYS} from './api'
import RootNavigator from './navigation'
import {Root} from 'native-base'

export const nearbyAPI_KEY = API_KEYS.nearby;

function mapStateToProps(state) {
  return state;
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(Actions, dispatch);
// }
// module.exports = connect(mapStateToProps)(RootNavigator);
store = createStore(MockApp, applyMiddleware(thunkMiddleware))

export default class App extends Component {
  constructor() {
    super();
  }
  
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