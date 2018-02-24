import { NearbyAPI } from "react-native-nearby-api";
import { API_KEYS } from '../../api'

export const UPDATE_SLIDER = 'UPDATE_SLIDER';

export const ACTIONS = {
  UPDATE_HEART_RATE: "UPDATE_HEART_RATE",
  MESSAGE_FOUND: "ON_MESSAGE_FOUND"
}

export const ControllerValues = {
  HEART_RATE: "HEART_RATE"
}


export function Update_Slider(slider, value) {
  return { type: ACTIONS.UPDATE_HEART_RATE, value}
}

export function On_Message_Found(message) {
  return {type: ACTIONS.MESSAGE_FOUND, value:message}
}

export function Network_Connect_and_listen(value) {
  return (dispatch, getState) => {
		return getstate().nearbyAPI.connect(API_KEYS.nearby)
  }
  
}