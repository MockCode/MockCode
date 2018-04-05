import React from 'react';
import { VitalSlider } from '../src/components/VitalSlider';
import {ACTIONS} from '../src/redux/actions/nearbyActions';
import {WAVE_FORMS} from '../src/utils/constants';

describe('VitalSlider PropTypes Tests', () => {
    let oldError;
    let mockError;

    beforeAll(() => {
        oldError = global.console.error;
    });

    beforeEach(() => {
        mockError = jest.fn();
        global.console.error = mockError;
    });

    afterAll(() => {
        global.console.error = oldError;
    });

    it('fails with a bad value for slider name', () => {
        <VitalSlider
            min={0}
            max={100}
            initialValue={50}
            actionType={ACTIONS.UPDATE_HEART_RATE}
            waveform={WAVE_FORMS[0]}
            sliderName={4} />

        expect(mockError).toHaveBeenCalledTimes(1);
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('Invalid prop `sliderName` of type `number`'));
        
    });

    it('fails with insufficient number of props', () => {
        <VitalSlider />

        expect(mockError).toHaveBeenCalledTimes(6);
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `initialValue` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `actionType` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `waveform` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `min` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `max` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('The prop `initialValue` is marked as '
            + 'required in `VitalSlider`, but its value is `undefined`.'));
    });

    it('initial value prop fails with string', () => {
        <VitalSlider
            min={0}
            max={100}
            initialValue="hoeboi"
            actionType={ACTIONS.UPDATE_HEART_RATE}
            waveform={WAVE_FORMS[0]}
            sliderName={4} />
        
        expect(mockError).toHaveBeenCalledTimes(1);
        expect(mockError).toHaveBeenCalledWith(
            expect.stringContaining('Invalid prop `initialValue` of type `string`')
        )
    })
});