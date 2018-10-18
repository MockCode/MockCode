import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {Container, Button, Text, Grid, Row, Col} from 'native-base';
import PeerList from '../components/PeerList/PeerList';
import styles from "./styles/selectModeScreenStyle";
import {moderateScale} from "../utils/scaling"
import {NetworkComp} from '../components/network';
import {connect} from 'react-redux';

class SelectModeScreen extends Component {
  componentDidMount(){
    StatusBar.setHidden(false);
  }

  static navigationOptions = {
    title: 'SelectModeScreen',
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <NetworkComp />
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
                <PeerList devices={this.props.devices}/>
              </Row>
            </Col>
            <Col></Col>
          </Grid>
      </Container>
    );
  };
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return {
    devices:state.NearbyApi.devices
  }
}

export default connect(mapStateToProps)(SelectModeScreen);
=======
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
>>>>>>> 516147b64b6687c10eb6d6d37c6b59a6d7187215
