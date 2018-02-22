import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';
import Orientation from "react-native-orientation"
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
  componentDidMount(){
    Orientation.lockToPortrait();
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
            onPress={()=> navigate('MonitorScreen')}
          />
          <Button
            title='Patient Face'
            onPress={()=>{}}
          />
        </View>
        <View style={styles.peers}>
          <PeerList data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}, {id: '11'}, {id: '12'} ]}/>
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
