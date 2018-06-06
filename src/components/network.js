import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {NearbyAPI} from 'react-native-nearby-api'
import {API_KEYS} from '../api'
import {On_Message_Found, ACTIONS} from '../redux/actions/nearbyActions'
import DeviceInfo from 'react-native-device-info'


export class NetworkComp extends Component {
  componentDidMount() {
    state = store.getState()
    var nearbyApi = state.NearbyApi.nearbyApi;
    if (nearbyApi != undefined) {

      if (Platform.OS != 'Jest') {
        nearbyApi.connect(API_KEYS.nearby)
      }
  
      nearbyApi.onConnected(message => {
        //TODO: dispatch successful connect action
        console.log("Connected to Nearby.");
        nearbyApi.subscribe();
      });
  
      nearbyApi.onSubscribeSuccess(() => {
        let m = {type:ACTIONS.HELLO_REQUEST, message: DeviceInfo.getDeviceName()}
        nearbyApi.publish(JSON.stringify(m));
        // console.log(m)
      })
      nearbyApi.onPublishSuccess(message => {
        // console.log(message, "psucess");
      });
      nearbyApi.onFound(message => {
        // console.log(message);
        store.dispatch(On_Message_Found(message));
      });

    }


  };
  
  componentWillUnmount() {
    console.log("network is about to be destroyed");
    // TODO: unsubscribe and disconnect
  };

  render() {
    return (
      null
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(componentName)
