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
  let mockError;

  // Save a reference to the old error function so we can replace it later
  beforeAll(() => {
    oldError = global.console.error;
  });

  // Mock console.error because that's where PropTypes is logging errors.
  // This needs to be done before each test so we can count what we're doing
  // in the test.
  beforeEach(() => {
    mockError = jest.fn();
    global.console.error = mockError;
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
    expect(mockError).toHaveBeenCalledTimes(1);
    expect(mockError)
      .toHaveBeenLastCalledWith(
        expect.stringContaining('Invalid value prop type: number')
      );
  });

  it('fails with missing value prop', () => {
    // Build the object
    <FaceButton />;

    // Test that our mock function got called once with an error message
    // specifically about missing value prop
    expect(mockError).toHaveBeenCalledTimes(1);
    expect(mockError)
      .toHaveBeenLastCalledWith(
        expect.stringContaining('Failed prop type: Value prop is required')
      );
  });

  describe('FaceButton tests requiring faceNames', () => {
    it('fails with bad face name', () => {
      // Build the object
      <FaceButton value='fake'/>;

      // Test that our mock function got called once with an error message
      // specifically about missing value prop
      expect(mockError).toHaveBeenCalledTimes(1);
      expect(mockError).toHaveBeenLastCalledWith(
        expect.stringContaining('Failed prop type: Value prop is not a ' +
                                'patient face name: fake')
      );
    });

    it('succeeds with a real face name', () => {
      // Build the object
      <FaceButton value='test1'/>;
      expect(mockError).toHaveBeenCalledTimes(0);
    });
  })
});
