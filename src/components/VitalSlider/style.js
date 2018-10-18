import {StyleSheet} from "react-native";
import {moderateScale, scale} from "../../utils/scaling"

export default StyleSheet.create({
    sliderContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: '1.5%',
        justifyContent: 'space-around'
    },
    titleValueSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sliderTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: moderateScale(15)
    },
    sliderValueText: {
        marginLeft: '2%',
        fontSize: moderateScale(15),
        fontWeight: 'bold',
    },
    thumbStyleEnabled: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: moderateScale(30 / 2),
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35
    },
    thumbStyleDisabled: {
        width: 0,
        height: 0,
        borderRadius: 0
    },
    trackStyle: {
        height: 2,
        borderRadius: 1,
    }
})