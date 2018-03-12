import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {NearbyAPI} from 'react-native-nearby-api'
import {API_KEYS} from '../api'
import {On_Message_Found} from '../redux/actions/nearbyActions'


export class NetworkComp extends Component {
  componentDidMount() {
    console.log("network was created");
    state = store.getState()
    var nearbyApi = state.NearbyApi.nearbyApi;
    // console.log(state);
    console.log(nearbyApi);
    if (nearbyApi != undefined) {
      // var nearbyApi = new NearbyAPI(true);
      // console.log(Platform.OS)
      if (Platform.OS != 'Jest') {
        nearbyApi.connect(API_KEYS.nearby)
      }
  
      nearbyApi.onConnected(message => {
        //TODO: dispatch successful connect action
        console.log("Connected to Nearby.");
        
        nearbyApi.subscribe();
      });
      nearbyApi.onSubscribeSuccess(() => {
        console.log("Subscribe Success.");
      });
      nearbyApi.onSubscribeFailed(() => {
        console.log("Subscribe failed.");
      });
      nearbyApi.onFound(message => {
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
