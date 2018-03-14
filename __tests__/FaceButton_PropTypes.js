// Mock the faceNames list prior to importing FaceButton so that its import is
// affected. Ideally this happens only for the tests that need it but I can't
// figure out how to inject a dependency for a constant. Functions are easy
// enough...
jest.mock('../src/screens/PatientScreen', () => {
  return {faceNames: {test1: 'Test1'}};
});

import React from 'react';
import FaceButton from '../src/components/FaceButton';

// Just a note for all of those passing through here: *REACT EATS DUPLICATE
// ERROR MESSAGES* (https://github.com/facebook/react/issues/7047). This was
// relevant here because I tried testing duplicate error messages from PropTypes
// failures and couldn't get the mocked console.error to be called. Be careful.
describe('FaceButton PropTypes tests', () => {
  // Storage for the old error function
  let oldError;

  // Save a reference to the old error function so we can replace it later
  beforeAll(() => {
    oldError = global.console.error;
  });

  // Mock console.error because that's where PropTypes is logging errors.
  // This needs to be done before each test so we can count what we're doing
  // in the test.
  beforeEach(() => {
    global.console.error = jest.fn();
  });

  // When everything's done we need to put the old function back
  afterAll(() => {
    global.console.error = oldError;
  });

  it('fails with bad value type (number)', () => {
    // Build the object
    <FaceButton value={2} />;

    // Test that our mock function got called once and with an error message
    // specifically about bad number type
    expect(global.console.error.mock.calls.length).toBe(1);
    expect(global.console.error.mock.calls[0][0])
      .toBe('Warning: Failed prop type: Invalid value prop type: number\n' +
            '    in FaceButton');
  });

  it('fails with missing value prop', () => {
    // Build the object
    <FaceButton />;

    // Test that our mock function got called once with an error message
    // specifically about missing value prop
    expect(global.console.error.mock.calls.length).toBe(1);
    expect(global.console.error.mock.calls[0][0])
      .toBe('Warning: Failed prop type: Value prop is required\n' +
            '    in FaceButton');
  });

  describe('FaceButton tests requiring faceNames', () => {
    beforeAll(() => {
    });
    it('fails with bad face name', () => {
      // Build the object
      <FaceButton value='fake'/>;

      // Test that our mock function got called once with an error message
      // specifically about missing value prop
      expect(global.console.error.mock.calls.length).toBe(1);
      expect(global.console.error.mock.calls[0][0])
        .toBe('Warning: Failed prop type: Value prop is not a patient face ' +
              'name: fake\n    in FaceButton');
    });

    it('succeeds with a real face name', () => {
      // Build the object
      <FaceButton value='test1'/>;
      expect(global.console.error.mock.calls.length).toBe(0);
    });
  })
});
