import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  Platform
} from 'react-native';
// import Orientation from "react-native-orientation"
import PeerList from '../components/PeerList'

export default class SelectModeScreen extends Component {
  // componentWillMount(){
  //   const initialOrientation = Orientation.getInitialOrientation();
  //   if (initialOrientation == 'PORTRAIT'){
  //     Orientation.lockToPortrait();
  //   } else {
  //     Orientation.lockToPortrait();
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = store.getState()
    devices = this.state.NearbyApi.devices
  }
  componentDidMount(){
    // if (Platform.OS != 'Jest') {
    //   Orientation.lockToPortrait();

    // }
    StatusBar.setHidden(false);
  }
  static navigationOptions = {
    title: 'Select Mode'
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.modes}>
          <Button
            title='Controller'
            onPress={() => navigate('ControllerScreen')}
          />
          <Button
            title='Vitals Monitor'
            onPress={() => navigate('MonitorScreen')}
          />
          <Button
            title='Patient Face'
            onPress={() => navigate('PatientScreen')}
          />
        </View>
        <View style={styles.peers}>
          <PeerList data={devices}/>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
  },
  modes: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    paddingHorizontal: '10%'
  },
  peers: {
    flex: 1,
    paddingHorizontal: '20%',
    paddingBottom: '10%'
  }
});
