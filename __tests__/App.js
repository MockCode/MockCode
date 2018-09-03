//NOTE: react-test-renderer must be required after react-native
import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../src/App';

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'Jest';
  return Platform;
});

jest.mock('react-native-nearby-api', () => {
  return {
      NearbyAPI: jest.fn()
  }
});

it('renders correctly', () => {
  renderer.create(
    <App />
  );
});