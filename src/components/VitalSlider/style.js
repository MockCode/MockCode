import {StyleSheet} from "react-native";
import {moderateScale} from "../../utils/scaling"

export default StyleSheet.create({
    sliderContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        justifyContent: 'flex-start'
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
        alignSelf: 'center'
    },
    thumbStyle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35
    },
    trackStyle: {
        height: 2,
        borderRadius: 1,
    }
})