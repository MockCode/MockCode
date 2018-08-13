import React from 'react'
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {moderateScale} from '../../utils/scaling';
import Clock from './Clock';

export default class LikePakMonitor extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={textStyle.hrText}>HR</Text>
                <View style={{marginLeft: '42.5%'}}>
                </View>
            </View>

            <View style={styles.heartRateSection}>
                <View style={styles.heartRateData}>
                    <View style = {{flex: 1}}>
                        <Icon
                            type="FontAwesome"
                            name="bell"
                            style={{color: '#80ff80', fontSize: moderateScale(20), marginTop: '5%'}} />
                    </View>
                    <View style={{flex: 4.5, justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                        <Text style={[textStyle.vitalValueText, {color: '#80ff80'}]}>
                            {this.props.heartRate}
                        </Text>
                    </View>
                </View>

                <View style={styles.waveSection}>
                {/* TODO: Place heart wave renderer here. */}
                </View>
            </View>

            <View style={styles.o2SatSection}>
                <View style={styles.o2SatData}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey'}}>
                        <Text style={textStyle.o2SatText}>SpO2</Text>
                        <Text style={[textStyle.o2SatText, {marginRight: '2%'}]}>%</Text>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                            <Icon
                                type="FontAwesome"
                                name="bell"
                                style={{color: '#15f4ee', fontSize: moderateScale(20), marginTop: '5%'}} />
                        </View>
                        <View style={{flex: 4.5, justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <Text style={[textStyle.vitalValueText, {color: '#15f4ee'}]}>
                            {this.props.O2Sat}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.waveSection}>
                {/* TODO: Place o2sat wave renderer here. */}
                </View>
            </View>

            <View style={styles.co2Section}>
                <View style={styles.co2Data}>

                </View>

                <View style={styles.waveSection}>
                {/* TODO: Place co2 renderer here. */}
                </View>
            </View>
        </View>
        );
    }
}

const textStyle = StyleSheet.create({
    hrText: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#80ff80',
        marginLeft: '0.5%'
    },
    o2SatText: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: '#15f4ee',
        marginLeft: '2.5%'
    },
    vitalValueText: {
        fontWeight: 'bold',
        fontSize: moderateScale(60)
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'    
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'grey'
    },
    heartRateSection: {
        flex: 4,
        flexDirection: 'row',
    },
    o2SatSection: {
        flex: 5,
        flexDirection: 'row'
    },
    co2Section: {
        flex: 4,
        flexDirection: 'row'
    },
    heartRateData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRightWidth: moderateScale(2.5),
        borderColor: 'grey'
    },
    o2SatData: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: moderateScale(2.5),
        borderColor: 'grey'
    },
    co2Data: {
        flex: 1,
        borderRightWidth: moderateScale(2.5),
        borderColor: 'grey'
    },
    waveSection: {
        flex: 4
    }
})
