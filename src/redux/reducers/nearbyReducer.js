import { ControllerValues, ACTIONS} from "../actions/nearbyActions"
import { combineReducers } from 'redux'
import { NearbyAPI } from "react-native-nearby-api";

import API_KEYS from '../../api'


const initialState = {
    nearbyApi: new NearbyAPI(true),
    controllerValues : [{
        controllerValueType: ControllerValues.HEART_RATE,
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

const MockApp = combineReducers({
    NearbyApi,
    HeartRate
});

export default MockApp;