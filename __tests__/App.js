import 'react-native';
import React from 'react';
import App from '../src/App';

const Platform = require('Platform');
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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
