import React from 'react'
import {Text, View} from 'react-native';

export default class TestMonitor extends React.PureComponent {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'orange'}}>
                <Text style={{fontSize: 100}}>TEST MONITOR!</Text>
            </View>
        );
    }
}