import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scaling';

export default class VitalInfo extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.vitalSignName}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
                    <Text style={this.props.style}>{this.props.vitalSignName}</Text>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'space-around', marginRight:'70%'}}>
                        <Text style={{color: 'green'}}>120</Text>
                        <Text style={{color: 'green', marginTop: '10%'}}>50</Text>
                    </View>
                </View>
            </View>
            <View style={styles.vitalRate}>
                <Text style={{fontSize: moderateScale(80), color: '#48fb47'}}>{this.props.vitalRate}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    vitalSignName: {
        flex: 1,
        flexDirection: 'row'
    },
    vitalRate: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})