import {StyleSheet} from "react-native";

export default StyleSheet.create({
    sliderContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        justifyContent: 'flex-start'
    },
    sliderSwitch: {
        flexDirection: 'row'
    },
    sliderTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    },
    sliderValueText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})