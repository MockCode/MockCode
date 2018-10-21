import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from '../../utils/scaling';

export default class VitalInfo extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.vitalSignName}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <Text style={[this.props.style, textStyles.vitalSignText]}>
                        {this.props.vitalSignName}
                    </Text>
                    <View style={{alignItems: 'flex-end', marginRight:'70%'}}>
                        <Text
                            style={[this.props.style,
                                    {fontSize: moderateScale(11)}
                            ]}
                        >
                            {120}
                        </Text>
                        <Text
                            style={[this.props.style,
                                    {marginTop: '-10%'},
                                    {fontSize: moderateScale(11)}
                            ]}
                        >
                            {50}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.vitalRate}>
                <Text style={[textStyles.vitalRateText, this.props.style]}>
                    {this.props.vitalRate}
                </Text>
            </View>
        </View>
        );
    }
}

const textStyles = StyleSheet.create({
    vitalSignText: {
        fontSize: moderateScale(12),
        marginBottom: '-2.5%',
        fontWeight: 'bold'
    },
    vitalRateText: {
        fontSize: moderateScale(60),
        fontWeight: 'bold'
    }
})

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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})
