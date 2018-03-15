import { NearbyAPI } from "react-native-nearby-api";
import { API_KEYS } from '../../api'

export const UPDATE_SLIDER = 'UPDATE_SLIDER';

export const ACTIONS = {
    UPDATE_HEART_RATE: "UPDATE_HEART_RATE",
    UPDATE_BLOOD_PRESSURE: "UPDATE_BLOOD_PRESSURE",
    UPDATE_O2SAT: "UPDATE_O2_SAT",
	  UPDATE_ETCO2: "UPDATE_ET_CO2",
	  UPDATE_WAVEFORM: "UPDATE_WAVEFORM",
    MESSAGE_FOUND: "ON_MESSAGE_FOUND",
    UPDATE_FACE: "UPDATE_FACE"
}

export const ControllerValues = {
  HEART_RATE: "HEART_RATE"
}


export function Update_Store(slider, value) {
  console.log("test")
  console.log(slider)

  return { type: slider, value:value}
}
export function Update_Value(type, value) {
  return (dispatch, getState) => {
    // var state = getState();
    let m = { message: value, type: type };
    getState().NearbyApi.nearbyApi.publish(JSON.stringify(m))
    return dispatch(Update_Store(type, value));
  }

}




export function On_Message_Found(message) {
  return (dispatch) => {
    let m = JSON.parse(message);
    dispatch(Update_Store(m.type, m.message))
    return dispatch({ type: ACTIONS.MESSAGE_FOUND, value: message })
  }
}

export function On_Message(message) {
  return { type: ACTIONS.MESSAGE_FOUND, value: message }
}

// export function Network_Connect_and_listen(value) {
//   return (dispatch, getState) => {
//     return getstate().nearbyAPI.connect(API_KEYS.nearby)
//   }

// }
