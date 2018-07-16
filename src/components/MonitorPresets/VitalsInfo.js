import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scaling';

export default class VitalInfo extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.vitalSignName}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <Text style={[this.props.style, {marginBottom: '-5%', fontWeight: 'bold'}]}>{this.props.vitalSignName}</Text>
                    <View style={{alignItems: 'flex-end', marginRight:'70%'}}>
                        <Text style={this.props.style}>120</Text>
                        <Text style={[this.props.style, {marginTop: '-15%'}]}>50</Text>
                    </View>
                </View>
            </View>
            <View style={styles.vitalRate}>
                <Text style={[{fontSize: moderateScale(80), fontWeight: 'bold'}, this.props.style]}>{this.props.vitalRate}</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    vitalSignName: {
        flex: 1,
        flexDirection: 'row'
    },
    vitalRate: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
    }
})