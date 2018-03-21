import {StyleSheet} from "react-native";
import {moderateScale} from "../../utils/scaling"

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
        fontSize: moderateScale(25)
    },
    sliderValueText: {
        marginLeft: 10,
        fontSize: moderateScale(25),
        fontWeight: 'bold',
    },
    thumbStyle: {
        width: moderateScale(30),
        height: moderateScale(30),
        borderRadius: moderateScale(30 / 2),
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35
    },
    trackStyle: {
        height: 2,
        borderRadius: 1,
    },
    waveFormSelect: {
        width: moderateScale(100), 
        flexDirection: 'row', 
        justifyContent:'center',
        marginTop: 5
    },
    waveFormButton: {
        margin: '0.5%'
    },
    waveFormButtonText: {
        fontSize: moderateScale(15),
        margin: 5,
        color: 'black'
    }
})