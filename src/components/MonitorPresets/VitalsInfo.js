import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class VitalInfo extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{color: '#48fb47'}}>HR</Text>
                <Text>120</Text>
                <Text>50</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{fontSize: 80, color: '#48fb47'}}>{this.props.heartRate}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})