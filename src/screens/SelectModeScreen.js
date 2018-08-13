import React, { Component } from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import { Container, Button, Text, Grid, Row, Col } from 'native-base';
import PeerList from '../components/PeerList';
import {moderateScale} from "../utils/scaling"
import { NetworkComp } from '../components/network';


export default class SelectModeScreen extends Component {
  componentDidMount(){
    StatusBar.setHidden(false);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <Grid>
            <Col></Col>
            <Col size={7}>
              <Row size={1} style={{alignSelf: 'center'}}>
                <Text style={[{fontSize: moderateScale(40)}, styles.menuText]}> Mock Code </Text>
              </Row>
              <Row size={0.6}>
                <Col>
                <Text style={[{fontSize: moderateScale(20)}, styles.menuText]}> Choose Interface </Text>
                <View style={styles.horizontalRuler}/>
                </Col>
              </Row>
              <Row size={2}>
                <Col style={{justifyContent: 'space-around'}}>
                  <Button bordered style={styles.screenNavButton} block onPress={() => navigate('ControllerScreen')}>
                    <Text> Controller </Text>
                  </Button>
                  <Button bordered style={styles.screenNavButton} block onPress={() => navigate('MonitorScreen')}>
                    <Text> Monitor </Text>
                  </Button>
                  <Button bordered style={styles.screenNavButton} block onPress={() => navigate('PatientScreen')}>
                    <Text> Patient Face </Text>
                </Button>
                </Col>
              </Row>
              <Row size={0.6}>
                <Col>
                  <Text style={[{fontSize: moderateScale(20)}, styles.menuText]}> Nearby </Text>
                  <View style={styles.horizontalRuler}/>                                         
                </Col>
              </Row>
              <Row size={3} style={{alignSelf: 'center', paddingHorizontal: '10%'}}>
                <PeerList/>
                {/* <PeerList data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}, {id: '11'}, {id: '12'} ]}/> */}
              </Row>
            </Col>
            <Col></Col>
          </Grid>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  horizontalRuler: {
    borderBottomWidth: 1,
    borderBottomColor: '#c2c4c6',
    width: '95%',
    alignSelf: 'center'
  },
  screenNavButton: {
      width: '60%',
      alignSelf: 'center',
  },
  menuText: {
      color: '#5b5e63',
  } 
});