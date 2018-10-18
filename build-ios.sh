#!/bin/bash

npm install
react-native link
echo "removing duplicate symbols"
grep -rl --include \*.h --include \*.cpp --include \*.cc --include \*.in AddLogSink node_modules/react-native/third-party/ | xargs sed -i '' 's/AddLogSink/ReactAddLogSink/g'
grep -rl --include \*.h --include \*.cpp --include \*.cc --include \*.in RemoveLogSink node_modules/react-native/third-party/ | xargs sed -i '' 's/RemoveLogSink/ReactRemoveLogSink/g'
echo "done removing duplicate symbols"
