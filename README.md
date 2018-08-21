# ![MockCode](https://github.com/hughboi/hughcraig.org/blob/master/res/MockCode-feature-graphic.png)
Unit Tests: [![Build Status](https://travis-ci.org/MockCode/MockCode.svg?branch=master)](https://travis-ci.org/MockCode/MockCode)
iOS: [![Build status](https://build.appcenter.ms/v0.1/apps/b8b57cb3-e3f7-4a43-ba80-f77012d4962f/branches/master/badge)](https://appcenter.ms)
Android: [![Build status](https://build.appcenter.ms/v0.1/apps/71ec92b4-e66e-418d-b766-2451ac730c6d/branches/master/badge)](https://appcenter.ms)

**Mock code** is a cross-platform application that aides in medical training for CPR, resuscitation and other simulated trauma scenarios.

Developed with react native, cross-platform communication between tablets allows for seamless simulation of real medical environments. CPR instructors can enhance learning with real time feedback to help give experience reading a situation by looking at real monitors and facial expressions.

A three device setup allows for an instructor to control a scenario remotely and display feedback on two tablets, one showing a vital sign monitor and the other having a simulated patients face.

## Building
### IOS
```
npm install
react-native link
grep -rl --include \*.h --include \*.cpp --include \*.cc --include \*.in AddLogSink node_modules/react-native/third-party/ | xargs sed -i '' 's/AddLogSink/ReactAddLogSink/g'
grep -rl --include \*.h --include \*.cpp --include e*.cc --include \*.in RemoveLogSink node_modules/react-native/third-party/ | xargs sed -i '' 's/RemoveLogSink/ReactRemoveLogSink/g'
Note for fred : `node_modules/react-native-webgl/ios/``
```

### Android
```
npm install (or yarn install)
react-native run-android (to run with connected android device using ADB)
```
