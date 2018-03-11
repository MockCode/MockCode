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
            <Col>
            </Col>
            <Col size={6}>
              <Row size={1} style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 50, color: '#8c8f93', marginTop: 10}}> Mock Code </Text>
              </Row>
              <Row size={0.6}>
                <Col>
                <Text style={{fontSize: 30, color: '#8c8f93'}}> Choose Interface </Text>
                <View style={{ borderBottomWidth: 1.5, borderBottomColor: '#c2c4c6', width: '95%', alignSelf: 'center'}}/>
                </Col>
              </Row>
              <Row size={0.1} style={{alignSelf: 'center'}}>
                
              </Row>
              <Row size={0.8} style={{alignSelf: 'center'}}>
                <Button style={{width: '50%'}} full onPress={() => navigate('ControllerScreen')}>
                  <Text> Controller </Text>
                </Button>
              </Row>
              <Row size={0.8} style={{alignSelf: 'center'}}>
                <Button style={{width: '50%'}}full onPress={() => navigate('MonitorScreen')}>
                  <Text> Monitor </Text>
                </Button>
              </Row>
              <Row size={0.8} style={{alignSelf: 'center'}}>
                <Button style={{width: '50%'}}full onPress={() => navigate('PatientScreen')}>
                  <Text> Patient Face </Text>
                </Button>
              </Row>
              <Row size={0.6}>
                <Col>
                  <Text style={{fontSize: 30, color: '#8c8f93'}}> Nearby </Text>
                  <View style={{ borderBottomWidth: 1, borderBottomColor: '#c2c4c6', width: '95%', alignSelf: 'center'}}/>                                         
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

{/* <Row>
<Text style={{fontSize: 40, color: '#b2b8c1'}}> Mock Code </Text>
</Row>
<Row size={0.5}>
<Text style={{color: '#b2b8c1'}}> Choose Interface </Text>  
</Row>
<Row>
<View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', width: '75%'}}/>
</Row>
<Row>
<Button rounded onPress={() => navigate('ControllerScreen')}>
  <Text> Controller </Text>
</Button>
</Row>
<Row size={1}>  
<Button rounded onPress={() => navigate('MonitorScreen')}>
  <Text> Vitals Monitor </Text>
</Button>
</Row>
<Row size={1}>
<Button rounded onPress={() => navigate('PatientScreen')}>
  <Text> Patient Face </Text>
</Button>
</Row>
<Row size={5}>
  <PeerList data={[{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}, {id: '7'}, {id: '8'}, {id: '9'}, {id: '10'}, {id: '11'}, {id: '12'} ]}/>
</Row> */}