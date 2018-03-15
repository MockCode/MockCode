// Taken from react-native-size-matters mini library for scaling to other devices
// https://github.com/nirsky/react-native-size-matters/blob/master/lib/scalingUtils.js
// Date Taken: Tuesday March 13, 2018
import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')

// We will base our scale off
const guidelineBaseWidth = 720;
const guidelineBaseHeight = 1280;

const scale = (size) => width / guidelineBaseWidth * size;
const verticalScale = (size) => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.75) => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};