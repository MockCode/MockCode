import {StyleSheet} from "react-native";

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
    slider: {
        flex: 0.6
    },
    sliderTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    },
    sliderValueText: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})