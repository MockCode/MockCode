// import React from 'react';

/*
 * This is the database of data points for specific waveforms.
 * We store a base number of waves for each required waveform and render multiples 
 * of them, allowing us to render specific rates accurately
 * 
 * rateRange: the range of renderable bpm for the given waveform
 * duration: duration each respective wave in the snippet in ms
 * totalDuration: total duration of the snippet in ms
 * nPoints: number of points in the duration
 * nWaves: number of waves in the snippet
 * minWaveWidth: smallest width of wave that encapsulates most of the necessary data 
 *    represented as either minimum width in points or maximum skip in points
 * compressionPolicy: the way we compress the waveform. NB: this is "mod" or "skip"
 *    skip skips over elements to compress the wave with similar spacing up to 
 *    minWaveWidth points skipped, 
 *    mod removes data from the end of the wave down to minWaveWidth points
 *    When compressionPolicy is mod, minWaveWidth represents the width, when it is skip, minWaveWidth represents the maximum number of points that can be skipped before too much clarity is lost
 * range: the minimum and maximum y values of the given waveform snippet
 * dataPoints: array of the data points for the snippet
 *
 */
export var waveformData = {
  'HR':{
    'TEST':{
      'rateRange': [20, 300],
      'duration': [400],
      'totalDuration': 400,
      'nPoints': 10,
      'nWaves': 1,
      'minWaveWidth': 2,
      'compressionPolicy': 'mod',
      'range': {
        'min': 0,
        'max': 1
      },
      'dataPoints': [1,0,0,0,0,0,0,0,0,0]
    },
    'NSR-SIMPLE': {
      'rateRange': [20, 300],
      'duration': [800],
      'totalDuration': 800,
      'nPoints': 60,
      'nWaves': 1,
      'minWaveWidth': 10,
      'compressionPolicy': 'mod',
      'range': {
        'min': -0.78,
        'max': 0.455
      },
      'dataPoints' : [0.28, 0.28, 0.335, 0.455, 0.22, -0.78, 0.165, 0.33, 0.325, 0.34, 0.335, 0.345, 0.32, 0.34, 0.33, 0.325, 0.335, 0.355, 0.335, 0.335, 0.34, 0.345, 0.355, 0.35, 0.36, 0.355, 0.365, 0.355, 0.34, 0.295, 0.25, 0.23, 0.24, 0.25, 0.265, 0.28, 0.28, 0.265, 0.275, 0.305, 0.305, 0.295, 0.305, 0.29, 0.3, 0.325, 0.31, 0.3, 0.295, 0.29, 0.27, 0.22, 0.23, 0.23, 0.21, 0.3, 0.315, 0.345, 0.355, 0.345]
    },
    'NSR': {
      'rateRange': [20, 300],
      'duration': [800],
      'totalDuration': 800,
      'nPoints': 300,
      'nWaves': 1,
      'minWaveWidth': 35,
      'compressionPolicy': 'mod',
      'range': {
        'min': -0.535,
        'max': 0.94
      },
      'dataPoints' : [-0.275, -0.28, -0.285, -0.305, -0.29, -0.3, -0.28, -0.29, -0.3, -0.315, -0.32, -0.335, -0.36, -0.385, -0.385, -0.405, -0.455, -0.485, -0.485, -0.425, -0.33, -0.22, -0.07, 0.12, 0.375, 0.62, 0.78, 0.84, 0.765, 0.52, 0.17, -0.165, -0.365, -0.435, -0.425, -0.37, -0.33, -0.325, -0.335, -0.345, -0.33, -0.325, -0.315, -0.31, -0.32, -0.335, -0.34, -0.325, -0.345, -0.335, -0.33, -0.335, -0.33, -0.325, -0.33, -0.33, -0.345, -0.355, -0.335, -0.325, -0.305, -0.32, -0.32, -0.33, -0.34, -0.335, -0.34, -0.345, -0.355, -0.355, -0.34, -0.33, -0.33, -0.33, -0.34, -0.35, -0.325, -0.325, -0.33, -0.33, -0.335, -0.335, -0.34, -0.33, -0.34, -0.35, -0.355, -0.35, -0.345, -0.33, -0.32, -0.335, -0.33, -0.345, -0.33, -0.335, -0.335, -0.345, -0.345, -0.355, -0.34, -0.34, -0.335, -0.33, -0.35, -0.35, -0.345, -0.335, -0.335, -0.335, -0.35, -0.355, -0.355, -0.345, -0.345, -0.335, -0.35, -0.36, -0.36, -0.36, -0.365, -0.36, -0.37, -0.385, -0.37, -0.36, -0.355, -0.36, -0.375, -0.375, -0.365, -0.365, -0.36, -0.36, -0.365, -0.37, -0.355, -0.33, -0.325, -0.325, -0.335, -0.34, -0.315, -0.3, -0.3, -0.29, -0.295, -0.29, -0.285, -0.275, -0.255, -0.25, -0.25, -0.265, -0.255, -0.245, -0.23, -0.245, -0.245, -0.255, -0.255, -0.24, -0.25, -0.255, -0.245, -0.255, -0.25, -0.25, -0.265, -0.26, -0.26, -0.265, -0.27, -0.265, -0.26, -0.275, -0.28, -0.29, -0.275, -0.27, -0.26, -0.28, -0.28, -0.285, -0.275, -0.275, -0.265, -0.27, -0.285, -0.29, -0.28, -0.275, -0.285, -0.28, -0.3, -0.3, -0.305, -0.295, -0.3, -0.31, -0.31, -0.305, -0.295, -0.285, -0.285, -0.29, -0.295, -0.31, -0.29, -0.295, -0.3, -0.305, -0.31, -0.325, -0.31, -0.3, -0.29, -0.31, -0.325, -0.33, -0.315, -0.3, -0.305, -0.31, -0.32, -0.33, -0.325, -0.315, -0.31, -0.305, -0.305, -0.31, -0.3, -0.305, -0.29, -0.3, -0.3, -0.305, -0.305, -0.29, -0.28, -0.295, -0.305, -0.315, -0.305, -0.295, -0.29, -0.28, -0.27, -0.275, -0.275, -0.27, -0.25, -0.25, -0.255, -0.225, -0.22, -0.205, -0.2, -0.205, -0.215, -0.23, -0.22, -0.225, -0.225, -0.225, -0.23, -0.235, -0.24, -0.235, -0.22, -0.21, -0.205, -0.245, -0.285, -0.285, -0.3, -0.31, -0.33, -0.33, -0.325, -0.315, -0.32, -0.315, -0.325, -0.34, -0.345, -0.34, -0.34, -0.35, -0.345, -0.355, -0.33, -0.335, -0.33, -0.32, -0.345, -0.355, -0.34, -0.33]
    },
    'VT': {
      'rateRange': [184],
      'duration': [326],
      'totalDuration': 326,
      'nPoints': 47,
      'nWaves': 1,
      'minWaveWidth': 0,
      'compressionPolicy': 'skip',
      'range': {
        'min': -199.5,
        'max': -62.5
      },
      'dataPoints' : [-199.5, -198.5, -193.5, -188.5, -183.5, -177.5, -171.5, -166.5, -160.5, -155.5, -147.5, -137.5, -114.5, -102.5, -96.5, -92.5, -90.5, -87.5, -84.5, -81.5, -78.5, -74.5, -71.5, -69.5, -67.5, -65.5, -64.5, -62.5, -64.5, -67.5, -71.5, -76.5, -85.5, -90.5, -94.5, -96.5, -98.5, -100.5, -100.5, -97.5, -84.5, -90.5, -119.5, -160.5, -178.5, -188.5, -196.5]
    },
    'VF': {
      'rateRange': [-1],
      'duration': [180, 186, 180, 168, 150, 186, 174, 228, 240, 198, 138, 168, 210, 174, 174, 120],
      'totalDuration': 2874,
      'nPoints': 480,
      'nWaves': 16,
      'minWaveWidth': 0,
      'compressionPolicy': 'skip',
      'range': {
        'min': -148.5,
        'max': -119.5
      },
      'dataPoints' : [-137.5, -138.5, -137.5, -136.5, -134.5, -133.5, -131.5, -129.5, -127.5, -126.5, -124.5, -123.5, -122.5, -122.5, -122.5, -123.5, -125.5, -127.5, -129.5, -131.5, -133.5, -134.5, -136.5, -138.5, -140.5, -142.5, -143.5, -145.5, -145.5, -145.5, -145.5, -145.5, -145.5, -143.5, -142.5, -140.5, -136.5, -133.5, -127.5, -125.5, -123.5, -122.5, -122.5, -121.5, -120.5, -119.5, -119.5, -119.5, -121.5, -123.5, -125.5, -129.5, -134.5, -137.5, -139.5, -140.5, -142.5, -145.5, -146.5, -147.5, -147.5, -147.5, -146.5, -146.5, -145.5, -142.5, -140.5, -137.5, -135.5, -132.5, -128.5, -126.5, -123.5, -121.5, -120.5, -120.5, -121.5, -122.5, -122.5, -122.5, -123.5, -125.5, -128.5, -131.5, -134.5, -136.5, -138.5, -139.5, -140.5, -141.5, -141.5, -141.5, -141.5, -140.5, -139.5, -138.5, -136.5, -134.5, -132.5, -130.5, -127.5, -126.5, -126.5, -125.5, -126.5, -126.5, -126.5, -126.5, -126.5, -127.5, -129.5, -131.5, -132.5, -132.5, -133.5, -134.5, -135.5, -135.5, -136.5, -136.5, -135.5, -134.5, -132.5, -131.5, -129.5, -128.5, -126.5, -125.5, -125.5, -126.5, -126.5, -126.5, -127.5, -129.5, -131.5, -133.5, -135.5, -136.5, -138.5, -140.5, -142.5, -143.5, -144.5, -144.5, -145.5, -144.5, -143.5, -142.5, -140.5, -138.5, -136.5, -134.5, -132.5, -129.5, -127.5, -125.5, -124.5, -123.5, -122.5, -121.5, -120.5, -122.5, -124.5, -127.5, -130.5, -132.5, -134.5, -136.5, -139.5, -141.5, -144.5, -145.5, -145.5, -146.5, -146.5, -147.5, -147.5, -147.5, -147.5, -146.5, -145.5, -142.5, -139.5, -136.5, -132.5, -129.5, -127.5, -125.5, -124.5, -123.5, -122.5, -121.5, -121.5, -121.5, -123.5, -124.5, -126.5, -128.5, -131.5, -135.5, -139.5, -143.5, -146.5, -146.5, -145.5, -145.5, -144.5, -143.5, -142.5, -141.5, -140.5, -140.5, -139.5, -138.5, -137.5, -135.5, -133.5, -130.5, -128.5, -127.5, -127.5, -127.5, -126.5, -125.5, -124.5, -124.5, -125.5, -126.5, -127.5, -127.5, -128.5, -129.5, -130.5, -131.5, -131.5, -133.5, -135.5, -136.5, -136.5, -137.5, -137.5, -138.5, -138.5, -137.5, -137.5, -136.5, -136.5, -136.5, -136.5, -136.5, -136.5, -136.5, -136.5, -135.5, -133.5, -132.5, -131.5, -130.5, -129.5, -128.5, -127.5, -127.5, -127.5, -127.5, -127.5, -127.5, -127.5, -128.5, -130.5, -131.5, -131.5, -132.5, -133.5, -134.5, -135.5, -135.5, -135.5, -136.5, -136.5, -136.5, -137.5, -138.5, -138.5, -138.5, -138.5, -138.5, -138.5, -137.5, -136.5, -135.5, -134.5, -131.5, -129.5, -128.5, -127.5, -127.5, -126.5, -127.5, -127.5, -128.5, -129.5, -130.5, -131.5, -132.5, -132.5, -132.5, -133.5, -133.5, -133.5, -134.5, -135.5, -136.5, -136.5, -136.5, -136.5, -136.5, -136.5, -136.5, -134.5, -133.5, -133.5, -132.5, -132.5, -131.5, -131.5, -132.5, -132.5, -133.5, -134.5, -135.5, -136.5, -137.5, -138.5, -139.5, -139.5, -140.5, -140.5, -140.5, -140.5, -140.5, -140.5, -140.5, -138.5, -137.5, -136.5, -134.5, -132.5, -131.5, -128.5, -126.5, -125.5, -124.5, -124.5, -124.5, -124.5, -127.5, -130.5, -132.5, -133.5, -135.5, -137.5, -139.5, -141.5, -142.5, -144.5, -145.5, -147.5, -147.5, -147.5, -147.5, -147.5, -146.5, -146.5, -144.5, -141.5, -138.5, -133.5, -130.5, -127.5, -125.5, -124.5, -124.5, -122.5, -121.5, -120.5, -121.5, -122.5, -123.5, -124.5, -126.5, -131.5, -136.5, -138.5, -139.5, -142.5, -144.5, -146.5, -147.5, -148.5, -148.5, -148.5, -148.5, -147.5, -146.5, -145.5, -142.5, -140.5, -138.5, -134.5, -130.5, -127.5, -126.5, -123.5, -122.5, -121.5, -122.5, -123.5, -123.5, -123.5, -124.5, -127.5, -129.5, -132.5, -134.5, -137.5, -138.5, -139.5, -141.5, -142.5, -142.5, -143.5, -142.5, -142.5, -141.5, -140.5, -138.5, -137.5, -135.5, -133.5, -131.5, -129.5, -129.5, -130.5, -130.5, -131.5, -131.5, -132.5, -133.5, -134.5, -135.5, -136.5, -137.5, -138.5, -139.5, -139.5, -140.5, -140.5, -140.5, -140.5, -140.5, -139.5, -138.5, -136.5, -135.5, -133.5, -132.5, -130.5, -127.5, -125.5, -124.5, -124.5, -123.5, -124.5, -124.5, -125.5, -128.5, -131.5, -132.5, -134.5, -136.5]

    },
    'PEA':{
      'rateRange': [-1],
      'duration': [400],
      'totalDuration': 400,
      'nPoints': 13,
      'nWaves': 1,
      'minWaveWidth': 0,
      'compressionPolicy': 'skip',
      'range': {
        'min': -1,
        'max': 1
      },
      'dataPoints' : [0,0,0,0,0,0,0,0,-0.05,-0.1,0.1,0,0]
    },
    'ASYSTOLE':{
      'rateRange': [-1],
      'duration': [400],
      'totalDuration': 400,
      'nPoints': 7,
      'nWaves': 1,
      'minWaveWidth': 0,
      'compressionPolicy': 'skip',
      'range': {
        'min': -0.75,
        'max': 3
      },
      'dataPoints' : [0,0.05,0,0.05,0,-0.05,0]
     }
  },
  'BP':{
    'NORMAL': {

    }
  },
  'O2Sat':{
    'NORMAL': {

    }
  }
}
