import { ControllerValues, ACTIONS} from "../actions/nearbyActions"
import { combineReducers } from 'redux'
import { NearbyAPI } from "react-native-nearby-api";

import API_KEYS from '../../api'


const initialState = {
    nearbyApi: new NearbyAPI(true),
    controllerValues : [{
        controllerValueType: ControllerValues.HEART_RATE,
        value: 0
    },{
      controllerValueType: ControllerValues.BLOOD_PRESSURE,
      value: 0
    },{
      controllerValueType: ControllerValues.O2Sat,
      value: 0
    }]
}


function NearbyApi(state = initialState, action) {
  console.log("hit the reducer")
  switch (action.type) {
  case ACTIONS.MESSAGE_FOUND:
    console.log(action.value)
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

//Ideally this action just changes the source state for the image, not sure how the formatting should go
function face(state = 'normal', action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FACE:
      return action.value
    default:
      return state
  }
}

const MockApp = combineReducers({
    NearbyApi,
    HeartRate,
    bloodPressure,
    O2Sat,
    face
});

export default MockApp;
