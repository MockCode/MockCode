import { ControllerValues, ACTIONS} from "../actions/nearbyActions"
import { combineReducers } from 'redux'
import { NearbyAPI } from "react-native-nearby-api";

import API_KEYS from '../../api'


const initialState = {
    nearbyApi: new NearbyAPI(true),
    devices:[{id:"sample"}]
}


function NearbyApi(state = initialState, action) {
  console.log("hit the reducer")
  switch (action.type) {
  case ACTIONS.MESSAGE_FOUND:
    console.log("message found:", action.value)
  case ACTIONS.HELLO_RESPONSE:
    state.devices.push({id:action.value})
    console.log(state)
    console.log("action:", action.value)
    return state
  default:
    return state
  }
}

function HeartRate(state = 80, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_HEART_RATE:
      return action.value
    default:
      return state
  }
}

function bloodPressure(state = '130/86', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_BLOOD_PRESSURE:
      return action.value
    default:
      return state
  }
}

function O2Sat(state = 50, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_O2SAT:
      return action.value
    default:
      return state
  }
}

const MockApp = combineReducers({
    NearbyApi,
    HeartRate,
    bloodPressure,
    O2Sat
});

export default MockApp;