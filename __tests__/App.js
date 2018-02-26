import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../src/App';

const Platform = require('Platform');
// import { platform } from 'os';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'Jest';
  return Platform;
});

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'Jest';
  return Platform;
});

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});

it("colton", () => {
  console.log(Platform.OS)
  
})
