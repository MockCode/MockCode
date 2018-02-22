export const UPDATE_SLIDER = 'UPDATE_SLIDER';

export const ACTIONS = {
    UPDATE_HEART_RATE: "UPDATE_HEART_RATE"
}

export const ControllerValues = {
    HEART_RATE: "HEART_RATE"
}


export function Update_Slider(slider, value) {
    return { type: ACTIONS.UPDATE_HEART_RATE, value}
}