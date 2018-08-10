// Taken from react-native-size-matters mini library for scaling to other devices
// https://github.com/nirsky/react-native-size-matters/blob/master/lib/scalingUtils.js
// Date Taken: Tuesday March 13, 2018
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')

// We will base our scale off
const BASE_WIDTH = 350;
const BASE_HEIGHT = 680;

const scale = (size) => width / BASE_WIDTH * size;
const verticalScale = (size) => height / BASE_HEIGHT * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};