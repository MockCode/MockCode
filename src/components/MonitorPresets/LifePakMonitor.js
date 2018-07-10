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
                <Text>HR</Text>
                <View style={{marginLeft: '42.5%'}}>
                    <Clock/>
                </View>
            </View>

            <View style={styles.heartRateSection}>
                <View style={styles.heartRateData}>
                    <Icon
                        type="FontAwesome"
                        name="bell"
                        style={{color: '#80ff80', fontSize: moderateScale(30), marginTop: '2%'}} />
                    <Text style={{fontSize: moderateScale(100), fontWeight: 'bold', color: '#80ff80', marginTop: '-12.5%'}}>
                        {69}
                    </Text>
                </View>

                <View style={styles.heartRateWave}>
                {/* TODO: Place heart wave renderer here. */}
                </View>
            </View>

            <View style={styles.o2SatSection}>
                <View style={styles.o2SatData}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey'}}>
                        <Text>SpO2</Text>
                        <Text>%</Text>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Icon
                            type="FontAwesome"
                            name="bell"
                            style={{color: '#15f4ee', fontSize: moderateScale(30), marginTop: '2%'}} />
                        <Text style={{fontSize: moderateScale(100), fontWeight: 'bold', marginTop: '-12.5%', color: '#15f4ee'}}>
                        {95}
                        </Text>
                    </View>
                </View>

                <View style={styles.o2SatWave}>

                </View>
            </View>

            <View style={styles.co2Section}>
                <View style={styles.co2Data}>

                </View>

                <View style={styles.co2Wave}>

                </View>
            </View>
        </View>
        );
    }
}

const o2SatStyle = StyleSheet.create({

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
    heartRateWave: {
        flex: 4,
    },
    o2SatData: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: moderateScale(2.5),
        borderColor: 'grey'
    },
    o2SatWave: {
        flex: 4,
    },
    co2Data: {
        flex: 1,
        borderRightWidth: moderateScale(2.5),
        borderColor: 'grey'
    },
    co2Wave: {
        flex: 4,
    }
})
