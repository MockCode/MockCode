import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  Platform
} from 'react-native';
import { Container, Content, Button, Text, Grid, Row, Col } from 'native-base';
import PeerList from '../components/PeerList';
import styles from "./styles/selectModeScreenStyle";

export default class SelectModeScreen extends Component {
  componentDidMount(){
    StatusBar.setHidden(false);
  }

  static navigationOptions = {
    title: 'Select Mode'
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <View style={{flex: 1, height: '100%'}}>
          <Grid>
            <Col></Col>
            <Col size={6}>
              <Row size={1} style={{alignSelf: 'center'}}>
                <Text style={[{fontSize: 50, marginTop: 10}, styles.menuTextColor]}> Mock Code </Text>
              </Row>
              <Row size={0.6}>
                <Col>
                <Text style={[{fontSize: 30}, styles.menuTextColor]}> Choose Interface </Text>
                <View style={styles.horizontalRuler}/>
                </Col>
              </Row>
              <Row size={2}>
                <Col style={{justifyContent: 'space-around'}}>
                  <Button style={styles.screenNavButton} full onPress={() => navigate('ControllerScreen')}>
                    <Text> Controller </Text>
                  </Button>
                  <Button style={styles.screenNavButton} full onPress={() => navigate('MonitorScreen')}>
                    <Text> Monitor </Text>
                  </Button>
                  <Button style={styles.screenNavButton} full onPress={() => navigate('PatientScreen')}>
                    <Text> Patient Face </Text>
                </Button>
                </Col>
              </Row>
              <Row size={0.6}>
                <Col>
                  <Text style={[{fontSize: 30}, styles.menuTextColor]}> Nearby </Text>
                  <View style={styles.horizontalRuler}/>                                         
                </Col>
              </Row>
              <Row size={5} style={{alignSelf: 'center', paddingHorizontal: '10%'}}>
                <PeerList data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}, {id: '11'}, {id: '12'} ]}/>
              </Row>
            </Col>
            <Col></Col>
          </Grid>
        </View>
      </Container>
    );
  };
}