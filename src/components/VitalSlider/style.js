import {StyleSheet} from "react-native";

export default StyleSheet.create({
    sliderContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
        justifyContent: 'flex-start'
    },
    sliderSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sliderTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25
    },
    sliderValueText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})