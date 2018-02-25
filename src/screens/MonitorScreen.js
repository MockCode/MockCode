import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {API_KEYS} from '../api'
import { connect, Provider } from "react-redux";

import { NearbyAPI } from "react-native-nearby-api";
import { NetworkComp } from '../components/network';

import PropTypes from 'prop-types'

// const nearbyAPI = new NearbyAPI(true);

export default class MonitorScreen extends Component {
  static navigationOptions = {
    title: 'Monitor'
  }
  static propTypes = {
    prop: PropTypes
  }
  constructor() {
    super();
    this.state = {
      message: ""
    };
    // nearbyAPI.connect(API_KEYS.nearby);
    // console.log(API_KEYS.nearby);
    
  }
  // store.subscribe() => {

  // }
  // componentDidMount() {
  //   nearbyAPI.onConnected(message => {
  //     nearbyAPI.subscribe();
  //   });
      

  //   nearbyAPI.onFound(message => {
  //     this.setState({ message: message});
  //   });
  //   };

  render() {
    return (
      <View>
        <NetworkComp/>
        <Text>
          M:{this.props.heartRate}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heartRate: state.HeartRate
  }

}
module.exports = connect(mapStateToProps)(MonitorScreen);


// import React, { Component } from 'react'

// import { connect } from 'react-redux'

// export class MonitorScreen extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MonitorScreen)

