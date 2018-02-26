export const UPDATE_SLIDER = 'UPDATE_SLIDER';

export const ACTIONS = {
    UPDATE_HEART_RATE: "UPDATE_HEART_RATE",
    UPDATE_BLOOD_PRESSURE: "UPDATE_BLOOD_PRESSURE",
    UPDATE_O2SAT: "UPDATE_O2_SAT",
    UPDATE_ETCO2: "UPDATE_ET_CO2"
}

export const ControllerValues = {
    HEART_RATE: "HEART_RATE"
}


export function Update_Slider(slider, value) {
    return { type: ACTIONS.UPDATE_HEART_RATE, value}
}