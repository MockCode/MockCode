import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { NearbyAPI } from "react-native-nearby-api";

import RootNavigator from './navigation'

// const nearbyAPI = new NearbyAPI(true);

const API_KEY = "AIzaSyC0MKwcDwSE8y552xvQQglZlCfacytfuBA";

const nearbyAPI = new NearbyAPI(true);

export default class App extends React.Component<{}> {
  constructor() {
    super();
    nearbyAPI.connect(API_KEY);
  }
  render() {
    return (
        <RootNavigator />
    );
  }
}



// const API_KEY = "MY_API_KEY";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isConnected: false,
//       nearbyMessage: null,
//       connectText: "CONNECT",
//       isPublishing: false,
//       isSubscribing: false
//     };
//   }

//   componentDidMount() {
//     console.log("Mounting ", NearbyAPI);
//     nearbyAPI.onConnected(message => {
//       console.log(message);
//       nearbyAPI.isConnected((connected, error) => {
//         this.setState({
//           nearbyMessage: `Connected - ${message}`,
//           isConnected: connected
//         });
//       });
//     });
//     nearbyAPI.onDisconnected(message => {
//       console.log(message);
//       this.setState({
//         isConnected: false,
//         nearbyMessage: `Disconnected - ${message}`
//       });
//     });
//     nearbyAPI.onFound(message => {
//       console.log("Message Found!");
//       console.log(message);
//       this.setState({ nearbyMessage: `Message Found - ${message}` });
//     });
//     nearbyAPI.onLost(message => {
//       console.log("Message Lost!");
//       console.log(message);
//       this.setState({ nearbyMessage: `Message Lost - ${message}` });
//     });
//     nearbyAPI.onDistanceChanged((message, value) => {
//       console.log("Distance Changed!");
//       console.log(message, value);
//       this.setState({
//         nearbyMessage: `Distance Changed - ${message} - ${value}`
//       });
//     });
//     nearbyAPI.onPublishSuccess(message => {
//       nearbyAPI.isPublishing((status, error) => {
//         this.setState({
//           nearbyMessage: `Publish Success - ${message}`,
//           isPublishing: status
//         });
//       });
//     });
//     nearbyAPI.onPublishFailed(message => {
//       console.log(message);
//       nearbyAPI.isPublishing((status, error) => {
//         this.setState({
//           nearbyMessage: `Publish Failed - ${message}`,
//           isPublishing: status
//         });
//       });
//     });
//     nearbyAPI.onSubscribeSuccess(() => {
//       nearbyAPI.isSubscribing((status, error) => {
//         this.setState({
//           nearbyMessage: `Subscribe Success`,
//           isSubscribing: status
//         });
//       });
//     });
//     nearbyAPI.onSubscribeFailed(() => {
//       nearbyAPI.isSubscribing((status, error) => {
//         this.setState({
//           nearbyMessage: `Subscribe Failed`,
//           isSubscribing: status
//         });
//       });
//     });
//   }

//   _connectPress = () => {
//     if (this.state.isConnected) {
//       nearbyAPI.disconnect();
//       nearbyAPI.isConnected((connected, error) => {
//         this.setState({
//           nearbyMessage: `Disconnected`,
//           isConnected: connected
//         });
//       });
//     } else {
//       nearbyAPI.connect(API_KEY);
//     }
//   };

//   _publishPress = () => {
//     if (!this.state.isPublishing) {
//       nearbyAPI.publish(`Hello World! - ${Math.random()}`);
//     } else {
//       nearbyAPI.unpublish();
//       nearbyAPI.isPublishing((status, error) => {
//         this.setState({
//           nearbyMessage: `unpublished`,
//           isPublishing: status
//         });
//       });
//     }
//   };

//   _subscribePress = () => {
//     if (!this.state.isSubscribing) {
//       nearbyAPI.subscribe();
//     } else {
//       nearbyAPI.unsubscribe();
//       nearbyAPI.isSubscribing((status, error) => {
//         this.setState({
//           nearbyMessage: `unsubscribed`,
//           isSubscribing: status
//         });
//       });
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to react-native-nearby-api test app!
//         </Text>
//         <Text style={styles.instructions}>
//           Is Connected: {`${this.state.isConnected}`}
//         </Text>
//         <Text style={styles.instructions}>
//           Is Publishing: {`${this.state.isPublishing}`}
//         </Text>
//         <Text style={styles.instructions}>
//           Is Subscribing: {`${this.state.isSubscribing}`}
//         </Text>
//         <Text style={styles.instructions}>{this.state.nearbyMessage}</Text>
//         <TouchableOpacity onPress={this._connectPress}>
//           <Text style={styles.connectButton}>
//             {this.state.isConnected ? "DISCONNECT" : "CONNECT"}
//           </Text>
//         </TouchableOpacity>
//         <View style={{ height: 32 }} />
//         <TouchableOpacity onPress={this._publishPress}>
//           <Text style={styles.connectButton}>
//             {this.state.isPublishing ? "UNPUBLISH" : "PUBLISH"}
//           </Text>
//         </TouchableOpacity>
//         <View style={{ height: 32 }} />
//         <TouchableOpacity onPress={this._subscribePress}>
//           <Text style={styles.connectButton}>
//             {this.state.isSubscribing ? "UNSUBSCRIBE" : "SUBSCRIBE"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   connectButton: {
//     fontSize: 30,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
